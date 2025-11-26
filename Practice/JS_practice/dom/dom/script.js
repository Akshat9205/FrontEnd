const head = document.querySelector(".box")

head.style.backgroundColor = "aqua"

const para1 = document.querySelector("#para")
console.log(para1);
para1.textContent = "Hii This is an updated paragraph"


const btn1 = document.querySelector("#btn")
console.log(btn1);

btn1.addEventListener('click', () => {
    alert("Button clicked")
})

const container1 = document.querySelector(".container")

let p1 = document.createElement("p")
p1.textContent = "Hi this was added using js"
p1.style.color = "red"

container1.appendChild(p1)