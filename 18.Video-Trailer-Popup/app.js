// btn
const btn = document.querySelector(".btn");
console.log(btn);
// close-icon 
const closeIcon = document.querySelector(".close-icon");
console.log(closeIcon);
// trailer-container
const trailerContainer = document.querySelector(".trailer-container");
console.log(trailerContainer);
//video
const video = document.querySelector("video");
console.log(video);

btn.addEventListener("click", ()=>{
    trailerContainer.classList.remove("active");
});

closeIcon.addEventListener("click", ()=>{
    trailerContainer.classList.add("active");
    video.pause();
    video.currentTime = 0;
});