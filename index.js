let btn = document.querySelector(".add-task");
let input = document.querySelector(".field");
let ol = document.querySelector(".ordered-list");

btn.addEventListener("click",btnAction);

function btnAction(){
    let newItem = document.createElement('li');
    newItem.classList.add("li-items");
    newItem.innerHTML = input.value;

    ol.appendChild(newItem);
    input.value = "";
 
    let deletebtn = document.createElement("button");
    deletebtn.classList.add('delBtn');
    deletebtn.innerHTML =`<i class ="fas fa-trash"></i>`;
    newItem.appendChild(deletebtn);
    
    let checkBtn = document.createElement("button");
    checkBtn.classList.add('checkBtn');
    checkBtn.innerHTML =`<i class = "fas fa-check"></i>`;
    newItem.appendChild(checkBtn);

    checkBtn.addEventListener("click",()=>{
        checkBtn.parentElement.style.textDecoration = "line-through";
    });

    deletebtn.addEventListener("click",()=>{
        deletebtn.parentElement.remove();
    })

}






