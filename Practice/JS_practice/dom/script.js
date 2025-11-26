function func()
{
    console.log("Clicked!!");
}
function dbFunc()
{
    console.log("Double Clicked!!");
    
}
const btn = document.querySelector("#btn");
const body = document.querySelector("body")



btn.addEventListener('mousemove', () => {
    const r = Math.floor(Math.random() * 257);
    const g = Math.floor(Math.random() * 257);
    const b = Math.floor(Math.random() * 257);
    console.log("Hello world ");
        body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})
