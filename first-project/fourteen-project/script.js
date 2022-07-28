let prev = document.querySelector('.left');
let prev1 = document.querySelector('.left1');
let prev2 = document.querySelector('.left2');
let next = document.querySelector('.right');
let slides = document.querySelector('.slide');
let second = document.querySelector('.right1');
let third = document.querySelector('.right2');
let dot1 = document.querySelector('.dot1');
let dot2 = document.querySelector('.dot2');
let dot3 = document.querySelector('.dot3');
let dot4 = document.querySelector('.dot4');


next.addEventListener('click' , () =>{
slides.style.transform = 'translateX(-25%)';
second.style.display = 'block';
next.style.display = 'none';
dot1.style.backgroundColor = 'gray';
dot2.style.backgroundColor = 'red';
prev2.style.display = 'none';
prev1.style.display = 'none';
prev.style.display = 'block';
});

second.addEventListener('click' , () =>{
slides.style.transform = 'translateX(-50%)';
prev1.style.display = 'block';
prev.style.display = 'none';
dot1.style.backgroundColor = 'gray';
dot2.style.backgroundColor = 'gray';
dot3.style.backgroundColor = 'red';
second.style.display = 'none';
third.style.display = 'block';
prev2.style.display = 'none';
});

third.addEventListener('click' , () =>{
    slides.style.transform = 'translateX(-75%)';
    prev1.style.display = 'none';
    prev2.style.display = 'block';
    dot4.style.backgroundColor = 'red';
    dot1.style.backgroundColor = 'gray';
    dot2.style.backgroundColor = 'gray';
    dot3.style.backgroundColor = 'gray';
});

prev.addEventListener('click' , () =>{
slides.style.transform = 'translateX(0%)';
second.style.display = 'none';
next.style.display = 'block';
dot1.style.backgroundColor = 'red';
dot3.style.backgroundColor = 'gray';
dot4.style.backgroundColor = 'gray';
dot2.style.backgroundColor = 'gray';
prev2.style.display = 'none';
});

prev1.addEventListener('click' , () =>{
slides.style.transform = 'translateX(-25%)';
prev1.style.display = 'none';
prev.style.display = 'block';
dot1.style.backgroundColor = 'gray';
dot3.style.backgroundColor = 'gray';
dot4.style.backgroundColor = 'gray';
dot2.style.backgroundColor = 'red';
third.style.display = 'none';
second.style.display = 'block';
});

prev2.addEventListener('click' , () =>{
    slides.style.transform = 'translateX(-50%)';
    prev2.style.display = "none";
    prev1.style.display = "block";
    dot1.style.backgroundColor = 'gray';
dot3.style.backgroundColor = 'red';
dot4.style.backgroundColor = 'gray';
dot2.style.backgroundColor = 'gray';
});

dot1.addEventListener('click' , () =>{
    slides.style.transform = 'translateX(0%)';
    dot1.style.backgroundColor = 'red';
    dot2.style.backgroundColor = 'gray';
    dot3.style.backgroundColor = 'gray';
    dot4.style.backgroundColor = 'gray';
    second.style.display = 'none';
    third.style.display = 'none';
next.style.display = 'block';
});

dot2.addEventListener('click' , () =>{
    slides.style.transform = 'translateX(-25%)';
    dot1.style.backgroundColor = 'gray';
    dot3.style.backgroundColor = 'gray';
    dot4.style.backgroundColor = 'gray';
    dot2.style.backgroundColor = 'red';
    second.style.display = 'block';
    third.style.display = 'none';
next.style.display = 'none';
});

dot3.addEventListener('click' , () =>{
    slides.style.transform = 'translateX(-50%)';
    dot1.style.backgroundColor = 'gray';
    dot2.style.backgroundColor = 'gray';
    dot4.style.backgroundColor = 'gray';
    dot3.style.backgroundColor = 'red';
    prev1.style.display = 'block';
prev.style.display = 'none';
prev2.style.display = 'none';
second.style.display = 'none';
next.style.display = 'none';
third.style.display = 'block';
});

dot4.addEventListener('click' , () =>{
    slides.style.transform = 'translateX(-75%)';
    dot1.style.backgroundColor = 'gray';
    dot2.style.backgroundColor = 'gray';
    dot3.style.backgroundColor = 'gray';
    dot4.style.backgroundColor = 'red';
    prev1.style.display = 'none';
    prev2.style.display = 'block';
prev.style.display = 'none';
});