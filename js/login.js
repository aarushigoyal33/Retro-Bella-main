// RETRO BELLA — Login / Authentication JavaScript

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.auth-tab');
  const panels = document.querySelectorAll('.auth-panel');
  const authTitle = document.getElementById('authTitle');
  const authSub = document.getElementById('authSub');
  const authSwitch = document.getElementById('authSwitch');

  function setMode(mode) {
    tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === mode));
    panels.forEach(p => p.classList.toggle('active', p.dataset.panel === mode));
    if (mode === 'signin') {
      if (authTitle) authTitle.textContent = 'Sign in to your account';
      if (authSub) authSub.textContent = 'Access your wishlist, past orders and early drops.';
      if (authSwitch) authSwitch.innerHTML = 'New to Retro Bella? <button type="button" id="switchToSignup">Create an account</button>';
    } else {
      if (authTitle) authTitle.textContent = 'Create your account';
      if (authSub) authSub.textContent = 'Join the list for early access & city-exclusive drops.';
      if (authSwitch) authSwitch.innerHTML = 'Already have an account? <button type="button" id="switchToSignin">Sign in</button>';
    }
    bindSwitchLinks();
  }

  function bindSwitchLinks() {
    const toSignup = document.getElementById('switchToSignup');
    const toSignin = document.getElementById('switchToSignin');
    if (toSignup) toSignup.addEventListener('click', () => setMode('signup'));
    if (toSignin) toSignin.addEventListener('click', () => setMode('signin'));
  }
  bindSwitchLinks();

  tabs.forEach(tab => tab.addEventListener('click', () => setMode(tab.dataset.tab)));

  // ---------- Form Validation ----------
  function validate(form) {
    let ok = true;
    form.querySelectorAll('input[required]').forEach(input => {
      const errEl = input.closest('.auth-field').querySelector('.err');
      if (!input.checkValidity()) {
        ok = false;
        if (errEl) {
          errEl.textContent = input.type === 'email' ? 'Enter a valid email address.' :
                               input.type === 'password' ? 'Password must be at least 6 characters.' :
                               'This field is required.';
        }
      } else {
        if (errEl) errEl.textContent = '';
      }
    });
    return ok;
  }

  // ---------- Loader Overlay & Redirect ----------
  const loaderOverlay = document.getElementById('loaderOverlay');
  const loaderFill = document.getElementById('loaderFill');
  const loaderCaption = document.getElementById('loaderCaption');

  function goHomeWithLoader(caption) {
    if (loaderCaption) loaderCaption.textContent = caption;
    if (loaderOverlay) loaderOverlay.style.display = 'flex';
    requestAnimationFrame(() => {
      if (loaderFill) loaderFill.style.width = '100%';
    });
    setTimeout(() => {
      window.location.href = 'index.html?welcome=1';
    }, 1500);
  }

  const signinForm = document.getElementById('signinForm');
  if (signinForm) {
    signinForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (validate(e.target)) goHomeWithLoader('Signing you in…');
    });
  }

  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (validate(e.target)) goHomeWithLoader('Creating your account…');
    });
  }

  const forgotLink = document.getElementById('forgotLink');
  if (forgotLink) {
    forgotLink.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Password reset is not wired up in this demo — check the email field and try Sign In.');
    });
  }
});
