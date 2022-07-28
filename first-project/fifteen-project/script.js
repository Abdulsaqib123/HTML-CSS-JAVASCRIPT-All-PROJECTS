let btn = document.querySelectorAll('.btn');
let b = document.querySelectorAll('.bt');
let values = document.querySelector('.value')
let valuese = document.querySelector('.values')


btn.forEach(function(btns){
btns.addEventListener('click' , (e) =>{
let classing = e.target.classList;
if(classing.contains("desc")){
values.innerHTML--;
}
else if(classing.contains("rst")){
values.innerHTML = '0';
}

else{
    values.innerHTML++;
}
});
});

b.forEach(function(btnse){
    btnse.addEventListener('click' , (e) =>{
    let classing = e.target.classList;
    if(classing.contains("descs")){
    valuese.innerHTML--;
    }
    else if(classing.contains("rsts")){
    valuese.innerHTML = '0';
    }
    
    else{
        valuese.innerHTML++;
    }
    });
    });