(function () {
  const form = document.querySelector('[data-static-contact]');
  if (!form) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const message = form.querySelector('[data-form-message]');
    if (message) {
      message.textContent = '送信機能は未接続です。公開時はフォームサービスまたはメール送信プログラムに接続してください。';
    }
  });
})();

