let choose = document.querySelector('#choose');
let one = document.querySelector('.one');
let r1 = document.querySelector('#r1');
let r2 = document.querySelector('#r2');
let r3 = document.querySelector('#r3');
let r4 = document.querySelector('#r4');
let img = document.querySelector('.img1');
let bright = document.querySelector('.bright');
let brights = document.querySelector('.brights');
let brights1 = document.querySelector('.brights1');
let brights2 = document.querySelector('.brights2');
let brights3 = document.querySelector('.brights3');
let brights4 = document.querySelector('.brights4');
let val = document.querySelector('.val');
let val1 = document.querySelector('.val1');
let val2 = document.querySelector('.val2');
let val3 = document.querySelector('.val3');
let val4 = document.querySelector('.val4');
let val5 = document.querySelector('.val5');

// btn opacity

let two = document.querySelector('.two');
let three = document.querySelector('.three');

brights4.addEventListener('input' , () =>{
let brights4value = brights4.value;
let brightvalue = bright.value;
let brightvalue1 = brights.value;
let brights1value = brights1.value;
let brights2value = brights2.value;
img.style.filter = `brightness(${brightvalue}%) saturate(${brightvalue1}%) invert(${brights1value}%) grayscale(${brights2value}%) blur(${brights4value}px)`;
brights4.max = 30;
val5.innerHTML = brights4value;
});


bright.addEventListener('input' , () =>{
let brightvalue = bright.value;
let brightvalue1 = brights.value;
let brights1value = brights1.value;
let brights2value = brights2.value;
let brights4value = brights4.value;
img.style.filter = `brightness(${brightvalue}%) saturate(${brightvalue1}%) invert(${brights1value}%) grayscale(${brights2value}%) blur(${brights4value}px)`;
val.innerHTML = brightvalue + '%';
bright.max = 200;
console.log('in');
let brights3value = brights3.value;
img.style.width = brights3value + '%';
img.style.height = brights3value + '%';
brights3.max = 100;
brights3.value = brights3value;
});

brights.addEventListener('input' , () =>{
    let brightvalue = bright.value;
    let brightvalue1 = brights.value;
let brights1value = brights1.value;
let brights2value = brights2.value;
let brights4value = brights4.value;
    img.style.filter = `brightness(${brightvalue}%) saturate(${brightvalue1}%) invert(${brights1value}%) grayscale(${brights2value}%) blur(${brights4value}px)`;
    val1.innerHTML = brightvalue1 + '%';
    console.log('in');
    brights.max = 100;
    let brights3value = brights3.value;
    img.style.width = brights3value + '%';
    img.style.height = brights3value + '%';
    brights3.max = 100;
    brights3.value = brights3value;
    });

    brights1.addEventListener('input' , () =>{
        let brightvalue = bright.value;
        let brightvalue1 = brights.value;
let brights1value = brights1.value;
val2.innerHTML = brights1value + '%';
brights1.max = 150;
let brights2value = brights2.value;
let brights4value = brights4.value;
img.style.filter = `brightness(${brightvalue}%) saturate(${brightvalue1}%) invert(${brights1value}%) grayscale(${brights2value}%) blur(${brights4value}px)`;
let brights3value = brights3.value;
img.style.width = brights3value + '%';
img.style.height = brights3value + '%';
brights3.max = 100;
brights3.value = brights3value;
    });

    brights2.addEventListener('input' , () =>{
        let brightvalue = bright.value;
        let brightvalue1 = brights.value;
let brights1value = brights1.value;
        let brights2value = brights2.value;
        val3.innerHTML = brights2value + '%';
        brights2.max = 200;
        let brights4value = brights4.value;
        img.style.filter = `brightness(${brightvalue}%) saturate(${brightvalue1}%) invert(${brights1value}%) grayscale(${brights2value}%) blur(${brights4value}px)`;
        let brights3value = brights3.value;
        img.style.width = brights3value + '%';
        img.style.height = brights3value + '%';
        brights3.max = 100;
        brights3.value = brights3value;
    });

    brights3.addEventListener('input' , () =>{
        let brightvalue = bright.value;
        let brightvalue1 = brights.value;
let brights1value = brights1.value;
        let brights2value = brights2.value;
        let brights4value = brights4.value;
        img.style.filter = `brightness(${brightvalue}%) saturate(${brightvalue1}%) invert(${brights1value}%) grayscale(${brights2value}%) blur(${brights4value}px)`;
        let brights3value = brights3.value;
        img.style.width = brights3value + '%';
        img.style.height = brights3value + '%';
        val4.innerHTML = brights3value + '%';
        brights3.max = 100;
        if(brights3.value < 50){
            img.style.width = '50%';
            img.style.height = '50%';
        }else{
            img.style.width = brights3value + '%';
            img.style.height = brights3value + '%';
        }
    });

    two.addEventListener('click' , () =>{
console.log('save image');
let canvas = document.createElement('canvas');
let d3 = canvas.getContext('2d');
canvas.width = img.naturalWidth;
canvas.height = img.naturalHeight;
let brightvalue = bright.value;
let brightvalue1 = brights.value;
let brights1value = brights1.value;
let brights2value = brights2.value;
let brights4value = brights4.value;


d3.filter = img.style.filter = `brightness(${brightvalue}%) saturate(${brightvalue1}%) invert(${brights1value}%) grayscale(${brights2value}%) blur(${brights4value}px)`;
d3.drawImage(img , 0,0, canvas.width,canvas.height);

let link = document.createElement('a');
link.download = 'img.jpg';
link.href = canvas.toDataURL();
link.click();
    });


// row opacity

let row2 = document.querySelector('.row2');

three.addEventListener('click' , () =>{
    bright.max = 100;
    brights.max = 100;
    let rsvalue1 = bright.value = 50;
    val.innerHTML = rsvalue1 + '%';
    let rsvalue2 = brights.value = 50;
    val1.innerHTML = rsvalue2 + '%';
    let brights1val = brights1.value = 0;
    val2.innerHTML = brights1val + '%';
    let brightingsvalue = brights2.value = 0;
    val3.innerHTML = brightingsvalue + '%';
    img.style.filter = `brightness(100%) saturate(100%) blur(0px)`;
    brights4.value = 0;
    val5.innerHTML = brights4.value;
    img.style.transform = `rotate(0deg)`;
    img.style.transform = `rotateY(0deg)`;
    img.style.transform = `rotateX(0deg)`;
    brights3.max = 100;
    brights3.value = 100;
    val4.innerHTML = brights3.value + '%';
    img.style.width = '100%';
    img.style.height = '100%';
});

choose.addEventListener('click' , () =>{
let file = choose.files[0];
if(!file) return;
img.src = URL.createObjectURL(file);
console.log(file);
two.classList.add('active');
three.classList.add('active');
row2.classList.add('active');
bright.max = 200;
bright.value = 100;
brights.max = 100;
brights1.value = 0;
val2.innerHTML = brights1.value + '%';
brights1.max = 100;
brights2.value = 0;
val3.innerHTML = brights2.value + '%';
brights3.max = 100;
brights3.value = 100;
});

let left = 90;
let left1 = 90;
let left2 = 180;
let left3 = 180;

r1.addEventListener('click' , update);
r2.addEventListener('click' , update1);
r3.addEventListener('click' , update2);
r4.addEventListener('click' , update3);

function update(){
img.style.transform = `rotate(${left}deg)`;
left -= 90;
console.log('left');
}

function update1(){
    img.style.transform = `rotate(${left1}deg)`;
    left1 += 90;
    console.log('left1');
    }

    function update2(){
        img.style.transform = `rotateY(${left2}deg)`;
        left2 -= 180;
    }

    function update3(){
        img.style.transform = `rotateX(${left3}deg)`;
        left3 -= 180;
    }

one.addEventListener('click' , () =>{
choose.click();
});