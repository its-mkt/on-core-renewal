/* 온코어 메인 v0.2 — 고도몰 스킨용 스크립트
   - 상품 정보는 화면의 마크업(고도몰 목록 템플릿이 출력)에서만 읽는다. 상품 데이터를 따로 들고 있지 않다.
   - 스킨 HTML 안에 넣으면 고도몰 템플릿 엔진이 중괄호를 해석하므로, 반드시 별도 .js 파일로 불러온다.
   - 모든 클래스·ID·저장소 키는 oc- 로 시작해 고도몰 공통 스크립트·CSS 와 겹치지 않는다. */
(function () {
  'use strict';

  // 견적 폼 주소: 고도몰에 올릴 때는 '/dbk/dbk_estimate_form.php' 로 바꾼다 (시안에서는 실제 사이트 폼을 연다)
  var ESTIMATE_FORM = 'https://www.on-core.co.kr/dbk/dbk_estimate_form.php';

  /* ── 공통 ── */
  var root = document.querySelector('.oc');
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var store = {
    get: function (k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* 저장 불가 환경 */ } }
  };

  var toastTimer;
  function toast(html) {
    var t = $('#oc-toast');
    t.innerHTML = html;
    t.classList.add('oc-is-on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove('oc-is-on'); }, 2400);
  }

  /* ── 상품 정보 읽기: 카드(.oc-card) 또는 data-* 를 가진 버튼에서 ── */
  function goodsOf(el) {
    if (el.getAttribute('data-name')) {
      return { no: el.getAttribute('data-goodsno'), name: el.getAttribute('data-name'), img: el.getAttribute('data-img') || '', price: el.getAttribute('data-price') || '' };
    }
    var card = el.closest('[data-goodsno]');
    if (!card) return null;
    var img = $('.oc-card-img img', card), price = $('.oc-card-price b', card), name = $('.oc-card-name', card);
    var full = name && name.getAttribute('data-oc-fullname'); // 카드엔 괄호 사양을 뺀 이름이 보여도 견적함·비교엔 전체 이름
    return { no: card.getAttribute('data-goodsno'), name: full || (name ? name.textContent.trim() : ''), img: img ? img.getAttribute('src') : '', price: price ? price.textContent.trim() : '' };
  }

  /* ── 카드 상품명: 이름 뒤에 붙은 괄호(사양) 숨기기 (2026-10-28 사용자 결정, 화면에서만) ──
     예: 'LENOVO P3 Ultra SFF (Ultra7-265/16GB/512GB/230W/FreeDos)' → 'LENOVO P3 Ultra SFF'. 이름 앞 괄호('(2Way) Lenovo …')는 그대로.
     사양은 카드 사양 줄에 따로 나온다. 전체 이름은 data-oc-fullname·title(마우스를 올리면 보임)에 남기고, 견적함·비교는 전체 이름을 쓴다(goodsOf). 고도몰 스킨 oncore.js 와 같은 코드 */
  // 끝의 괄호 묶음 중 '/'가 든 사양 목록만 뺀 이름 (여러 개면 모두). '(SAN)'·'(NAS)'·'(SAN+NAS)' 같은 제품 종류 표시는 남긴다 (2026-10-28 사용자 결정)
  // + 이름 뒤 대괄호부터 끝까지(예: 'ThinkPad L16 Gen1 21L3003WKR [U7-155H] 16GB 512GB 16형 Win11Home' → 'ThinkPad L16 Gen1 21L3003WKR'). 이름 맨 앞의 대괄호('[특가] …')는 남긴다
  function shortName(nm) { var s = String(nm || '').replace(/(\s*[(（][^()（）]*\/[^()（）]*[)）])+\s*$/, '').replace(/\s+\[[^\]]*\].*$/, '').trim(); return s || String(nm || ''); }
  // 모든 화면의 제품명(2026-10-28 사용자 결정, 카드 밖으로 넓힘): 카드 이름 · 상품 상세 제목 · 헤더 검색 추천 상품 · 상품 상세로 가는 링크
  var NAME_SEL = '.oc-card-name, .oc-gv-name, .oc-mini-name, a[href*="goods-view.html"]';
  function trimCardNames(root) {
    $$(NAME_SEL, root).forEach(function (h) {
      if (h.hasAttribute('data-oc-fullname')) return;
      var el = h.matches('.oc-card-name') ? ($('a', h) || h) : h, full = el.textContent.replace(/\s+/g, ' ').trim();
      h.setAttribute('data-oc-fullname', full);
      // 글자만 바꾼다 — 링크 안의 사진·아이콘 같은 다른 요소는 그대로 두려고, 사양 괄호가 든 마지막 글자 덩어리만 줄인다
      var w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT), t, last = null;
      while ((t = w.nextNode())) if (t.nodeValue.trim()) last = t;
      if (!last) return;
      var s = shortName(last.nodeValue.replace(/\s+/g, ' ').trim());
      if (s === last.nodeValue.replace(/\s+/g, ' ').trim()) return;
      last.nodeValue = s;
      if (!el.getAttribute('title')) el.setAttribute('title', full);
    });
  }
  trimCardNames();

  /* ── 스펙: 짧은 설명(shortDescription) "항목: 값 / 항목: 값" → 목록 ── */
  function parseSpec(s) { // 비교 화면도 같은 규칙으로 읽는다
    return String(s || '').split(' / ').map(function (part) {
      var i = part.indexOf(':');
      return i > -1 ? [part.slice(0, i).trim(), part.slice(i + 1).trim()] : ['', part.trim()];
    }).filter(function (r) { return r[1]; });
  }
  $$('.oc-card-spec[data-spec]').forEach(function (ul) {
    var rows = parseSpec(ul.getAttribute('data-spec'));
    if (!rows.length) { ul.remove(); return; }
    // 카드 사양은 항상 4줄: 넘치면 앞 4줄만, 모자라면 빈 줄로 채운다(카드끼리 높이를 맞추기 위해 — 운영자는 '짧은 설명'을 4항목으로 쓴다)
    rows = rows.slice(0, 4);
    var html = rows.map(function (r) { return '<li class="oc-card-spec-row">' + (r[0] ? '<span class="oc-card-spec-k">' + esc(r[0]) + '</span>' : '') + esc(r[1]) + '</li>'; }).join('');
    for (var k = rows.length; k < 4; k++) html += '<li class="oc-card-spec-row" aria-hidden="true">&nbsp;</li>';
    ul.innerHTML = html;
  });

  /* ── 표: 768 미만에서 카드로 쌓을 때 쓰는 칸 이름(data-label)을 머리줄 글자로 채운다 (게시글 본문 표처럼 직접 못 붙이는 표용) ── */
  $$('.oc-tbl').forEach(function (t) {
    var heads = $$('thead th', t).map(function (th) { return th.textContent.trim(); });
    if (!heads.length) return;
    $$('tbody tr', t).forEach(function (tr) {
      Array.prototype.forEach.call(tr.children, function (c, i) { if (c.tagName === 'TD' && !c.hasAttribute('data-label') && heads[i]) c.setAttribute('data-label', heads[i]); });
    });
  });

  /* ── 헤더 ── */
  var top = $('#oc-top'); // 안내줄+헤더 고정 묶음 (고도몰에서는 #header_warp)
  var onScroll = function () { top.classList.toggle('oc-is-stuck', window.scrollY > 10); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // 마우스: 올리면 열리고, 그 직후(0.6초 안)의 클릭은 닫지 않는다 — 올리자마자 누르면 열렸다 바로 닫혀 버리기 때문
  // 마우스로 여는 동작은 CSS 마우스 효과와 같은 조건(마우스 기기 + 768 이상)에서만. 터치 기기는 눌러서 연다
  var HOVER = '(hover:hover) and (pointer:fine) and (min-width:768px)';
  var megaBtn = $('.oc-has-mega .oc-gnb-link'), mega = $('#oc-mega'), megaTimer, megaHoverAt = 0;
  function megaOpen(v) { clearTimeout(megaTimer); mega.hidden = !v; megaBtn.setAttribute('aria-expanded', String(v)); }
  megaBtn.addEventListener('click', function () { if (!mega.hidden && Date.now() - megaHoverAt < 600) return; megaOpen(mega.hidden); });
  if (window.matchMedia(HOVER).matches) {
    [megaBtn, mega].forEach(function (el) {
      el.addEventListener('mouseenter', function () { if (mega.hidden) megaHoverAt = Date.now(); megaOpen(true); });
      el.addEventListener('mouseleave', function () { megaTimer = setTimeout(function () { megaOpen(false); }, 160); });
    });
  }

  var dropBtn = $('.oc-has-drop .oc-gnb-link'), drop = $('#oc-drop'), dropTimer, dropHoverAt = 0;
  function dropOpen(v) { clearTimeout(dropTimer); drop.hidden = !v; dropBtn.setAttribute('aria-expanded', String(v)); }
  dropBtn.addEventListener('click', function () { if (!drop.hidden && Date.now() - dropHoverAt < 600) return; dropOpen(drop.hidden); });
  if (window.matchMedia(HOVER).matches) {
    [dropBtn, drop].forEach(function (el) {
      el.addEventListener('mouseenter', function () { if (drop.hidden) dropHoverAt = Date.now(); dropOpen(true); });
      el.addEventListener('mouseleave', function () { dropTimer = setTimeout(function () { dropOpen(false); }, 160); });
    });
  }

  /* ── 모바일 전체 메뉴 아코디언: 하위가 있는 메뉴(.oc-mnav-acc)를 누르면 하위 목록을 펼치고 접는다 ── */
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('.oc-mnav-acc'); if (!b) return;
    var p = document.getElementById(b.getAttribute('aria-controls')), on = b.getAttribute('aria-expanded') !== 'true';
    b.setAttribute('aria-expanded', on ? 'true' : 'false');
    if (p) p.hidden = !on;
  });

  /* ── 패널 열기·닫기 (검색, 견적함, 모바일 메뉴) ── */
  var scrim = $('#oc-scrim'), openPanel = null, lastFocus = null;
  function open(id) {
    close();
    megaOpen(false);
    dropOpen(false);
    var el = document.getElementById(id);
    if (!el) return;
    lastFocus = document.activeElement;
    el.hidden = false;
    openPanel = el;
    if (el.classList.contains('oc-drawer')) { scrim.hidden = false; document.body.classList.add('oc-is-locked'); }
    if (id === 'oc-search') { scrim.hidden = false; document.body.classList.add('oc-is-searching'); } // 패널이 어디서 끝나는지 보이게 아래 페이지를 어둡게 (스크롤은 잠그지 않음)
    var f = el.querySelector('input,button,a');
    if (f) setTimeout(function () { f.focus(); }, 50);
  }
  function close() {
    if (!openPanel) return;
    openPanel.hidden = true;
    openPanel = null;
    scrim.hidden = true;
    document.body.classList.remove('oc-is-locked', 'oc-is-searching');
    if (lastFocus) lastFocus.focus({ preventScroll: true });
  }
  document.addEventListener('click', function (e) {
    var o = e.target.closest('[data-open]');
    if (o) { e.preventDefault(); open(o.getAttribute('data-open')); return; }
    if (e.target.closest('[data-close]')) { close(); return; }
    if (openPanel && openPanel.id === 'oc-search' && !e.target.closest('#oc-search')) close();
    if (!mega.hidden && !e.target.closest('.oc-has-mega,#oc-mega')) megaOpen(false);
    if (!drop.hidden && !e.target.closest('.oc-has-drop')) dropOpen(false);
  });
  scrim.addEventListener('click', close);
  // 모바일 전체 메뉴는 768 미만 전용(햄버거 버튼도 그때만 보임) — 창을 넓혀 768 이상이 되면 열려 있던 메뉴를 닫는다
  var mqWide = window.matchMedia && window.matchMedia('(min-width:768px)');
  if (mqWide) {
    var onWide = function () { if (mqWide.matches && openPanel && openPanel.id === 'oc-mnav') close(); };
    if (mqWide.addEventListener) mqWide.addEventListener('change', onWide); else if (mqWide.addListener) mqWide.addListener(onWide);
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { close(); megaOpen(false); dropOpen(false); }
  });

  /* ── 히어로 슬라이드 (통이미지 배너) ── */
  // 히어로가 없는 페이지(서브 페이지)에서는 슬라이드 구간을 건너뛴다
  if ($('.oc-hero')) (function () {
    var hero = $('.oc-hero'), slides = $$('.oc-slide'), cur = 0, heroTimer, paused = false;
    // 점(페이지 표시)은 배너 수만큼 여기서 만든다 → 관리자에서 배너를 늘리거나 줄여도 HTML 을 고칠 필요가 없다
    $('.oc-dots').innerHTML = slides.map(function (s, k) {
      s.setAttribute('aria-label', (k + 1) + ' / ' + slides.length);
      return '<button type="button" role="tab" aria-label="' + (k + 1) + '번 슬라이드" class="oc-dot"><i class="oc-dot-bar"></i></button>';
    }).join('');
    $('.oc-hero-ctrl').hidden = slides.length < 2;
    var dots = $$('.oc-dots button');
    var DUR = parseFloat(getComputedStyle(root).getPropertyValue('--oc-dur')) * 1000 || 6000; // main.css --oc-dur
    function go(i) {
      cur = (i + slides.length) % slides.length;
      slides.forEach(function (s, k) { s.classList.toggle('oc-is-on', k === cur); s.setAttribute('aria-hidden', String(k !== cur)); });
      dots.forEach(function (d, k) {
        d.setAttribute('aria-selected', String(k === cur));
        var bar = d.querySelector('i'); bar.style.animation = 'none'; void bar.offsetWidth; bar.style.animation = '';
      });
      schedule();
    }
    function schedule() { clearTimeout(heroTimer); if (!paused) heroTimer = setTimeout(function () { go(cur + 1); }, DUR); }
    dots.forEach(function (d, k) { d.addEventListener('click', function () { go(k); }); });
    // 손가락으로 밀어 넘기기: 가로로 40px 넘게, 세로보다 확실히 가로로 밀었을 때만 (세로 스크롤과 헷갈리지 않게)
    var track = $('.oc-hero-track'), sx = 0, sy = 0, swiped = false;
    track.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; sy = e.touches[0].clientY; swiped = false; }, { passive: true });
    track.addEventListener('touchend', function (e) {
      var dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
      if (slides.length > 1 && Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.2) { swiped = true; go(cur + (dx < 0 ? 1 : -1)); }
    }, { passive: true });
    track.addEventListener('click', function (e) { if (swiped) { e.preventDefault(); swiped = false; } }, true); // 밀고 뗀 손가락이 배너 링크로 이동하지 않게
    $('[data-pause]').addEventListener('click', function () {
      paused = !paused;
      hero.classList.toggle('oc-is-paused', paused);
      this.setAttribute('aria-label', paused ? '자동 넘김 재생' : '자동 넘김 멈춤');
      if (paused) clearTimeout(heroTimer); else go(cur + 1);
    });
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { paused = true; hero.classList.add('oc-is-paused'); }
    go(0);
  })();

  /* ── 탭 (카테고리별 추천 제품: 진열 여러 개 중 하나만 보이기) ── */
  function tabs(listSel, attr, panelOf, onPick) {
    var list = typeof listSel === 'string' ? $(listSel) : listSel; if (!list) return;
    var btns = $$('[role=tab]', list);
    function pick(btn, focus) {
      btns.forEach(function (b) { var on = b === btn; b.setAttribute('aria-selected', String(on)); b.tabIndex = on ? 0 : -1; panelOf(b).hidden = !on; });
      if (focus) btn.focus();
      if (onPick) onPick(btn);
    }
    list.addEventListener('click', function (e) { var b = e.target.closest('[role=tab]'); if (b) pick(b); });
    list.addEventListener('keydown', function (e) {
      var next = e.key === 'ArrowRight' || e.key === 'ArrowDown', prev = e.key === 'ArrowLeft' || e.key === 'ArrowUp';
      if (!next && !prev) return;
      var k = btns.indexOf(document.activeElement); if (k < 0) return;
      e.preventDefault();
      pick(btns[(k + (next ? 1 : -1) + btns.length) % btns.length], true);
    });
    return pick;
  }
  // 카테고리별 추천 제품 '더보기': 지금 고른 탭의 전체 목록으로 (패널의 data-more — 고도몰은 패널 data-oc-cate 로 분류 목록 주소를 만든다, oncore-main.js)
  var bestMore = $('[data-oc-best-more]');
  function syncBestMore(b) {
    var p = b && $('#oc-best [data-panel="' + b.getAttribute('data-tab') + '"]');
    if (!bestMore || !p) return;
    bestMore.setAttribute('href', p.getAttribute('data-more') || 'pages/goods-all.html');
    bestMore.textContent = b.textContent.trim() + ' 제품 더보기'; // 버튼 글자에 분류 이름 — 어디로 가는지 바로 보이게
  }
  // 탭 묶음이 여러 개(#oc-best·#oc-g2b) — 패널 이름(all·server·ws)이 겹치므로 각 탭 묶음이 든 섹션 안에서만 찾는다
  $$('.oc-ftabs').forEach(function (list) {
    var sec = list.closest('section') || document;
    tabs(list, 'data-tab', function (b) { return $('[data-panel="' + b.getAttribute('data-tab') + '"]', sec); }, sec.id === 'oc-best' ? syncBestMore : null);
  });
  syncBestMore($('#oc-best .oc-ftabs [aria-selected="true"]'));

  /* ── 링크형 목록 필터 (.oc-filter 안의 a — 상품 하위 분류·고도몰 말머리) ──
     모바일(768 미만)에서 분절형 틀이 화면 폭을 넘치면 필터 줄을 숨기고 도구줄 '총 N건' 옆의 선택 상자로 바꾼다(규칙 9-5).
     같은 화면을 거르는 버튼형 필터([data-filter-for])는 sub-biz.js 가 맡는다. 고르면 그 링크 주소로 이동한다.
     선택 상자 꾸미기(아래)보다 먼저 만들어 다른 선택 상자와 같은 모양이 되게 한다 */
  $$('.oc .oc-filter:not([data-filter-for])').forEach(function (bar) {
    var links = $$('a[href]', bar), tool = $('.oc-toolbar', bar.parentNode);
    if (links.length < 2 || !tool) return;
    var box = document.createElement('span'), sel = document.createElement('select');
    box.className = 'oc-fsel';
    sel.className = 'oc-select';
    sel.setAttribute('aria-label', bar.getAttribute('aria-label') || '분류');
    links.forEach(function (a) {
      var o = document.createElement('option');
      o.value = a.getAttribute('href'); o.textContent = a.textContent;
      o.selected = a.getAttribute('aria-current') === 'page';
      sel.appendChild(o);
    });
    box.appendChild(sel);
    var cnt = tool.firstElementChild; // '총 N건' 바로 오른쪽
    tool.insertBefore(box, cnt ? cnt.nextSibling : tool.firstChild);
    sel.addEventListener('change', function () { if (sel.value) location.href = sel.value; });
    // 넘치는지 재려면 필터가 보여야 하므로 잠깐 펼친 뒤 정한다
    function fit() {
      bar.classList.remove('oc-is-compact');
      var compact = window.innerWidth < 768 && bar.scrollWidth > bar.clientWidth + 1;
      bar.classList.toggle('oc-is-compact', compact);
      box.classList.toggle('oc-is-on', compact);
    }
    var raf;
    window.addEventListener('resize', function () { cancelAnimationFrame(raf); raf = requestAnimationFrame(fit); });
    window.addEventListener('load', fit); // 웹폰트가 늦게 오면 칩 폭이 바뀐다
    fit();
  });

  /* ── 선택 상자 (.oc-select) ──
     모든 기기: .oc-sel 로 감싸 선 화살표 아이콘을 붙인다.
     마우스 기기(PC): 운영체제 기본 목록 대신 사이트 디자인 목록을 띄운다. 터치 기기는 휴대폰 기본 선택 화면이 더 쓰기 쉬워 그대로 둔다.
     원래 select 는 그 자리에 투명하게 남겨 값만 맞춘다 → 폼 전송·필수 검사·change 이벤트(상품 정렬 등)가 그대로 동작한다 */
  var SEL_ARROW = '<svg class="oc-sel-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var SEL_CHECK = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var selFine = window.matchMedia('(hover:hover) and (pointer:fine)').matches, selAll = [];
  $$('.oc select.oc-select').forEach(function (sel, n) {
    var wrap = document.createElement('div');
    wrap.className = 'oc-sel';
    sel.parentNode.insertBefore(wrap, sel);
    wrap.appendChild(sel);
    wrap.insertAdjacentHTML('beforeend', SEL_ARROW);
    // 필수 선택 상자의 빈 값('선택해 주세요')만 안내 문구로 본다. 정렬처럼 빈 값이 실제 선택지('' = 추천순)인 상자도 있다
    var isPh = function (o) { return sel.required && (!o || o.value === ''); };
    var ph = function () { sel.classList.toggle('oc-is-ph', isPh(sel.options[sel.selectedIndex])); };
    sel.addEventListener('change', ph);
    ph();
    if (!selFine) return;

    var id = 'oc-sel-' + n, lb = sel.labels && sel.labels[0];
    var name = lb ? lb.textContent.replace('*', '').trim() : (sel.getAttribute('aria-label') || '');
    var opts = Array.prototype.filter.call(sel.options, function (o) { return !isPh(o); }); // 안내 문구('선택해 주세요')는 목록에 넣지 않는다
    wrap.classList.add('oc-sel--custom');
    sel.tabIndex = -1;
    sel.setAttribute('aria-hidden', 'true');
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'oc-select oc-sel-btn';
    btn.setAttribute('aria-haspopup', 'listbox');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', id);
    btn.innerHTML = '<span></span>';
    var list = document.createElement('ul');
    list.className = 'oc-sel-list';
    list.id = id;
    list.setAttribute('role', 'listbox');
    if (name) list.setAttribute('aria-label', name);
    list.tabIndex = -1;
    list.hidden = true;
    list.innerHTML = opts.map(function (o, i) {
      return '<li role="option" class="oc-sel-opt" id="' + id + '-' + i + '" data-i="' + i + '" aria-selected="false"><span>' + esc(o.textContent) + '</span>' + SEL_CHECK + '</li>';
    }).join('');
    wrap.insertBefore(btn, $('.oc-sel-ic', wrap));
    wrap.appendChild(list);
    var items = $$('.oc-sel-opt', list), act = -1;

    function sync() {
      var o = sel.options[sel.selectedIndex];
      btn.firstChild.textContent = o ? o.textContent : '';
      btn.classList.toggle('oc-is-ph', isPh(o));
      btn.setAttribute('aria-label', (name ? name + ', ' : '') + (o ? o.textContent : ''));
      items.forEach(function (li, i) { li.setAttribute('aria-selected', String(opts[i] === o)); });
      if (!isPh(o)) wrap.classList.remove('oc-is-invalid');
    }
    function setAct(i) {
      act = i;
      items.forEach(function (li, k) { li.classList.toggle('oc-is-active', k === i); });
      if (items[i]) { list.setAttribute('aria-activedescendant', items[i].id); items[i].scrollIntoView({ block: 'nearest' }); }
    }
    function openList() {
      selAll.forEach(function (s) { s.close(false); });
      list.hidden = false;
      wrap.classList.add('oc-is-open');
      btn.setAttribute('aria-expanded', 'true');
      // 아래 공간이 모자라면 위로 연다
      var r = btn.getBoundingClientRect(), h = list.offsetHeight + 16;
      wrap.classList.toggle('oc-is-up', r.bottom + h > window.innerHeight && r.top > h);
      setAct(Math.max(0, opts.indexOf(sel.options[sel.selectedIndex])));
      list.focus({ preventScroll: true });
    }
    function closeList(focusBtn) {
      if (list.hidden) return;
      list.hidden = true;
      wrap.classList.remove('oc-is-open');
      btn.setAttribute('aria-expanded', 'false');
      if (focusBtn) btn.focus();
    }
    function pick(i) {
      var o = opts[i];
      if (o && sel.value !== o.value) { sel.value = o.value; sel.dispatchEvent(new Event('change', { bubbles: true })); }
      sync();
      closeList(true);
    }
    btn.addEventListener('click', function () { if (list.hidden) openList(); else closeList(true); });
    btn.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); openList(); }
    });
    list.addEventListener('keydown', function (e) {
      var k = e.key;
      if (k === 'ArrowDown') { e.preventDefault(); setAct(Math.min(items.length - 1, act + 1)); }
      else if (k === 'ArrowUp') { e.preventDefault(); setAct(Math.max(0, act - 1)); }
      else if (k === 'Home') { e.preventDefault(); setAct(0); }
      else if (k === 'End') { e.preventDefault(); setAct(items.length - 1); }
      else if (k === 'Enter' || k === ' ') { e.preventDefault(); pick(act); }
      else if (k === 'Escape') { e.preventDefault(); e.stopPropagation(); closeList(true); } // 서랍까지 닫히지 않게
      else if (k === 'Tab') { closeList(false); }
    });
    list.addEventListener('mousemove', function (e) { var li = e.target.closest('.oc-sel-opt'); if (li) setAct(Number(li.getAttribute('data-i'))); });
    list.addEventListener('click', function (e) { var li = e.target.closest('.oc-sel-opt'); if (li) pick(Number(li.getAttribute('data-i'))); });
    sel.addEventListener('change', sync);
    sel.addEventListener('focus', function () { btn.focus(); }); // 라벨을 누르면 원래 select 로 가는 초점을 버튼으로 옮긴다
    sel.addEventListener('invalid', function () { wrap.classList.add('oc-is-invalid'); });
    selAll.push({ wrap: wrap, close: closeList });
    sync();
  });
  document.addEventListener('mousedown', function (e) {
    selAll.forEach(function (s) { if (!s.wrap.contains(e.target)) s.close(false); });
  });

  /* ── 견적함 ── */
  // 이미지 경로: 저장은 사이트 루트 기준(img/…)으로 통일하고, 보여 줄 때만 현재 페이지 위치에 맞춘다 (서브 페이지 시안은 window.OC_ROOT = '../')
  function imgRoot(p) { return String(p || '').replace(/^(\.\.\/)+/, ''); }
  function imgSrc(p) { p = imgRoot(p); return /^(https?:|\/|data:)/.test(p) ? p : (window.OC_ROOT || '') + p; }
  var quote = store.get('oc-quote', []); // [{no, name, img, price, qty}]
  function saveQuote() { store.set('oc-quote', quote); renderQuote(); }
  function findQ(no) { return quote.filter(function (q) { return q.no === no; })[0]; }
  function addQuote(g, silent) {
    if (!g || !g.no) return;
    var item = findQ(g.no);
    if (item) item.qty += 1; else quote.push({ no: g.no, name: g.name, img: imgRoot(g.img), price: g.price, qty: 1 });
    saveQuote();
    var qb = $('.oc-qbtn'); qb.classList.remove('oc-is-bump'); void qb.offsetWidth; qb.classList.add('oc-is-bump');
    if (!silent) toast('<b>' + esc(shortName(g.name)) + '</b> 견적함에 담았습니다');
  }
  // 견적 요청서로 넘길 주소: 기존 폼이 goodsNm·spec 값을 '내용' 칸에 자동으로 넣는다 (dbk_estimate_form.html)
  function formUrl() {
    var u = ESTIMATE_FORM + '?ptype=e';
    if (!quote.length) return u;
    if (quote.length === 1) u += '&goodsNo=' + encodeURIComponent(quote[0].no); // 1개면 폼 위쪽에 상품 사진·이름도 나온다
    var title = quote.length === 1 ? quote[0].name : '견적함 ' + quote.length + '개 품목';
    var lines = quote.map(function (q, i) { return (i + 1) + '. ' + q.name + ' (상품번호 ' + q.no + ') × ' + q.qty + '대'; }).join('\n');
    return u + '&goodsNm=' + encodeURIComponent(title) + '&spec=' + encodeURIComponent(lines);
  }
  function renderQuote() {
    var total = quote.reduce(function (a, q) { return a + q.qty; }, 0);
    $$('[data-qcount]').forEach(function (el) { el.textContent = total; el.classList.toggle('oc-is-zero', total === 0); });
    $('#oc-qlist').innerHTML = quote.map(function (q) {
      return '<li class="oc-qitem" data-no="' + esc(q.no) + '"><img src="' + esc(imgSrc(q.img)) + '" alt=""><div><b title="' + esc(q.name) + '">' + esc(shortName(q.name)) + '</b><small>' + esc(q.price || '견적 문의') + '</small>' +
        '<div class="oc-qty"><button type="button" data-q="-1" aria-label="수량 줄이기">−</button><input type="number" min="1" value="' + q.qty + '" aria-label="수량"><button type="button" data-q="1" aria-label="수량 늘리기">+</button></div></div>' +
        '<button type="button" class="oc-qdel">삭제</button></li>';
    }).join('');
    $('#oc-qempty').hidden = quote.length > 0;
    $('[data-qclear]').hidden = quote.length === 0;
    $('#oc-qsubmit').href = formUrl();
    $$('[data-quote-cmp]').forEach(function (b) { b.hidden = quote.length < 2; }); // 견적함 '비교하기' — 2개 이상일 때만
    $$('[data-quote-go]').forEach(function (b) { b.href = formUrl(); });
    $$('[data-add]').forEach(function (b) {
      var g = goodsOf(b), on = !!(g && findQ(g.no));
      b.classList.toggle('oc-is-on', on);
      b.textContent = on ? '담김 ✓' : '견적 담기';
    });
  }
  $('#oc-qlist').addEventListener('click', function (e) {
    var li = e.target.closest('.oc-qitem'); if (!li) return;
    var item = findQ(li.getAttribute('data-no'));
    if (e.target.closest('.oc-qdel')) { quote = quote.filter(function (q) { return q !== item; }); saveQuote(); return; }
    var d = e.target.closest('[data-q]');
    if (d) { item.qty = Math.max(1, item.qty + Number(d.getAttribute('data-q'))); saveQuote(); }
  });
  $('#oc-qlist').addEventListener('change', function (e) {
    var li = e.target.closest('.oc-qitem'); if (!li) return;
    findQ(li.getAttribute('data-no')).qty = Math.max(1, parseInt(e.target.value, 10) || 1); saveQuote();
  });
  $('[data-qclear]').addEventListener('click', function () { quote = []; saveQuote(); });
  document.addEventListener('click', function (e) {
    var q = e.target.closest('[data-quote]');
    if (q) { var g = goodsOf(q); if (g && !findQ(g.no)) addQuote(g, true); open('oc-quote'); return; }
    var a = e.target.closest('[data-add]');
    if (a) { var ga = goodsOf(a); if (findQ(ga.no)) open('oc-quote'); else addQuote(ga); }
    // 마무리 '견적 요청하기': 비어 있으면 링크 그대로 견적 요청서로, 담은 제품이 있으면 수량을 확인하도록 견적함을 연다
    var go = e.target.closest('[data-quote-go]');
    if (go && quote.length) { e.preventDefault(); open('oc-quote'); }
  });

  /* ── 비교 (고도몰 기본 기능 없음 → 견적함과 같은 스킨 JS + 브라우저 저장) ──
     담을 때 카드에 보이는 정보(사진·브랜드·이름·품번·가격·짧은 설명 사양)를 저장해 두고, 비교 화면은 저장한 값으로만 그린다.
     비교 체크·비교 바는 모든 폭 — 모바일(767 이하)은 CSS 가 바를 하단 고정 바 위 한 줄(사진만)로 바꾼다 (2026-11-11) */
  var cmp = store.get('oc-cmp', []); // [{no, name, img, price, brand, mfg, spec}]
  var cmpBar = $('#oc-cmp'), cmpView = $('[data-cmp-view]');
  function cmpHas(no) { return cmp.some(function (x) { return x.no === no; }); }
  function cmpOf(el) {
    var g = goodsOf(el); if (!g) return null;
    var card = el.closest('[data-goodsno]'), brand = $('.oc-brand', card), mfg = $('.oc-card-mfg', card), spec = $('.oc-card-spec', card);
    return { no: g.no, name: g.name, img: imgRoot(g.img), price: g.price, brand: brand ? brand.textContent.trim() : '',
      mfg: mfg ? mfg.textContent.replace('제조사 품번', '').trim() : '', spec: spec ? spec.getAttribute('data-spec') : '' };
  }
  function renderCmp() {
    store.set('oc-cmp', cmp);
    // 비교 바는 상품 카드(비교 체크)가 있는 페이지에서만. 로그인·고객센터 같은 페이지에서는 내용만 가린다
    var show = cmp.length > 0 && !!$('[data-cmp]');
    cmpBar.hidden = !show;
    document.body.classList.toggle('oc-has-cmp', show);
    var html = cmp.map(function (c) {
      return '<div class="oc-cmp-item"><img src="' + esc(imgSrc(c.img)) + '" alt=""><span title="' + esc(c.name) + '">' + esc(shortName(c.name)) + '</span><button type="button" data-cmp-del="' + esc(c.no) + '" aria-label="' + esc(c.name) + ' 비교에서 빼기">×</button></div>';
    }).join('');
    for (var i = cmp.length; i < 4; i++) html += '<div class="oc-cmp-slot">제품 추가</div>';
    $('#oc-cmpList').innerHTML = html;
    $('#oc-cmpCount').textContent = cmp.length + '/4';
    $$('[data-cmp]').forEach(function (c) { var g = goodsOf(c); c.checked = !!(g && cmpHas(g.no)); });
    if (cmpView) renderCmpView();
  }
  // 비교 화면: 제품이 열, 항목이 행. 사양 항목은 담은 제품들의 짧은 설명 라벨을 나온 순서대로 모은다
  /* ── 제품 비교 모바일(767 이하): 표 대신 '항목별 목록' (2026-10-28 사용자 결정) ──
     좁은 화면에 제품 4개를 칸으로 나누면 칸이 80px 남짓이라 이름·사양이 글자 중간에서 끊긴다.
     맨 위 제품 띠(번호·사진·이름·빼기) → 항목마다 제품 번호·이름과 값을 한 줄씩 → 맨 아래 제품별 견적 버튼.
     같은 항목의 값이 위아래로 붙어 있어 옆으로 밀거나 펼치지 않고 바로 비교된다. '다른 항목만 보기'(data-same)·값 다름 강조(oc-is-diff)는 표와 같다.
     PC(768 이상)는 CSS 가 이 목록을 숨기고 표를 보인다 */
  function renderCmpView() {
    if (cmp.length < 2) {
      cmpView.innerHTML = '<div class="oc-empty"><b class="oc-empty-t">비교할 제품을 2개 이상 골라 주세요.</b><p class="oc-empty-d">제품 목록에서 카드 아래 \'비교\'를 체크하면 최대 4개까지 나란히 볼 수 있습니다.</p>' +
        '<a href="' + esc((window.OC_ROOT || '') + 'pages/goods-all.html') + '" class="oc-btn oc-btn-o">제품 보러 가기</a></div>';
      return;
    }
    var specs = cmp.map(function (c) { return parseSpec(c.spec); }), labels = [];
    // 같은 값 판정은 대소문자·띄어쓰기를 무시한다(예: Power = POWER, Windows11 pro = Windows 11 pro). 항목 이름도 같은 규칙으로 한 줄로 합치고 표에는 처음 나온 이름을 쓴다
    var norm = function (s) { return String(s || '').replace(/\s+/g, '').toLowerCase(); }, same = 0;
    specs.forEach(function (rows) { rows.forEach(function (r) { var l = r[0] || '사양'; if (!labels.some(function (x) { return norm(x) === norm(l); })) labels.push(l); }); });
    var n = cmp.length, view = window.OC_VIEW || 'goods-view.html';
    function differs(a) { return a.some(function (v) { return norm(v) !== norm(a[0]); }); } // 값이 하나라도 다르면 강조·'다른 항목만 보기' 대상
    function row(label, cells, diff) {
      if (!diff) same++; // '다른 항목만 보기'로 숨길 줄 수
      // 모바일은 왼쪽 항목 칸을 숨기고, 항목 이름을 값 줄 위에 한 줄로 따로 보여 준다 (좁은 화면에서 제품 칸을 넓게)
      return '<tr class="oc-cmpv-sub"' + (diff ? '' : ' data-same') + '><th colspan="' + (n + 1) + '" scope="colgroup"><span>' + esc(label) + '</span></th></tr>' +
        '<tr' + (diff ? ' class="oc-is-diff"' : ' data-same') + '><th scope="row" class="oc-cmpv-lb">' + esc(label) + '</th>' + cells.join('') + '</tr>';
    }
    var head = cmp.map(function (c) {
      return '<th scope="col"><div class="oc-cmpv-goods">' +
        '<button type="button" class="oc-cmpv-del" data-cmp-del="' + esc(c.no) + '" aria-label="' + esc(c.name) + ' 비교에서 빼기"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button>' +
        '<a href="' + esc(view + '?no=' + c.no) + '" class="oc-cmpv-img"><img src="' + esc(imgSrc(c.img)) + '" alt=""></a>' +
        (c.brand ? '<em class="oc-brand">' + esc(c.brand) + '</em>' : '') +
        '<a href="' + esc(view + '?no=' + c.no) + '" class="oc-cmpv-name" title="' + esc(c.name) + '">' + esc(shortName(c.name)) + '</a>' +
        (c.mfg && c.mfg !== '—' ? '<small>' + esc(c.mfg) + '</small>' : '') + '</div></th>';
    }).join('');
    var body = row('가격', cmp.map(function (c) { return '<td class="oc-cmpv-price">' + esc(c.price || '구성에 따라 견적') + '</td>'; }),
      differs(cmp.map(function (c) { return c.price; })));
    labels.forEach(function (l) {
      var vals = specs.map(function (rows) { var r = rows.filter(function (x) { return norm(x[0] || '사양') === norm(l); })[0]; return r ? r[1] : ''; });
      body += row(l, vals.map(function (v) { return '<td>' + (v ? esc(v) : '<span class="oc-cmpv-none">—</span>') + '</td>'; }), differs(vals));
    });
    body += '<tr class="oc-cmpv-act"><th scope="row" class="oc-cmpv-lb">견적</th>' + cmp.map(function (c) {
      var d = ' data-goodsno="' + esc(c.no) + '" data-name="' + esc(c.name) + '" data-img="' + esc(c.img) + '" data-price="' + esc(c.price) + '"';
      return '<td><button type="button" class="oc-btn oc-btn-sm oc-btn-d" data-quote' + d + '>견적 요청</button><button type="button" class="oc-btn oc-btn-sm oc-btn-o oc-add" data-add' + d + '>견적 담기</button></td>';
    }).join('') + '</tr>';
    // 같은 줄이 하나도 없으면 체크해도 바뀌는 게 없다 — '다른 항목만 보기'를 아예 보여 주지 않는다 (2026-10-28)
    if (!same) cmpView.classList.remove('oc-is-diffonly');
    var only = cmpView.classList.contains('oc-is-diffonly');
    cmpView.innerHTML = '<div class="oc-cmpv-bar"><p><b>' + n + '개</b> 제품 비교</p>' +
      (same ? '<label class="oc-chk"><input type="checkbox" data-cmp-diff' + (only ? ' checked' : '') + '> 다른 항목만 보기</label>' : '') + '</div>' +
      '<div class="oc-cmpv-scroll"><table class="oc-cmpv oc-cmpv--' + n + '"><thead><tr><th scope="col" class="oc-cmpv-lb"><span aria-hidden="true">제품</span><span class="oc-sr">항목</span></th>' + head + '</tr></thead><tbody>' + body + '</tbody></table></div>';
    renderQuote(); // 새로 그린 '견적 담기' 버튼에 담김 표시
  }
  // 비교 표 열 강조: 마우스를 올린 제품 열만 옅은 바탕 — 여러 줄을 세로로 읽을 때 보던 제품을 놓치지 않게 (세로 구분선 대신, 2026-10-28).
  // 모양(바탕색)은 CSS 가 마우스 기기 + 768 이상에서만 입힌다. 모바일은 항목 이름 줄(.oc-cmpv-sub, 칸 1개)이 있어 칸 수가 1개인 줄은 건너뛴다
  if (cmpView) {
    var paintCol = function (i) {
      $$('.oc-is-col', cmpView).forEach(function (c) { c.classList.remove('oc-is-col'); });
      if (i < 1) return;
      $$('.oc-cmpv tr', cmpView).forEach(function (tr) { if (tr.cells.length > 1 && tr.cells[i]) tr.cells[i].classList.add('oc-is-col'); });
    };
    cmpView.addEventListener('mouseover', function (e) { var c = e.target.closest('.oc-cmpv td, .oc-cmpv thead th'); paintCol(c ? c.cellIndex : -1); });
    cmpView.addEventListener('mouseleave', function () { paintCol(-1); });
  }
  document.addEventListener('change', function (e) {
    if (e.target.closest('[data-cmp-diff]')) { cmpView.classList.toggle('oc-is-diffonly', e.target.checked); return; }
    var c = e.target.closest('[data-cmp]');
    if (!c) return;
    var g = cmpOf(c);
    if (c.checked) {
      if (cmp.length >= 4) { c.checked = false; toast('비교는 최대 4개까지 가능합니다'); return; }
      if (!cmpHas(g.no)) cmp.push(g);
    } else {
      cmp = cmp.filter(function (x) { return x.no !== g.no; });
    }
    renderCmp();
  });
  document.addEventListener('click', function (e) {
    var d = e.target.closest('[data-cmp-del]');
    if (d) { cmp = cmp.filter(function (x) { return x.no !== d.getAttribute('data-cmp-del'); }); renderCmp(); return; }
    if (e.target.closest('[data-cmp-clear]')) { cmp = []; renderCmp(); return; }
    if (e.target.closest('[data-cmp-go]') && cmp.length < 2) { e.preventDefault(); toast('비교할 제품을 2개 이상 골라 주세요'); }
  });
  renderCmp();

  /* 견적함 '비교하기' (2026-10-28): 견적함 앞 4개로 비교 목록을 바꾸고 비교 화면으로. 견적함 저장값엔 사양·브랜드가 없어 상품 정보에서 채운다
     (시안 = 목업 상품 데이터 OC_MOCK, 고도몰 = 화면 카드 사양 → 상세 스펙 읽기). 4개가 넘으면 비교 화면에서 '앞 4개' 안내. 모바일에도 보인다 */
  document.addEventListener('click', function (e) {
    if (!e.target.closest('[data-quote-cmp]')) return;
    if (quote.length < 2) { toast('비교할 제품을 2개 이상 담아 주세요'); return; }
    var G = (window.OC_MOCK || {}).GOODS || {};
    cmp = quote.slice(0, 4).map(function (q) { var g = G[q.no] || {}; return { no: q.no, name: q.name, img: q.img, price: q.price, brand: g.brandNm || '', mfg: g.goodsModelNo || '', spec: g.shortDescription || '' }; });
    store.set('oc-cmp', cmp);
    try { if (quote.length > 4) sessionStorage.setItem('oc-cmp-note', '1'); } catch (er) { /* 안내만 빠짐 */ }
    var go = $('[data-cmp-go]');
    location.href = go ? go.href : (window.OC_ROOT || '') + 'pages/compare.html';
  });
  try { if (cmpView && sessionStorage.getItem('oc-cmp-note')) { sessionStorage.removeItem('oc-cmp-note'); setTimeout(function () { toast('견적함 앞 4개 제품을 비교합니다'); }, 300); } } catch (er) { /* 안내만 빠짐 */ }

  /* ── 양식 오류 표시: 필수 항목을 비우고 내면 그 칸을 빨강 테두리 + 아래 한 줄 안내. 고쳐 입력하면 바로 지운다 ── */
  document.addEventListener('invalid', function (e) { // invalid 는 거품이 일지 않아 잡기 단계에서 받는다
    var el = e.target; if (!el.closest || !el.closest('.oc')) return;
    var check = el.closest('.oc-check');
    if (check) { check.classList.add('oc-is-invalid'); return; } // 동의 체크는 글자만 빨강
    var box = el.closest('.oc-field'); if (!box) return;
    box.classList.add('oc-is-invalid');
    var msg = $('.oc-err', box);
    if (!msg) {
      msg = document.createElement('small');
      msg.className = 'oc-err';
      msg.id = (el.id || el.name || 'oc-f') + '-err';
      box.appendChild(msg);
      el.setAttribute('aria-describedby', ((el.getAttribute('aria-describedby') || '') + ' ' + msg.id).trim());
    }
    msg.textContent = el.validationMessage;
  }, true);
  function clearInvalid(e) {
    var el = e.target; if (!el.closest || !el.checkValidity) return;
    var box = el.closest('.oc-is-invalid');
    if (!box || !el.checkValidity()) return;
    box.classList.remove('oc-is-invalid');
    var msg = $('.oc-err', box); if (msg) msg.remove();
  }
  document.addEventListener('input', clearInvalid, true);
  document.addEventListener('change', clearInvalid, true);

  /* ── 파일 첨부칸: 업로드 영역(점선 상자 + 아이콘 + 안내)으로 꾸민다 ──
     원래 input[type=file] 은 상자 전체를 덮는 투명한 층으로 그대로 둔다 → 누르면 파일 고르기, 끌어 놓기도 브라우저 기본 동작, 폼 전송·필수 검사도 그대로.
     고도몰 게시판·견적 폼의 첨부칸도 마크업을 고치지 않고 .oc 안에만 있으면 같은 모양이 된다 */
  // 아이콘: 올리기(파일 없을 때) / 문서(파일을 고른 뒤) — 선 1.8, 둥근 끝 (규칙 10장 세트)
  var FILE_IC = '<svg class="oc-ic-up" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 15V4m0 0L7.5 8.5M12 4l4.5 4.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.5 14.5v3a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
    '<svg class="oc-ic-doc" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3.5h7.5L19 8v12.5H7z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M14 3.5V8h5M10 14l2 2 4-4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var DEL_IC = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';
  function fileSize(n) { return n >= 1048576 ? (n / 1048576).toFixed(1) + 'MB' : Math.max(1, Math.round(n / 1024)) + 'KB'; }
  $$('.oc input[type="file"]').forEach(function (inp) {
    var box = document.createElement('div');
    box.className = 'oc-file';
    inp.parentNode.insertBefore(box, inp);
    box.appendChild(inp);
    box.insertAdjacentHTML('beforeend',
      '<span class="oc-file-ic">' + FILE_IC + '</span>' +
      '<span class="oc-file-txt"><b>파일 선택</b><span class="oc-file-drop"> 또는 여기로 끌어 놓기</span><small data-file-name>선택된 파일 없음</small></span>' +
      '<button type="button" class="oc-file-del" aria-label="첨부 파일 지우기" hidden>' + DEL_IC + '</button>');
    var nameEl = $('[data-file-name]', box), del = $('.oc-file-del', box), act = $('.oc-file-txt b', box);
    function show() {
      var fs = inp.files ? Array.prototype.slice.call(inp.files) : [];
      box.classList.toggle('oc-has-file', fs.length > 0);
      act.textContent = fs.length ? '다른 파일로 바꾸기' : '파일 선택';
      del.hidden = fs.length === 0;
      nameEl.textContent = !fs.length ? '선택된 파일 없음' : fs.length === 1 ? fs[0].name + ' · ' + fileSize(fs[0].size) : '파일 ' + fs.length + '개 · ' + fs.map(function (f) { return f.name; }).join(', ');
    }
    inp.addEventListener('change', show);
    del.addEventListener('click', function () { inp.value = ''; inp.dispatchEvent(new Event('change', { bubbles: true })); inp.focus(); });
    ['dragenter', 'dragover'].forEach(function (t) { inp.addEventListener(t, function () { box.classList.add('oc-is-drag'); }); });
    ['dragleave', 'drop'].forEach(function (t) { inp.addEventListener(t, function () { box.classList.remove('oc-is-drag'); }); });
    show();
  });

  /* ── 채팅 상담: 사이트에 이미 있는 채널톡 ── */
  $$('[data-channel]').forEach(function (b) {
    b.addEventListener('click', function () {
      if (typeof window.ChannelIO === 'function') window.ChannelIO('showMessenger');
      else toast('시안 화면입니다 · 실제 사이트에서는 채널톡 상담 창이 열립니다');
    });
  });
  // 안 읽은 상담 메시지 수: 운영 스킨이 #cusChannel 안 span 에 넣는 숫자를 모바일 하단 바 '채팅 상담'에도 보여 준다.
  // 채널톡 설정(boot)·이벤트 핸들러는 운영 스킨 것을 그대로 두고 화면만 읽는다 (#cusChannel 이 없으면 아무 일도 하지 않음)
  var chBadge = $('[data-channel-badge]');
  if (chBadge && window.MutationObserver) {
    var syncCh = function () {
      var sp = $('#cusChannel span'), n = sp && sp.style.display !== 'none' ? parseInt(sp.textContent, 10) || 0 : 0;
      chBadge.hidden = !n;
      chBadge.textContent = n > 99 ? '99+' : String(n);
    };
    var watchCh = function (btn) { new MutationObserver(syncCh).observe(btn, { subtree: true, childList: true, characterData: true, attributes: true }); syncCh(); };
    var chBtn = $('#cusChannel');
    if (chBtn) watchCh(chBtn);
    else { var chWait = new MutationObserver(function () { var b = $('#cusChannel'); if (b) { chWait.disconnect(); watchCh(b); } }); chWait.observe(document.body, { childList: true }); }
  }

  renderQuote();
})();

/* ── 기획안 미리보기용: iframe 안에서 열렸을 때만 동작 (검토용 막대 숨김 + 부모가 보내는 스크롤 값 적용) ── */
(function () {
  if (window.parent === window) return;
  document.documentElement.classList.add('oc-embed');
  function sendH() {
    window.parent.postMessage({ oc: 'height', h: document.documentElement.scrollHeight, vh: window.innerHeight }, '*');
  }
  window.addEventListener('message', function (e) {
    var d = e.data;
    if (d && d.oc === 'scroll') window.scrollTo({ top: d.y, behavior: 'instant' });
  });
  window.addEventListener('load', sendH);
  window.addEventListener('resize', sendH);
  setInterval(sendH, 2000);
})();
