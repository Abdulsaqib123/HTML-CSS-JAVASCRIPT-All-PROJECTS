let tog = document.querySelector('.tog');
let closes = document.querySelector('.close');
let modal2 = document.querySelector('.modal2');

tog.addEventListener('click' , () =>{
modal2.style.display = 'flex';
});

closes.addEventListener('click' , () =>{
modal2.style.display = 'none';
});