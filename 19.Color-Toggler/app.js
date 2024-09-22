let toggle = document.getElementById("switch");


toggle.addEventListener("click", () =>{
    // if (toggle.checked === true) {
    //     document.body.style.background = "black";
    // } else {
    //     document.body.style.background = "white";
    // }


    //ternary operator
    toggle.checked === true 
    ?  document.body.style.background = "black"
    :  document.body.style.background = "white";
});