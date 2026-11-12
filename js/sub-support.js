/* 서브 페이지 시안 — 고객지원·회원 묶음 동작 (목업 전용. 고도몰에서는 쓰지 않는다)
   ① join: 전체 동의 ↔ 개별 동의 연동, 기업/개인에 따라 사업자등록번호 칸 표시
   ② cs : 자주 묻는 질문 분류 칩으로 걸러 보기
   ③ login: 회원 로그인 / 비회원 조회 탭 (주소 끝 #guest 면 비회원 조회로 연다)
   서식 제출은 시안이라 막는다. 전체를 즉시 실행 함수로 감싼 ES5 문법 (main.js 와 같은 규칙) */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  // 시안: 서식 제출은 막는다. data-mock-go 가 있으면 그 화면으로만 넘어간다 (견적 비밀번호 확인 → 견적 상세)
  $$('form[data-mock]').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var go = f.getAttribute('data-mock-go');
      if (go) location.href = go;
    });
  });

  // 견적 조회 기간(.oc-drp) — 시안은 서버가 없으므로 목록 행을 요청일로 걸러 보여 준다 (고도몰은 서버가 sd·ed / sy·sm·ey·em 으로 거른다)
  document.addEventListener('oc-drp-change', function (e) {
    var sec = e.target.closest('section'), d = e.detail || {}; if (!sec) return;
    var s = d.start, en = d.end, shown = 0, body = $('.oc-tbl tbody', sec); if (!body) return;
    var none = $('[data-drp-none]', body); if (none) none.remove();
    $$('tr', body).forEach(function (tr) {
      var c = $('[data-label="요청일"]', tr), m = c && /(\d{4})-(\d{2})-(\d{2})/.exec(c.textContent);
      var dt = m ? new Date(+m[1], +m[2] - 1, +m[3]) : null;
      var ok = !s || !en || (dt && dt >= s && dt <= en);
      tr.hidden = !ok; if (ok) shown++;
    });
    if (!shown) body.insertAdjacentHTML('beforeend', '<tr data-drp-none><td colspan="5" class="oc-drp-none">선택한 기간에 접수된 견적이 없습니다.</td></tr>');
  });

  // ① 회원가입
  var all = $('[data-agree-all]');
  if (all) {
    var items = $$('[data-agree]');
    all.addEventListener('change', function () { items.forEach(function (i) { i.checked = all.checked; }); });
    items.forEach(function (i) {
      i.addEventListener('change', function () { all.checked = items.every(function (x) { return x.checked; }); });
    });
  }
  var types = $$('input[name="oc-mtype"]');
  if (types.length) {
    var biz = $$('[data-biz]');
    var sync = function () {
      var isBiz = types.filter(function (t) { return t.checked; })[0].value === 'biz';
      biz.forEach(function (b) {
        b.hidden = !isBiz;
        $$('input', b).forEach(function (i) { i.disabled = !isBiz; });
      });
    };
    types.forEach(function (t) { t.addEventListener('change', sync); });
    sync();
  }

  // ③ 로그인 탭
  var auth = $('[data-auth-tabs]');
  if (auth) {
    var tabs = $$('[role="tab"]', auth);
    var pick = function (t, focus) {
      tabs.forEach(function (b) { var on = b === t; b.setAttribute('aria-selected', String(on)); b.tabIndex = on ? 0 : -1; document.getElementById(b.getAttribute('aria-controls')).hidden = !on; });
      if (focus) t.focus();
    };
    tabs.forEach(function (t) { t.addEventListener('click', function () { pick(t); }); });
    $('[role="tablist"]', auth).addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      var k = tabs.indexOf(document.activeElement); if (k < 0) return;
      pick(tabs[(k + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length], true);
    });
    if (location.hash === '#guest') pick(tabs[1]);
  }

  // ② 고객센터 FAQ 걸러 보기
  var chips = $('[data-faq-filter]');
  if (chips) {
    var rows = $$('[data-faq-cat]');
    chips.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-cat]'); if (!b) return;
      $$('button', chips).forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      var cat = b.getAttribute('data-cat');
      rows.forEach(function (r) { r.hidden = cat !== 'all' && r.getAttribute('data-faq-cat') !== cat; });
    });
  }
})();
