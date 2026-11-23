/**
 * 面壁内部 HTML 访问遮罩
 * 用法见 README.md。只改配置，不要改本文件样式。
 */
(function () {
  if (window.__MB_ACCESS_GATE__) return;
  window.__MB_ACCESS_GATE__ = true;

  var script = document.currentScript;
  var cfg = Object.assign(
    {
      password: "",
      title: "内部材料",
      hint: "请输入访问密码后进入页面",
      logo: "",
      storageKey: "mb-access-gate"
    },
    window.ACCESS_GATE || {}
  );
  if (script) {
    if (script.getAttribute("data-password")) cfg.password = script.getAttribute("data-password");
    if (script.getAttribute("data-title")) cfg.title = script.getAttribute("data-title");
    if (script.getAttribute("data-hint")) cfg.hint = script.getAttribute("data-hint");
    if (script.getAttribute("data-logo")) cfg.logo = script.getAttribute("data-logo");
    if (script.getAttribute("data-storage-key")) cfg.storageKey = script.getAttribute("data-storage-key");
  }

  var css = [
    "body:not(.mb-gate-unlocked){overflow:hidden}",
    "body:not(.mb-gate-unlocked) > *:not(.mb-gate){visibility:hidden;pointer-events:none}",
    ".mb-gate{position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;padding:28px 20px;isolation:isolate;overflow:hidden;font-family:\"MiSans\",\"SF Pro Text\",-apple-system,BlinkMacSystemFont,\"PingFang SC\",\"Microsoft YaHei\",sans-serif;-webkit-font-smoothing:antialiased;color:#000111;",
    "background:radial-gradient(1100px 620px at -5% -10%,rgba(67,75,255,.22),transparent 52%),radial-gradient(820px 560px at 110% 110%,rgba(39,60,217,.16),transparent 50%),radial-gradient(520px 380px at 72% 12%,rgba(255,255,255,.7),transparent 62%),linear-gradient(155deg,#F4F5FB 0%,#E3E6F5 40%,#EBECF3 100%)}",
    ".mb-gate:before{content:\"\";position:absolute;inset:0;z-index:0;pointer-events:none;opacity:.45;background-image:linear-gradient(rgba(51,52,68,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(51,52,68,.045) 1px,transparent 1px);background-size:40px 40px;mask-image:radial-gradient(ellipse 66% 60% at 50% 46%,#000 12%,transparent 78%)}",
    ".mb-gate:after{content:\"\";position:absolute;width:520px;height:520px;border-radius:50%;right:-140px;top:-180px;z-index:0;pointer-events:none;border:1px solid rgba(67,75,255,.13);box-shadow:0 0 0 64px rgba(67,75,255,.04),0 0 0 128px rgba(67,75,255,.018);animation:mbGateOrbit 22s ease-in-out infinite alternate}",
    ".mb-gate-orb{position:absolute;width:320px;height:320px;border-radius:50%;left:-110px;bottom:-90px;z-index:0;pointer-events:none;background:radial-gradient(circle at 42% 38%,rgba(67,75,255,.12),transparent 66%);border:1px solid rgba(67,75,255,.07);animation:mbGateOrbit 26s ease-in-out infinite alternate-reverse}",
    "@keyframes mbGateOrbit{from{transform:translate(0,0) rotate(0deg)}to{transform:translate(-20px,28px) rotate(4deg)}}",
    "@keyframes mbGateIn{from{opacity:0;transform:translateY(22px) scale(.97)}to{opacity:1;transform:translateY(0) scale(1)}}",
    "@keyframes mbGateShake{0%,100%{transform:translateX(0)}18%{transform:translateX(-7px)}36%{transform:translateX(7px)}54%{transform:translateX(-5px)}72%{transform:translateX(5px)}}",
    "body.mb-gate-unlocked .mb-gate{display:none}",
    ".mb-gate-card{position:relative;z-index:1;width:min(452px,100%);overflow:hidden;background:rgba(255,255,255,.95);border:1px solid rgba(255,255,255,.9);border-radius:24px;padding:38px 38px 28px;backdrop-filter:blur(22px);-webkit-backdrop-filter:blur(22px);box-shadow:0 1px 0 #fff inset,0 0 0 1px rgba(67,75,255,.04),0 30px 80px rgba(39,60,217,.14),0 12px 32px rgba(0,1,17,.05);animation:mbGateIn .65s cubic-bezier(.22,1,.36,1) both}",
    ".mb-gate-card.is-error{animation:mbGateShake .4s ease}",
    ".mb-gate-top{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:28px}",
    ".mb-gate-card .mb-gate-logo{width:116px;height:32px;object-fit:contain;object-position:left center;margin:0}",
    ".mb-gate-card .mb-gate-logo.is-empty{visibility:hidden}",
    ".mb-gate-mark{width:44px;height:44px;border-radius:14px;flex-shrink:0;display:grid;place-items:center;background:linear-gradient(160deg,rgba(255,255,255,.95),rgba(239,240,255,.9)),linear-gradient(145deg,#EFF0FF,#fff);border:1px solid #D8DAFF;color:#273CD9;box-shadow:0 8px 18px rgba(67,75,255,.12)}",
    ".mb-gate-mark svg{width:18px;height:18px}",
    ".mb-gate-card h2{margin:0 0 10px;font-size:28px;font-weight:650;letter-spacing:-.2px;line-height:1.2;color:#000111}",
    ".mb-gate-card>p{margin:0 0 28px;font-size:13.5px;color:#6E6F7B;line-height:1.7;max-width:36em}",
    ".mb-gate-field{margin-bottom:4px}",
    ".mb-gate-card label{display:block;font-size:12px;font-weight:650;color:#333444;margin-bottom:8px}",
    ".mb-gate-input{position:relative}",
    ".mb-gate-input .mb-gate-lock{position:absolute;left:14px;top:50%;transform:translateY(-50%);width:16px;height:16px;color:#9A9BA6;pointer-events:none;transition:color .15s}",
    ".mb-gate-input:focus-within .mb-gate-lock{color:#273CD9}",
    ".mb-gate-card input[type=password],.mb-gate-card input[type=text]#mbGatePassword{width:100%;height:52px;border:1px solid #DEDEE4;border-radius:14px;padding:0 46px 0 42px;background:#F5F6FB;color:#000111;font:inherit;transition:border-color .15s,background .15s,box-shadow .15s}",
    ".mb-gate-card input[type=password]::placeholder,.mb-gate-card input[type=text]#mbGatePassword::placeholder{color:#B0B2BE}",
    ".mb-gate-card input[type=password]:hover,.mb-gate-card input[type=text]#mbGatePassword:hover{border-color:#C5C7D6;background:#FAFBFE}",
    ".mb-gate-card input[type=password]:focus,.mb-gate-card input[type=text]#mbGatePassword:focus{outline:none;border-color:#434BFF;background:#fff;box-shadow:0 0 0 4px rgba(67,75,255,.14)}",
    ".mb-gate-toggle{position:absolute;right:8px;top:50%;transform:translateY(-50%);width:36px;height:36px;border:0;border-radius:10px;background:transparent;color:#9A9BA6;cursor:pointer;display:grid;place-items:center;padding:0;font:inherit}",
    ".mb-gate-toggle:hover{color:#273CD9;background:#EEF0FF}",
    ".mb-gate-toggle svg{width:18px;height:18px;display:block}",
    ".mb-gate-error{min-height:20px;margin:10px 0 16px;font-size:12px;color:#C0392B}",
    ".mb-gate-card button[type=submit]{width:100%;height:52px;border:0;border-radius:14px;background:linear-gradient(135deg,#5560FF 0%,#434BFF 45%,#273CD9 100%);color:#fff;font:inherit;font-size:14px;font-weight:650;letter-spacing:.3px;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:8px;box-shadow:0 14px 30px rgba(67,75,255,.32);transition:transform .15s,box-shadow .15s,filter .15s}",
    ".mb-gate-card button[type=submit]:hover{filter:brightness(1.05);box-shadow:0 16px 34px rgba(67,75,255,.4);transform:translateY(-1px)}",
    ".mb-gate-card button[type=submit]:active{transform:translateY(0);filter:brightness(.98)}",
    ".mb-gate-card button[type=submit] svg{width:16px;height:16px;transition:transform .15s}",
    ".mb-gate-card button[type=submit]:hover svg{transform:translateX(2px)}"
  ].join("");

  var lockSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>';
  var keySvg = '<svg class="mb-gate-lock" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/><path d="M17 11H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2Z"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>';
  var arrowSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>';
  var eyeOn = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>';
  var eyeOff = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 3l18 18"/><path d="M10.6 10.6A3 3 0 0 0 12 15a3 3 0 0 0 2.4-4.4"/><path d="M9.9 5.2A11 11 0 0 1 12 5c6.5 0 10 7 10 7a18 18 0 0 1-2.2 3.1"/><path d="M6.1 6.1C3.7 7.8 2 12 2 12s3.5 7 10 7a10.7 10.7 0 0 0 4.3-.9"/></svg>';

  function escapeHtml(s) {
    return String(s || "").replace(/[&<>"']/g, function (m) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m];
    });
  }

  function resolveLogo() {
    if (cfg.logo) return cfg.logo;
    var img = document.querySelector("header img, .brand img, .logo, img[alt*='面壁'], img[alt*='logo' i]");
    return img && img.getAttribute("src") ? img.getAttribute("src") : "";
  }

  function unlock() {
    document.body.classList.add("mb-gate-unlocked");
    try { sessionStorage.setItem(cfg.storageKey, "1"); } catch (e) {}
  }

  function mount() {
    var style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);

    var logo = resolveLogo();
    var wrap = document.createElement("div");
    wrap.className = "mb-gate";
    wrap.id = "mbGate";
    wrap.setAttribute("role", "dialog");
    wrap.setAttribute("aria-modal", "true");
    wrap.setAttribute("aria-labelledby", "mbGateTitle");
    wrap.innerHTML =
      '<div class="mb-gate-orb" aria-hidden="true"></div>' +
      '<form class="mb-gate-card" id="mbGateForm" autocomplete="off">' +
        '<div class="mb-gate-top">' +
          '<img class="mb-gate-logo' + (logo ? "" : " is-empty") + '" alt="面壁智能"' + (logo ? ' src="' + logo.replace(/"/g, "&quot;") + '"' : "") + " />" +
          '<div class="mb-gate-mark" aria-hidden="true">' + lockSvg + "</div>" +
        "</div>" +
        '<h2 id="mbGateTitle">' + escapeHtml(cfg.title) + "</h2>" +
        "<p>" + escapeHtml(cfg.hint) + "</p>" +
        '<div class="mb-gate-field">' +
          '<label for="mbGatePassword">访问密码</label>' +
          '<div class="mb-gate-input">' + keySvg +
            '<input id="mbGatePassword" name="password" type="password" placeholder="请输入访问密码" required autofocus />' +
            '<button type="button" class="mb-gate-toggle" id="mbGateToggle" aria-label="显示密码" aria-pressed="false">' + eyeOff + '</button>' +
          "</div>" +
        "</div>" +
        '<div class="mb-gate-error" id="mbGateError" aria-live="polite"></div>' +
        '<button type="submit">进入页面' + arrowSvg + "</button>" +
      "</form>";
    document.body.prepend(wrap);

    try {
      if (sessionStorage.getItem(cfg.storageKey) === "1") {
        unlock();
        return;
      }
    } catch (e) {}

    wrap.querySelector("#mbGateForm").addEventListener("submit", function (e) {
      e.preventDefault();
      var input = wrap.querySelector("#mbGatePassword");
      var err = wrap.querySelector("#mbGateError");
      var card = wrap.querySelector(".mb-gate-card");
      if (input.value === cfg.password) {
        err.textContent = "";
        unlock();
      } else {
        err.textContent = "密码不正确，请重试";
        card.classList.remove("is-error");
        void card.offsetWidth;
        card.classList.add("is-error");
        input.select();
      }
    });
    wrap.querySelector("#mbGateToggle").addEventListener("click", function () {
      var input = wrap.querySelector("#mbGatePassword");
      var btn = wrap.querySelector("#mbGateToggle");
      var show = input.type === "password";
      input.type = show ? "text" : "password";
      btn.setAttribute("aria-pressed", String(show));
      btn.setAttribute("aria-label", show ? "隐藏密码" : "显示密码");
      btn.innerHTML = show ? eyeOn : eyeOff;
      input.focus();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
