const btn = document.getElementById("btn");
let hex = document.getElementById("hexCode");


function randomColor() {
       let letters = "0123456789ABCDEF";
       let color = "#";
       for (let index = 0; index < 6; index++) {
         color = color + letters[Math.floor(Math.random() * 16)];
       }
       return color;
}
console.log(randomColor());

btn.addEventListener('click', ()=>{
    document.body.style.backgroundColor = randomColor();
    hex.innerHTML = randomColor(); 

});