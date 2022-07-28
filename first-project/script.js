let color = ['red' ,'green' ,'blue' ,'crimson'];
let click = document.getElementById('click');
let span = document.getElementById('span');

click.addEventListener('click' , () =>{
    let fun = get();
    document.body.style.backgroundColor = color[fun];
    console.log(fun);

    span.textContent = color[fun];

});

function get(){
    return Math.floor(Math.random() * color.length);
}
console.log(color);