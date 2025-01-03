// ページが読み込まれたときにボタンを非表示にする
window.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.gotop');
    button.style.display = 'none';
});

// スクロールイベント
window.addEventListener('scroll', function() {
    const button = document.querySelector('.gotop');
    const height = document.body.clientHeight/4;
    
    if (window.scrollY >= height) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
});

// ボタンクリック時の動作
const button = document.querySelector('.gotop');
button.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});

// メニューを押したときに展開する
document.getElementById("menu-icon").addEventListener("click", function() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
});
