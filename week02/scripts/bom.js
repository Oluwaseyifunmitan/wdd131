const input = document.querySelector("#favchap");

const button = document.querySelector("button");

const list = document.querySelector("#list");

const li = document.createElement("li");

const deleteButton = document.createElement("delete");

li.textContent = input.value;

deleteButton.textContent = "❌";

li.append("deleteButton");

list.append("li");


button.addEventListener("click",function(){
if(input.value.trim() !== " ") {
    console.log("input is not empty")
    input.focus();
}
})