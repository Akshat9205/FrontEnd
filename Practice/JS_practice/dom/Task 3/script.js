const image = document.querySelector(".box")
const topi = document.getElementById("top")
const left = document.getElementById("left")
const right = document.getElementById("right")
const bottom = document.getElementById("bottom")
const reset = document.getElementById("reset")


topi.addEventListener('click', () => {
    image.style.transform = `translateY(-50px)`
})
left.addEventListener('click', () => {
    image.style.transform = `translateX(-50px)`
})
right.addEventListener('click', () => {
    image.style.transform = `translateX(50px)`
})
bottom.addEventListener('click', () => {
    image.style.transform = `translateY(50px)`
})

reset.addEventListener('click', () => {
    image.style.transform = "translate(0,0)"
})