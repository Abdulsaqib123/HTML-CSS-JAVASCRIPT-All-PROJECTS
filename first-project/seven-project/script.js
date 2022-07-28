let open1 = document.querySelector('.open1');
let open2 = document.querySelector('.open2');
let open3 = document.querySelector('.open3');

let icon = document.querySelector('.icon');
let icon2 = document.querySelector('.icon2');
let icon3 = document.querySelector('.icon3');

icon.addEventListener('click', () => {
    open1.classList.toggle('O1');
    open2.classList.remove('O2');
    open3.classList.remove('O3');
});
icon2.addEventListener('click', () => {
    open1.classList.remove('O1');
    open3.classList.remove('O3');
    open2.classList.toggle('O2');
});
icon3.addEventListener('click', () => {
    open1.classList.remove('O1');
    open2.classList.remove('O2');
    open3.classList.toggle('O3');
});