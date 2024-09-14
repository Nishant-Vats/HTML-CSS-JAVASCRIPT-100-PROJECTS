let indicator = document.querySelector('.scroll-indicator .progress');
console.log(indicator);

let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
console.log(scrollHeight);

window.addEventListener("scroll", () =>{
       let scrollTop = document.documentElement.scrollTop;
       let scrolled = (scrollTop / scrollHeight) * 100
       indicator.style.width = `${scrolled}%`;
});