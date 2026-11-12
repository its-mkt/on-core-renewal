/* 날짜 범위 선택 (.oc-drp, 2026-11-12 사용자 결정) — 선택 상자 4개(년·월 부터 년·월 까지) 대신 달력 하나로 기간을 고른다.
   · 달력에서 시작일 → 끝일 두 번 눌러 범위를 고르고 '적용'. '전체 기간'은 누르면 기간을 지우고 바로 닫는다 (빠른 선택 칩은 2026-11-12 사용자 결정으로 뺐다).
   · PC 는 두 달(오른쪽이 이번 달), 모바일(767 이하)은 한 달 + 바텀 시트. 오늘 이후 날짜는 고를 수 없다(견적 요청일은 미래가 없다).
   · 보내는 값: sd·ed(YYYY-MM-DD, 일 단위) + 기존 고도몰 견적 모듈 값 sy·sm·ey·em(월 단위) — 서버가 일 단위를 받기 전까지는 월 단위로 걸러진다.
   · 키보드: ←→↑↓ 하루·한 주, PageUp/PageDown 한 달, Enter·Space 고르기, Esc 닫기. 값이 바뀌면 'oc-drp-change' 이벤트를 낸다.
   고도몰에 옮길 때도 이 파일 하나와 sub.css 의 .oc-drp 규칙만 쓴다 (마크업은 estimate-list.html 의 .oc-drp 와 같게) */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var DOW = ['일', '월', '화', '수', '목', '금', '토'];
  var MOB = window.matchMedia('(max-width:767px)');
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function ymd(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function dot(d) { return d.getFullYear() + '.' + pad(d.getMonth() + 1) + '.' + pad(d.getDate()); }
  function parse(s) { var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s || ''); return m ? new Date(+m[1], +m[2] - 1, +m[3]) : null; }
  function same(a, b) { return !!(a && b && a.getTime() === b.getTime()); }
  function today() { var t = new Date(); return new Date(t.getFullYear(), t.getMonth(), t.getDate()); }
  function addDays(d, n) { return new Date(d.getFullYear(), d.getMonth(), d.getDate() + n); }
  function addMonths(d, n) { var r = new Date(d.getFullYear(), d.getMonth() + n, 1), last = new Date(r.getFullYear(), r.getMonth() + 1, 0).getDate(); r.setDate(Math.min(d.getDate(), last)); return r; }

  $$('[data-drp]').forEach(function (root) {
    var btn = $('.oc-drp-btn', root), val = $('.oc-drp-val', root), pop = $('.oc-drp-pop', root), scrim = $('.oc-drp-scrim', root);
    var cal = $('.oc-drp-cal', pop), sum = $('.oc-drp-sum', pop);
    var inS = $('[name="sd"]', root), inE = $('[name="ed"]', root);
    var leg = { sy: $('[name="sy"]', root), sm: $('[name="sm"]', root), ey: $('[name="ey"]', root), em: $('[name="em"]', root) };
    var start = parse(inS && inS.value), end = parse(inE && inE.value);
    var tmpS = null, tmpE = null, hover = null, focusD = today(), view = today();
    // 모바일 바텀 시트는 열려 있는 동안 페이지 맨 바깥(.oc)으로 옮긴다 — 섹션 등장 효과(motion.js)의 transform 이 조상에 있으면 position:fixed 가 화면이 아니라 그 조상에 붙어 시트가 화면 중간에 뜬다
    var host = root.closest('.oc') || document.body, home = pop.parentNode;
    function place() {
      var out = !pop.hidden && MOB.matches;
      [scrim, pop].forEach(function (el) { if (!el) return; if (out && el.parentNode !== host) host.appendChild(el); else if (!out && el.parentNode !== home) home.appendChild(el); });
    }

    function months() { return MOB.matches ? 1 : 2; }
    // 버튼 글자: 연도는 따로 감싸 두고, 시작·끝이 모두 올해면 좁은 화면에서 연도를 숨긴다(CSS .oc-drp-thisyear) — 모바일에서 기간·진행 상태·개수를 한 줄에 두기 위해 (2026-11-12)
    function label() {
      var yr = function (d) { return '<span class="oc-drp-y">' + d.getFullYear() + '.</span>' + pad(d.getMonth() + 1) + '.' + pad(d.getDate()); };
      if (start && end) { val.innerHTML = yr(start) + ' ~ ' + yr(end); btn.setAttribute('aria-label', '조회 기간 ' + dot(start) + ' ~ ' + dot(end)); }
      else { val.textContent = '전체 기간'; btn.removeAttribute('aria-label'); } // 연도를 숨겨도 화면낭독기는 전체 날짜를 읽게 버튼 이름에 넣는다
      var y = today().getFullYear();
      root.classList.toggle('oc-is-set', !!(start && end));
      root.classList.toggle('oc-drp-thisyear', !!(start && end && start.getFullYear() === y && end.getFullYear() === y));
    }
    function commit() {
      start = tmpS; end = tmpE || tmpS;
      if (inS) inS.value = start ? ymd(start) : '';
      if (inE) inE.value = end ? ymd(end) : '';
      if (leg.sy) leg.sy.value = start ? start.getFullYear() : '';
      if (leg.sm) leg.sm.value = start ? pad(start.getMonth() + 1) : '';
      if (leg.ey) leg.ey.value = end ? end.getFullYear() : '';
      if (leg.em) leg.em.value = end ? pad(end.getMonth() + 1) : '';
      label();
      var ev; try { ev = new CustomEvent('oc-drp-change', { bubbles: true, detail: { start: start, end: end } }); } catch (e) { ev = document.createEvent('CustomEvent'); ev.initCustomEvent('oc-drp-change', true, false, { start: start, end: end }); }
      root.dispatchEvent(ev);
    }
    // 화면에 보이는 범위: 시작만 골랐으면 마우스가 올라간 날까지 미리 보여 준다
    function range() {
      var lo = tmpS, hi = tmpE;
      if (tmpS && !tmpE && hover) { if (hover < tmpS) { lo = hover; hi = tmpS; } else hi = hover; }
      return [lo, hi];
    }
    function month(y, m) {
      var first = new Date(y, m, 1), days = new Date(y, m + 1, 0).getDate(), t = today(), r = range(), lo = r[0], hi = r[1];
      var h = '<div class="oc-drp-month"><p class="oc-drp-mt">' + y + '년 ' + (m + 1) + '월</p><table class="oc-drp-grid" role="grid" aria-label="' + y + '년 ' + (m + 1) + '월"><thead><tr>' +
        DOW.map(function (d) { return '<th scope="col" abbr="' + d + '요일">' + d + '</th>'; }).join('') + '</tr></thead><tbody><tr>';
      for (var i = 0; i < first.getDay(); i++) h += '<td></td>';
      for (var d = 1; d <= days; d++) {
        var dt = new Date(y, m, d), cls = [], dis = dt > t, picked = same(dt, tmpS) || same(dt, tmpE);
        if (same(dt, t)) cls.push('oc-is-today');
        if (lo && hi && dt >= lo && dt <= hi && !same(lo, hi)) cls.push('oc-is-in');
        if (same(dt, lo) || (!hi && same(dt, tmpS))) cls.push('oc-is-start');
        if (hi && same(dt, hi)) cls.push('oc-is-end');
        h += '<td' + (cls.length ? ' class="' + cls.join(' ') + '"' : '') + '><button type="button" class="oc-drp-day" data-d="' + ymd(dt) + '"' + (dis ? ' disabled' : '') +
          ' aria-pressed="' + picked + '" aria-label="' + y + '년 ' + (m + 1) + '월 ' + d + '일 ' + DOW[dt.getDay()] + '요일' + (same(dt, t) ? ', 오늘' : '') + '"' +
          ' tabindex="' + (same(dt, focusD) ? '0' : '-1') + '">' + d + '</button></td>';
        if (dt.getDay() === 6 && d < days) h += '</tr><tr>';
      }
      return h + '</tr></tbody></table></div>';
    }
    function draw(keepFocus) {
      var n = months(), h = '';
      for (var k = 0; k < n; k++) { var dd = new Date(view.getFullYear(), view.getMonth() + k, 1); h += month(dd.getFullYear(), dd.getMonth()); }
      cal.innerHTML = h;
      sum.textContent = tmpS ? dot(tmpS) + ' ~ ' + (tmpE ? dot(tmpE) : '끝 날짜를 고르세요') : '시작 날짜를 고르세요';
      var t = today(), lastShown = new Date(view.getFullYear(), view.getMonth() + n, 1);
      $('[data-drp-next]', pop).disabled = lastShown > t;
      if (keepFocus) { var f = $('.oc-drp-day[tabindex="0"]', cal); if (f) f.focus(); }
    }
    function showMonthOf(d) { // d 가 보이는 달 안에 있게 view 를 옮긴다 (PC 는 오른쪽 달에 오게)
      var n = months(), first = new Date(view.getFullYear(), view.getMonth(), 1), last = new Date(view.getFullYear(), view.getMonth() + n, 0);
      if (d < first || d > last) view = new Date(d.getFullYear(), d.getMonth() - (n - 1), 1);
    }
    function open(v) {
      pop.hidden = !v;
      if (scrim) scrim.hidden = !v || !MOB.matches;
      btn.setAttribute('aria-expanded', String(v));
      root.classList.toggle('oc-is-open', v);
      place();
      if (!v) return;
      tmpS = start; tmpE = end; hover = null;
      focusD = end || start || today();
      view = new Date(focusD.getFullYear(), focusD.getMonth() - (months() - 1), 1);
      draw(true);
    }
    function pick(d) {
      if (!tmpS || tmpE) { tmpS = d; tmpE = null; }
      else if (d < tmpS) { tmpE = tmpS; tmpS = d; }
      else tmpE = d;
      hover = null; focusD = d; draw(true);
    }

    btn.addEventListener('click', function () { open(pop.hidden); });
    if (scrim) scrim.addEventListener('click', function () { open(false); });
    pop.addEventListener('click', function (e) {
      var day = e.target.closest('.oc-drp-day');
      if (day && !day.disabled) { pick(parse(day.getAttribute('data-d'))); return; }
      if (e.target.closest('[data-drp-prev]')) { view = new Date(view.getFullYear(), view.getMonth() - 1, 1); draw(); return; }
      if (e.target.closest('[data-drp-next]')) { view = new Date(view.getFullYear(), view.getMonth() + 1, 1); draw(); return; }
      if (e.target.closest('[data-drp-all]')) { tmpS = tmpE = null; hover = null; commit(); open(false); btn.focus(); return; } // 전체 기간 = 지우고 바로 적용
      if (e.target.closest('[data-drp-apply]')) { commit(); open(false); btn.focus(); return; }
      if (e.target.closest('[data-drp-close]')) { open(false); btn.focus(); }
    });
    // 마우스로 끝 날짜를 고르기 전 미리 보기 (마우스 기기만 — 터치는 누르면 바로 고른다)
    cal.addEventListener('mouseover', function (e) {
      if (!tmpS || tmpE) return;
      var day = e.target.closest('.oc-drp-day'); if (!day || day.disabled) return;
      var d = parse(day.getAttribute('data-d')); if (same(d, hover)) return;
      hover = d; focusD = d; draw();
    });
    cal.addEventListener('keydown', function (e) {
      var day = e.target.closest('.oc-drp-day'); if (!day) return;
      var d = parse(day.getAttribute('data-d')), n = null, t = today();
      if (e.key === 'ArrowLeft') n = addDays(d, -1);
      else if (e.key === 'ArrowRight') n = addDays(d, 1);
      else if (e.key === 'ArrowUp') n = addDays(d, -7);
      else if (e.key === 'ArrowDown') n = addDays(d, 7);
      else if (e.key === 'PageUp') n = addMonths(d, -1);
      else if (e.key === 'PageDown') n = addMonths(d, 1);
      if (!n) return;
      e.preventDefault();
      if (n > t) n = t;
      focusD = n; if (tmpS && !tmpE) hover = n;
      showMonthOf(n); draw(true);
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !pop.hidden) { open(false); btn.focus(); } });
    // 바깥을 누르면 닫는다. 날짜를 누르면 달력을 다시 그려 눌린 버튼이 문서에서 빠지므로, 눌린 순간의 경로(composedPath)로 판단한다
    document.addEventListener('click', function (e) {
      if (pop.hidden) return;
      var path = e.composedPath ? e.composedPath() : [];
      if (path.indexOf(root) > -1 || path.indexOf(pop) > -1 || root.contains(e.target)) return;
      open(false);
    });
    var onMq = function () { if (!pop.hidden) { if (scrim) scrim.hidden = !MOB.matches; place(); showMonthOf(focusD); draw(); } };
    if (MOB.addEventListener) MOB.addEventListener('change', onMq); else if (MOB.addListener) MOB.addListener(onMq);
    label();
  });
})();
