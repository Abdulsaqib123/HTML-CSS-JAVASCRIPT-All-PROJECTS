let div1 = document.querySelector('.div1 img');
let div2 = document.querySelector('.div2 img');
let div3 = document.querySelector('.div3 img');
let change = document.querySelector('.change');
let right = document.querySelector('.right');
let right1 = document.querySelector('.right1');
let left = document.querySelector('.left');
let left1 = document.querySelector('.left1');

let inner = document.querySelector('.inner')

right.addEventListener("click" , () =>{
change.src = './images/nature-2.jpeg';
div2.style.opacity = '1';
div1.style.opacity = '0.5';
div3.style.opacity = '0.5';
right.style.display = 'none';
right1.style.display = 'block';
inner.innerHTML = 'Nature-2';
});

right1.addEventListener("click" , () =>{
    change.src = './images/nature-3.jpeg';
    div2.style.opacity = '0.5';
    div1.style.opacity = '0.5';
    div3.style.opacity = '1';
    left.style.display = "none";
    left1.style.display = 'block';
inner.innerHTML = 'Nature-3';
    });

left.addEventListener("click" , () =>{
    change.src = './images/nature-1.jpeg';
    div2.style.opacity = '0.5';
    div1.style.opacity = '1';
    div3.style.opacity = '0.5';
    right1.style.display = 'none';
    right.style.display = 'block';
inner.innerHTML = 'Nature-1';
    });

    left1.addEventListener("click" , () =>{
        change.src = './images/nature-2.jpeg';
        div2.style.opacity = '1';
        div1.style.opacity = '0.5';
        div3.style.opacity = '0.5';
        left1.style.display = 'none';
        left.style.display = "block";
inner.innerHTML = 'Nature-2';
        });

let over1 = document.querySelector('.over1');
document.querySelector('.img1').onclick = () =>{
over1.style.display = 'flex';
};

document.querySelector('.close').onclick = () =>{
over1.style.display = 'none';
};

div1.addEventListener('click' , () =>{
change.src = './images/nature-1.jpeg';
div1.style.opacity = '1';
div2.style.opacity = '0.5';
div3.style.opacity = '0.5';
inner.innerHTML = 'Nature-1';
});

div2.addEventListener('click' , () =>{
change.src = './images/nature-2.jpeg';
div2.style.opacity = '1';
div1.style.opacity = '0.5';
div3.style.opacity = '0.5';
inner.innerHTML = 'Nature-2';
});

div3.addEventListener('click' , () =>{
change.src = './images/nature-3.jpeg';
div2.style.opacity = '0.5';
div1.style.opacity = '0.5';
div3.style.opacity = '1';
inner.innerHTML = 'Nature-3';
});