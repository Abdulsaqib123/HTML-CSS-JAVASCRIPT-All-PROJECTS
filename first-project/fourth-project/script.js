let menu = document.querySelector('.menu');
let tog = document.querySelector('.tog');

tog.addEventListener('click' , () =>{
menu.classList.toggle('active');
tog.classList.toggle('active');
});