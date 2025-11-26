const box = document.querySelector("#box")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")

btn1.addEventListener('click', () => {
    box.classList.remove("bg-light", "bg-color1", "bg-color2", "bg-color3", "bg-color4")
    box.classList.add("bg-color1")    
})
btn2.addEventListener('click', () => {
    box.classList.remove("bg-light", "bg-color1", "bg-color2", "bg-color3", "bg-color4")
    box.classList.add("bg-color2")    
})
btn3.addEventListener('click', () => {
    box.classList.remove("bg-light", "bg-color1", "bg-color2", "bg-color3", "bg-color4")
    box.classList.add("bg-color3")    
})
btn4.addEventListener('click', () => {
    box.classList.remove("bg-light", "bg-color1", "bg-color2", "bg-color3", "bg-color4")
    box.classList.add("bg-color4")    
})