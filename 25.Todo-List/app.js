
document.addEventListener("DOMContentLoaded", ()=>{
    let button = document.querySelector("button");
    let input = document.querySelector("input");
    let list = document.querySelector(".list");

    button.addEventListener("click", ()=>{
         if (input.value.trim() !== "") {
            //new list added
            let newList = document.createElement("li");
            let span = document.createElement("span");
            span.innerText = input.value;
            newList.appendChild(span);

            //delete btn
            let DeleteButton = document.createElement("span");
            DeleteButton.innerHTML = `<i class = "fa-solid fa-trash"></i>`;
            DeleteButton.className = "delete-btn";
            DeleteButton.addEventListener("click", ()=>{
                list.removeChild(newList);
            });

            newList.appendChild(DeleteButton);
            list.appendChild(newList);
            input.value = "";
        } 
    });


});