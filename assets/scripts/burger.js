const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const closeBtn = document.getElementById('close-btn');

burger.addEventListener('click', function() {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
});

closeBtn.addEventListener('click', function() {
    menu.classList.remove('active');
    burger.classList.remove('active');
});