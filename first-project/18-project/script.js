let btn = document.querySelectorAll('.one');
let row1 = document.querySelector('.row1');
let row2 = document.querySelector('.row2');
let row3 = document.querySelector('.row3');
let row4 = document.querySelector('.row4');
let div3 = document.querySelector('.div3');
let div3_img = document.querySelector('.div3 img');
let div3_h2 = document.querySelector('.div3 h2');
let div1_img = document.querySelector('.div1 img');
let div1_h2 = document.querySelector('.div1 h2');
let div1 = document.querySelector('.div1');
let div2_img = document.querySelector('.div2 img');
let div2_h2 = document.querySelector('.div2 h2');

btn.forEach(function(btns){
btns.addEventListener('click' , (e) =>{
let targets = e.target.classList;
if(targets.contains('one1')){
    console.log('click no 1 btn');
    row1.style.display = 'grid';
    row2.style.display = 'grid';
    row3.style.display = 'grid';
    row4.style.display = 'grid';
    div3.style.display = 'block';
    div2_h2.innerHTML = 'Albany Table';
    div2_img.src = './2.jpg';
    div1.style.display = 'block';
    div1_img.src = './1.jpg';
    div2_h2.innerHTML = 'Albany Table';
    div3_img.src = './3.jpg';
    div3_h2.innerHTML = 'Accent Chair';
}
else if(targets.contains('two')){
    console.log('click no 2 btn');
    row1.style.display = 'grid';
    row2.style.display = 'none';
    row3.style.display = 'none';
    row4.style.display = 'none';
    div3.style.display = 'none';
    div2_h2.innerHTML = 'Accent Chair';
    div2_img.src = './11.jpg';
    div1.style.display = 'block';
    div1_img.src = './1.jpg';
    div2_h2.innerHTML = 'Albany Table';
    div3_img.src = './3.jpg';
    div3_h2.innerHTML = 'Accent Chair';
}

else if(targets.contains('three')){
    console.log('click no 3 btn');
    row1.style.display = 'grid';
    row2.style.display = 'none';
    row3.style.display = 'none';
    row4.style.display = 'none';
    div1.style.display = 'block';
    div3.style.display = 'block';
    div2_img.src = './7.jpg';
    div2_h2.innerHTML = 'Modern Bookshelf';
    div1_img.src = './2.jpg';
    div2_h2.innerHTML = 'Albany Table';
    div3_img.src = './12.jpg';
    div3_h2.innerHTML = 'Leather Sofa';

}

else if(targets.contains('four')){
    console.log('click no 4 btn');
}

else{
    console.log('click no 5 btn');
}
});
});


const search = () =>{
let mainsearch = document.getElementById('mainsearch').value.toUpperCase();
let val = document.querySelector('.val')
let maindata = document.querySelector('right');
let products = document.querySelectorAll('.products');
let pname = document.getElementsByTagName('h2');
for(var i = 0; i < pname.length; i++){
    let match = products[i].getElementsByTagName('h2')[0];
    if(match){
        let textvalue = match.innerHTML || match.textContent;
        if(textvalue.toUpperCase().indexOf(mainsearch) > -1){
            products[i].style.display = '';
        }else{
            products[i].style.display = 'none';
        }
    }
}
console.log(products);
};