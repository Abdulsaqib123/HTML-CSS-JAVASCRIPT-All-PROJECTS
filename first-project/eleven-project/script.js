
let sec = document.querySelector('.sec');
let days = document.querySelector('.day');
let hour = document.querySelector('.hour');
let Mins = document.querySelector('.Mins');

setInterval(() =>{
    let a = new Date();
    let min =  a.getSeconds();
    let day =  a.getDay();
    let hours =  a.getHours();
    let Min =  a.getMinutes();
    Mins.innerHTML = Min;
    hour.innerHTML = hours;
    days.innerHTML = day;
    sec.innerHTML = min;
},1000);
