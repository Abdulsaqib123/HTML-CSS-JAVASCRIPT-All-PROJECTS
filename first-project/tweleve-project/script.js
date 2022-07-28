let form = document.querySelector('form');
let values = document.querySelector('.values');
let result1 = document.querySelector('.result1');
let result2 = document.querySelector('.result2');
let result3 = document.querySelector('.result3');
let result4 = document.querySelector('.result4');
let result5 = document.querySelector('.result5');
let result6 = document.querySelector('.result6');
let result7 = document.querySelector('.result7');
let result8 = document.querySelector('.result8');
let result9 = document.querySelector('.result9');
let error = document.querySelector('.error');

form.onsubmit = function(e){
e.preventDefault();
if(values.value == ''){
    error.style.display = 'block';
}
else if(values.value == '1'){
    console.log('one');
    result1.style.display = 'block';
    result2.style.display = 'none';
    result3.style.display = 'none';
    result4.style.display = 'none';
    result5.style.display = 'none';
    result6.style.display = 'none';
    result7.style.display = 'none';
    result8.style.display = 'none';
    result9.style.display = 'none';
    error.style.display = 'none';
}
else if(values.value == '2'){
    console.log('two');
    result1.style.display = 'block';
    result2.style.display = 'block';
    result3.style.display = 'none';
    result4.style.display = 'none';
    result5.style.display = 'none';
    result6.style.display = 'none';
    result7.style.display = 'none';
    result8.style.display = 'none';
    result9.style.display = 'none';
    error.style.display = 'none';
}
else if(values.value == '3'){
    console.log('two');
    result1.style.display = 'block';
    result2.style.display = 'block';
    result3.style.display = 'block';
    result4.style.display = 'none';
    result5.style.display = 'none';
    result6.style.display = 'none';
    result7.style.display = 'none';
    result8.style.display = 'none';
    result9.style.display = 'none';
    error.style.display = 'none';
}
else if(values.value == '4'){
    console.log('two');
    result1.style.display = 'block';
    result2.style.display = 'block';
    result3.style.display = 'block';
    result4.style.display = 'block';
    result5.style.display = 'none';
    result6.style.display = 'none';
    result7.style.display = 'none';
    result8.style.display = 'none';
    result9.style.display = 'none';
    error.style.display = 'none';
}
else if(values.value == '5'){
    console.log('two');
    result1.style.display = 'block';
    result2.style.display = 'block';
    result3.style.display = 'block';
    result4.style.display = 'block';
    result5.style.display = 'block';
    result6.style.display = 'none';
    result7.style.display = 'none';
    result8.style.display = 'none';
    result9.style.display = 'none';
    error.style.display = 'none';
}
else if(values.value == '6'){
    console.log('two');
    result1.style.display = 'block';
    result2.style.display = 'block';
    result3.style.display = 'block';
    result4.style.display = 'block';
    result5.style.display = 'block';
    result6.style.display = 'block';
    result7.style.display = 'none';
    result8.style.display = 'none';
    result9.style.display = 'none';
    error.style.display = 'none';
}
else if(values.value == '7'){
    console.log('two');
    result1.style.display = 'block';
    result2.style.display = 'block';
    result3.style.display = 'block';
    result4.style.display = 'block';
    result5.style.display = 'block';
    result6.style.display = 'block';
    result7.style.display = 'block';
    result8.style.display = 'none';
    result9.style.display = 'none';
    error.style.display = 'none';
}

else if(values.value == '8'){
    console.log('two');
    result1.style.display = 'block';
    result2.style.display = 'block';
    result3.style.display = 'block';
    result4.style.display = 'block';
    result5.style.display = 'block';
    result6.style.display = 'block';
    result7.style.display = 'block';
    result8.style.display = 'block';
    result9.style.display = 'none';
    error.style.display = 'none';
}

else if(values.value == '9'){
    console.log('two');
    result1.style.display = 'block';
    result2.style.display = 'block';
    result3.style.display = 'block';
    result4.style.display = 'block';
    result5.style.display = 'block';
    result6.style.display = 'block';
    result7.style.display = 'block';
    result8.style.display = 'block';
    result9.style.display = 'block';
    error.style.display = 'none';
}
else if(values.value == '0'){
    console.log('Zero');
    result1.style.display = 'none';
    result2.style.display = 'none';
    result3.style.display = 'none';
    result4.style.display = 'none';
    result5.style.display = 'none';
    result6.style.display = 'none';
    result7.style.display = 'none';
    result8.style.display = 'none';
    result9.style.display = 'none';
    error.style.display = 'block';
}

}