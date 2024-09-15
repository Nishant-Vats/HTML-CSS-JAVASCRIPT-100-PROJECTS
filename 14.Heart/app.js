const greayHeart = document.querySelector('.greay-heart');

const redHeart = document.querySelector('.red-heart');

greayHeart.addEventListener("click", () =>{
      redHeart.classList.add('animation');
    //   greayHeart.classList.add('fill-color');

});

redHeart.addEventListener("click", () =>{
   redHeart.classList.remove('animation');
    // greayHeart.classList.remove('fill-color');

});