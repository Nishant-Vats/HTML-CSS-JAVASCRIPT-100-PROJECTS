

const cursor = document.querySelector(".cursor");

//Event Listener
document.addEventListener("mousemove", function (event){
    // event.pageX ---> across
     // event.pageY---> up and down
     console.log(event);
    moveCursor(event.pageX, event.pageY);
});
//function
const moveCursor = function (pageX, pageY){
   cursor.style.left = pageX + "px";
   cursor.style.top = pageY + "Px";
}