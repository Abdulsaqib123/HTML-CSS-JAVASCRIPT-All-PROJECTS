let form = document.querySelector('.form');
let check = document.getElementById('check');
let error = document.querySelector('.error');
let vals = document.querySelector('.val');
let sets = document.querySelector('.sets');
let write = document.querySelector('.write');

form.onsubmit = function(e){

e.preventDefault();
write.addEventListener("click" , () =>{
    sets.style.display = "none";
    check.value = "";
    error.innerHTML = 'Please Inter value';
    error.style.backgroundColor = 'rgba(255, 0, 0, 0.26)';
    error.style.color = 'red';
    let d = setTimeout(() =>{
        error.style.display = 'block';
    },500);
    let ds = setInterval(() =>{
        error.style.display = 'none';
    },2000);

    error.style.display = d;
    error.style.display = ds;

});

if(check.value == ''){
    error.innerHTML = 'Please Inter value';
    error.style.backgroundColor = 'rgba(255, 0, 0, 0.26)';
    error.style.color = 'red';
    let d = setTimeout(() =>{
        error.style.display = 'block';
    },500);
    let ds = setInterval(() =>{
        error.style.display = 'none';
    },2000);

    error.style.display = d;
    error.style.display = ds;
}

else{
    error.innerHTML = 'Item added to the List';
    error.style.backgroundColor = 'rgba(94, 255, 0, 0.26)';
    error.style.color = 'green';
    let dd = setTimeout(() =>{
        error.style.display = 'block';
    },500);
    let dds = setInterval(() =>{
        error.style.display = 'none';
    },4000);

    error.style.display = dd;
    error.style.display = dds;

    sets.style.display = 'flex';
let view = check.value;
vals.innerHTML = view;
}
};
