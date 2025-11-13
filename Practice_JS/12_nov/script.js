let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let box = document.getElementById('box');


btn1.addEventListener('click' , () => {
    box.style.backgroundColor = '#dc3545';
})

btn2.addEventListener('click' , () => {
    box.style.backgroundColor = '#3554dcff';
})

btn3.addEventListener('click' , () => {
    box.style.backgroundColor = '#c6dc35ff';
})

btn4.addEventListener('click' , () => {
    box.style.backgroundColor = '#35dc3dff';
})