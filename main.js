// Snackbar show/hide logic
function showSnackbar(message) {
  var snackbar = document.getElementById('snackbar');
  snackbar.textContent = message;
  snackbar.style.display = 'block';
  snackbar.classList.add('show');
  setTimeout(function () {
    snackbar.classList.remove('show');
    snackbar.style.display = 'none';
  }, 2500);
}

// Bootstrap form validation
(function () {
  'use strict';
  const form = document.getElementById('contatoForm');
  if (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        form.classList.add('was-validated');
        showSnackbar('Mensagem enviada com sucesso!');
        form.reset();
        form.classList.remove('was-validated');
      }
      form.classList.add('was-validated');
    }, false);
  }
})();