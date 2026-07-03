
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('is-open');
    });
  }

  const form = document.querySelector('#inquiry-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      const action = form.getAttribute('action') || '';
      if (action.includes('your-id')) {
        e.preventDefault();
        const msg = document.querySelector('.form-message');
        if (msg) {
          msg.textContent = 'Please replace the Formspree ID before using this form online.';
          msg.style.display = 'block';
        }
      }
    });
  }
});
