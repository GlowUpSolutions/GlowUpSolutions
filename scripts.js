// セクションへのスクロール
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// スクロールイベントのリスナーを設定
window.addEventListener('scroll', function() {
  const servicesSection = document.getElementById('services');
  
  // サービスセクションが画面に表示されたら
  const rect = servicesSection.getBoundingClientRect();
  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    servicesSection.classList.add('scrolled');
  } else {
    servicesSection.classList.remove('scrolled');
  }
});


// フォーム送信イベント
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();
  alert('お問い合わせありがとうございます！');
  this.reset();
});
