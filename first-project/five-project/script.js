let tog = document.querySelector('.tog');
let closes = document.querySelector('.close');
let menu = document.querySelector('.menu');

tog.addEventListener('click', () => {
    menu.classList.toggle('active');
});

closes.addEventListener('click', () => {
    menu.classList.remove('active');
});