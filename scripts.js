// セクションへのスクロール
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// フォーム送信イベント
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();
  alert('お問い合わせありがとうございます！');
  this.reset();
});
