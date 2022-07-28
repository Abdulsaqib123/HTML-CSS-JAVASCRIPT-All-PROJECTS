// let btn1 = document.querySelector('.btn');
// let btn2 = document.querySelector('.btn1');
// let btn3 = document.querySelector('.btn2');
// let count = document.querySelector('.count');
// let values = 0;

//     btn1.addEventListener('click' , () =>{
//         values--;
//         count.innerHTML = values;
//         if(values < 0){
//             count.style.color = 'red';
//         }
//     });

//     btn2.addEventListener('click' , () =>{
// values = 0;
// count.innerHTML = values;
// if(values === 0){
//     count.style.color = 'black';
// }
//     });


// btn3.addEventListener('click' , () =>{
// values++;
// count.innerHTML = values;
// if(values > 0){
//     count.style.color = 'green';
// }
// });


let count = 0;
let counts = document.querySelector('.count');
let btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
btn.addEventListener('click' , function(e){
let color = e.target.classList;
if(color.contains('decrease')){
    count--;
}
else if(color.contains('increase')){
    count++;
}
else{
    count = 0;
}

if(count < 0){
    counts.style.color = "red";
}

else if(count > 0){
    counts.style.color = "green";
}
else{
    counts.style.color = 'black';
}
counts.innerHTML = count;
});
});

const fonty = document.querySelector('.font');
const clicking = document.querySelector('#click');


clicking.oninput = function(){
    const rvalue = clicking.value;
    fonty.style.fontSize = rvalue + 'px';
}


        
