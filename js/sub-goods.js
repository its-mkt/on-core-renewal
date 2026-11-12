/* 목업 전용 — 상품 묶음 서브 페이지(목록·상세·검색)에서만 쓴다. 고도몰에서는 서버가 같은 결과를 출력하므로 필요 없다.
   main.js 보다 먼저 불러온다(jspre): 카드를 먼저 만들어 두면 main.js 가 사양 목록·견적 담기를 그대로 붙인다.
   카드는 한 번만 만들고, 정렬은 순서만 바꾼다(담기 상태가 유지되도록). */
(function () {
  'use strict';
  var M = window.OC_MOCK; if (!M) return;
  var G = M.GOODS, D = M.DISPLAYS;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var param = function (k) {
    var m = location.search.match(new RegExp('[?&]' + k + '=([^&]*)'));
    if (!m) return '';
    try { return decodeURIComponent(m[1].replace(/\+/g, ' ')); } catch (e) { return ''; } // 깨진 값(%)이 와도 멈추지 않게
  };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var ROOT = window.OC_ROOT || '';
  var isQuote = function (no) { return G[no].goodsPriceString !== ''; };
  var specRows = function (g) {
    return g.shortDescription.split(' / ').map(function (p) { var i = p.indexOf(':'); return i > -1 ? [p.slice(0, i).trim(), p.slice(i + 1).trim()] : ['', p.trim()]; }).filter(function (r) { return r[1]; });
  };
  function family(g) { return g.cate; } // 운영 상품명에는 계열 이름(ThinkStation 등)이 없는 것이 많아 데이터의 cate 로 정한다
  var FAMILY = { ws: ['워크스테이션', 'goods-workstation.html'], server: ['서버', 'goods-server.html'], desktop: ['데스크탑', 'goods-desktop.html'], notebook: ['노트북', 'goods-notebook.html'], storage: ['스토리지', 'goods-storage.html'] };

  /* ── 목록(정렬·건수) ──
     정렬 값은 고도몰 목록의 sort 값과 같다: '' 추천순 · sellcnt 판매인기순 · price_asc · price_dsc · date 최신순.
     고도몰에서는 select 가 바뀌면 ?sort=값 으로 목록을 다시 불러온다(서버 정렬). 시안은 화면에서 순서만 바꾼다.
     상품 필터 칩(브랜드·신규·가격 표시)은 고도몰 기본 목록에 없고, 스크립트로 거르면 현재 쪽의 상품만 걸러져 쪽 넘김과 어긋나서 쓰지 않는다 → 하위 분류(.oc-subnav)로 좁힌다 */
  function initList(box, ids, scope) {
    var where = /(search|goods-all)\.html$/.test(location.pathname) ? 'search' : 'cate'; // 자리 이름표 — 스킨: goods_search.php = search, goods_list.php = cate
    box.innerHTML = '<ul class="oc-cards oc-cards--' + where + '">' + ids.map(M.li).join('') + '</ul>';
    var ul = $('.oc-cards', box), items = $$('.oc-card', ul);
    var by = {}; items.forEach(function (li) { by[li.getAttribute('data-goodsno')] = li; });
    var sel = $('[data-goods-sort]', scope), cnt = $$('[data-goods-count]', scope);
    if (sel) sel.addEventListener('change', function () { page = 1; try { history.replaceState({ ocPage: 1 }, '', href(1)); } catch (err) { /* 주소 갱신 실패해도 목록은 1쪽 */ } apply(sel.value); }); // 정렬이 바뀌면 주소의 ?page 도 뺀다 — 새로고침해도 1쪽 // 고도몰도 정렬을 바꾸면 1쪽부터

    /* 쪽 번호 (2026-11-12 사용자 요청): 한 쪽 12개 — 4·3·2열 어느 폭에서도 마지막 줄이 꽉 찬다(PROJECT-RULES 3-5).
       고도몰 목록과 같은 모양: ‹ › 한 쪽씩, « » 10쪽 묶음 이동(10쪽 넘을 때), 768 미만은 현재 쪽 앞뒤 2쪽만(.oc-pgn-far 숨김).
       주소에 ?page=N 을 남겨 새로고침·뒤로 가기에도 같은 쪽. '총 n건'은 전체 건수 그대로 */
    var PER = 12, page = Math.max(1, parseInt(param('page'), 10) || 1);
    var pgn = document.createElement('nav'); pgn.className = 'oc-pgn'; pgn.setAttribute('aria-label', '쪽 이동');
    box.parentNode.insertBefore(pgn, box.nextSibling);
    var IC = { prev: 'm14.5 6-6 6 6 6', next: 'm9.5 6 6 6-6 6', first: 'm12.5 6-6 6 6 6M18.5 6l-6 6 6 6', last: 'm11.5 6 6 6-6 6M5.5 6l6 6-6 6' };
    function ic(k) { return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="' + IC[k] + '" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'; }
    function href(n) {
      var q = location.search.replace(/^\?/, '').split('&').filter(function (p) { return p && p.indexOf('page=') !== 0; });
      if (n > 1) q.push('page=' + n);
      return location.pathname.split('/').pop() + (q.length ? '?' + q.join('&') : '');
    }
    function step(n, k, label, ok) {
      var c = k === 'first' || k === 'last' ? ' class="oc-pgn-jump"' : ''; // 10쪽 묶음 이동 — 360 폭에서 한 줄을 넘겨 모바일에서는 숨긴다(sub.css)
      return ok ? '<a href="' + href(n) + '"' + c + ' data-page="' + n + '" aria-label="' + label + '">' + ic(k) + '</a>' : '<span' + c + ' aria-disabled="true" aria-label="' + label + ' 없음">' + ic(k) + '</span>';
    }
    function paginate() {
      var last = Math.max(1, Math.ceil(ids.length / PER)); if (page > last) page = last;
      $$('li.oc-card', ul).forEach(function (li, i) { li.hidden = i < (page - 1) * PER || i >= page * PER; });
      if (last < 2) { pgn.hidden = true; return; }
      pgn.hidden = false;
      var b0 = Math.floor((page - 1) / 10) * 10 + 1, b1 = Math.min(last, b0 + 9), h = '';
      if (last > 10) h += step(Math.max(1, b0 - 10), 'first', '이전 10쪽', b0 > 1);
      h += step(page - 1, 'prev', '이전 쪽', page > 1);
      for (var n = b0; n <= b1; n++) h += '<a href="' + href(n) + '" data-page="' + n + '"' + (n === page ? ' aria-current="page"' : '') + (Math.abs(n - page) > 2 ? ' class="oc-pgn-far"' : '') + '>' + n + '</a>';
      h += step(page + 1, 'next', '다음 쪽', page < last);
      if (last > 10) h += step(Math.min(last, b0 + 10), 'last', '다음 10쪽', b1 < last);
      pgn.innerHTML = h;
    }
    pgn.addEventListener('click', function (e) {
      if (e.ctrlKey || e.metaKey || e.shiftKey || e.button) return; // Cmd·Ctrl 클릭은 새 탭으로 열리게 둔다
      var a = e.target.closest('a[data-page]'); if (!a) return;
      e.preventDefault(); if (+a.getAttribute('data-page') === page) return; // 현재 쪽을 또 누르면 기록을 쌓지 않는다
      page = +a.getAttribute('data-page');
      try { history.pushState({ ocPage: page }, '', a.getAttribute('href')); } catch (err) { /* file:// 등 — 주소만 안 바뀜 */ }
      paginate();
      var top = $('.oc-toolbar', scope) || box; top.scrollIntoView({ block: 'start' }); // 목록 맨 위로 (고정 헤더 높이는 html scroll-padding-top 이 맡음)
    });
    window.addEventListener('popstate', function () { page = Math.max(1, parseInt(param('page'), 10) || 1); paginate(); });

    function price(n) { return G[n].goodsPrice || 0; }
    function apply(s) {
      var order = ids.slice();
      if (s === 'price_asc' || s === 'price_dsc') {
        order.sort(function (a, b) {                       // 견적 전용(가격 0)은 항상 뒤로
          if (!price(a) && !price(b)) return 0; if (!price(a)) return 1; if (!price(b)) return -1;
          return s === 'price_asc' ? price(a) - price(b) : price(b) - price(a);
        });
      } else if (s === 'date') {
        order.sort(function (a, b) { return Number(b) - Number(a); }); // 목업: 상품번호가 클수록 최근 등록
      } // '' 추천순·sellcnt 판매인기순은 목업에 판매 데이터가 없어 진열 순서 그대로
      order.forEach(function (n) { ul.appendChild(by[n]); });
      cnt.forEach(function (c) { c.textContent = ids.length; });
      var empty = $('[data-goods-empty]', scope); if (empty) empty.hidden = ids.length > 0;
      paginate();
    }
    apply('');
  }

  $$('[data-goods]').forEach(function (box) {
    var ids = box.getAttribute('data-goods').split(',').map(function (s) { return s.trim(); }).filter(function (n) { return G[n]; });
    initList(box, ids, box.closest('.oc-pg-body') || document);
  });

  /* ── 검색 결과 ── */
  var sbox = $('[data-search]');
  if (sbox) {
    var q = param('q').trim(), inp = $('#oc-gs-q'); if (inp) inp.value = q; // 헤더 검색 패널에도 name=q 가 있어 본문 검색창을 id 로 지정
    var tokens = q.toLowerCase().split(/\s+/).filter(Boolean);
    var hit = Object.keys(G).filter(function (n) {
      var g = G[n], hay = (g.goodsNm + ' ' + g.brandNm + ' ' + g.goodsModelNo + ' ' + g.shortDescription).toLowerCase();
      return tokens.length && tokens.every(function (t) { return hay.indexOf(t) > -1; });
    });
    var head = $('[data-search-title]'), scope = $('[data-search-scope]') || document, wrap = $('[data-search-result]');
    if (head) head.textContent = q ? '‘' + q + '’ 검색 결과' : '검색어를 입력해 주세요';
    var emptyMsg = $('[data-goods-empty]');
    if (hit.length) { initList(sbox, hit, scope); }
    else {
      if (wrap) wrap.hidden = true;
      if (emptyMsg) { emptyMsg.hidden = false; $('[data-empty-text]', emptyMsg).textContent = q ? '‘' + q + '’에 맞는 제품을 찾지 못했습니다. 모델명이나 사양 일부로 다시 검색해 보세요.' : '모델명, 사양, 제조사 품번으로 검색할 수 있습니다.'; }
    }
    document.title = (q ? q + ' 검색 결과' : '검색') + ' | 온코어';
  }

  /* ── 상품 상세 ── */
  var view = $('[data-view]');
  if (view) {
    var no = param('no'); if (!Object.prototype.hasOwnProperty.call(G, no)) no = Object.keys(G)[0];
    var g = G[no], fam = FAMILY[family(g)], quote = isQuote(no), imgSrc = g.image;
    var set = function (k, v) { $$('[data-f="' + k + '"]').forEach(function (e) { e.textContent = v; }); };
    set('name', g.goodsNm); set('brand', g.brandNm); set('model', '제조사 품번 ' + (g.goodsModelNo || '—')); set('code', '상품코드 ' + no);
    set('price', quote ? g.goodsPriceString : M.money(g.goodsPrice) + '원');
    set('pricenote', quote ? '구성·수량에 따라 견적' : '부가세 포함 · 수량 구매 시 별도 견적'); // 견적 전용 안내는 모든 분류 공통 문구
    set('cat', fam[0]); $$('a[data-f="cat"]').forEach(function (a) { a.setAttribute('href', fam[1]); });
    $$('[data-brand-host]').forEach(function (e) { e.setAttribute('data-brand', g.brandNm); });
    $$('img[data-f-img]').forEach(function (i) { i.src = imgSrc; i.alt = g.goodsNm; });
    var rows = specRows(g);
    var kv = $('[data-f-spec]');
    if (kv) kv.innerHTML = rows.map(function (r) { return '<dt>' + esc(r[0] || '구성') + '</dt><dd>' + esc(r[1]) + '</dd>'; }).join('');
    var kv2 = $('[data-f-spec2]');
    if (kv2) kv2.innerHTML = '<dt>제조사</dt><dd>' + esc(g.brandNm) + '</dd><dt>상품명</dt><dd>' + esc(g.goodsNm) + '</dd><dt>제조사 품번</dt><dd>' + esc(g.goodsModelNo || '—') + '</dd><dt>상품코드</dt><dd>' + esc(no) + '</dd>' +
      rows.map(function (r) { return '<dt>' + esc(r[0] || '구성') + '</dt><dd>' + esc(r[1]) + '</dd>'; }).join('');
    // 상세 설명: 상품마다 등록한 상세 이미지(고도몰 goodsDescription). 시안은 운영 사이트 이미지를 불러온다
    var desc = $('[data-f-desc]'), du = (M.DESC || {})[no];
    if (desc && du) desc.innerHTML = du.map(function (u, i) { return '<img src="' + esc(u) + '" alt="' + esc(g.goodsNm) + ' 상세 설명' + (du.length > 1 ? ' ' + (i + 1) : '') + '" loading="lazy" decoding="async">'; }).join('');
    // 바로 구매: 가격이 있는 상품만 보인다. 수량에 따라 합계를 바꾸고, 시안에서는 주문서 대신 안내만 띄운다
    var buy = $('[data-buy]');
    if (buy && !quote) {
      buy.hidden = false;
      var qIn = $('[data-buy-qty]', buy), total = $('[data-buy-total]', buy);
      var sync = function () { var q = Math.max(1, Math.min(999, parseInt(qIn.value, 10) || 1)); qIn.value = q; total.textContent = M.money(g.goodsPrice * q) + '원'; };
      buy.addEventListener('click', function (e) {
        var b = e.target.closest('[data-buy-q]');
        if (b) { qIn.value = (parseInt(qIn.value, 10) || 1) + Number(b.getAttribute('data-buy-q')); sync(); return; }
        if (e.target.closest('[data-buy-go]')) {
          var t = $('#oc-toast'); if (!t) return;
          t.innerHTML = '<b>주문서로 이동합니다</b>'; // 고도몰에서는 실제 주문서로 이동한다
          t.classList.add('oc-is-on'); setTimeout(function () { t.classList.remove('oc-is-on'); }, 2400);
        }
      });
      qIn.addEventListener('change', sync);
      sync();
      // 모바일 구매 바: 가격이 있는 상품은 '견적 담기' 대신 장바구니·바로 구매 (시안은 안내만 — 고도몰은 장바구니·주문서로 이동)
      $$('[data-gv-buy]').forEach(function (b) { b.hidden = false; });
      $$('[data-gv-quoteonly]').forEach(function (b) { b.remove(); }); // 가격 상품 바 = 견적함 · 장바구니 · 바로 구매 (담기·견적 요청은 본문 버튼으로). 숨기지 않고 빼야 'body:has(.oc-gv-bar [data-quote])' 가 본문 버튼을 보인다 — 고도몰은 서버가 출력하지 않음
      document.addEventListener('click', function (e) {
        var b = e.target.closest('[data-gv-buy]'); if (!b) return;
        var t = $('#oc-toast'); if (!t) return;
        t.innerHTML = b.getAttribute('data-gv-buy') === 'cart' ? '<b>장바구니에 담았습니다</b>' : '<b>주문서로 이동합니다</b>';
        t.classList.add('oc-is-on'); setTimeout(function () { t.classList.remove('oc-is-on'); }, 2400);
      });
    }
    $$('[data-act]').forEach(function (b) {
      b.setAttribute('data-goodsno', no); b.setAttribute('data-name', g.goodsNm); b.setAttribute('data-img', imgSrc); b.setAttribute('data-price', quote ? g.goodsPriceString : M.money(g.goodsPrice) + '원');
    });
    document.title = g.goodsNm + ' | 온코어';
    // 관련 상품: 같은 계열 → 부족하면 다른 계열로 채워 4개 (PC 4열 한 줄 · 모바일 2×2 — 3개면 모바일 2열에 빈 칸이 생긴다. 3열 폭에서는 CSS 가 넷째를 숨김)
    var rel = Object.keys(G).filter(function (n) { return n !== no && family(G[n]) === family(g); });
    Object.keys(G).forEach(function (n) { if (n !== no && rel.length < 4 && rel.indexOf(n) < 0) rel.push(n); });
    var rb = $('[data-related]'); if (rb) rb.innerHTML = '<ul class="oc-cards oc-cards--related">' + rel.slice(0, 4).map(M.li).join('') + '</ul>';

    // 탭
    var tabs = $$('.oc-gv-tabs [role="tab"]');
    function pick(t, focus) {
      tabs.forEach(function (b) { var on = b === t; b.setAttribute('aria-selected', String(on)); b.tabIndex = on ? 0 : -1; document.getElementById(b.getAttribute('aria-controls')).hidden = !on; });
      if (focus) t.focus();
    }
    tabs.forEach(function (t) { t.addEventListener('click', function () { pick(t); }); });
    var tl = $('.oc-gv-tabs [role="tablist"]');
    if (tl) tl.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      var k = tabs.indexOf(document.activeElement); if (k < 0) return;
      pick(tabs[(k + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length], true);
    });
  }
})();
