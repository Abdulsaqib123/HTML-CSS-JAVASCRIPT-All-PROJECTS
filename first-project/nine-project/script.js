let pausevs = document.querySelector('.pause');
let one = document.querySelector('#one');
let two = document.querySelector('#two');
let v = document.querySelector('.v');

one.addEventListener('click' , () =>{
pausevs.play();
v.style.left = '0';
});

two.addEventListener('click' , () =>{
pausevs.pause();
v.style.left = '73px';
});