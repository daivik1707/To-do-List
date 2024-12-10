let inputs = document.querySelector("#inp");
let text = document.querySelector(".input");

function Add() {
    if (inputs.value == "") {
        alert("Please enter your task");
    } else {
        let newElement = document.createElement("li");
        newElement.innerHTML = `${inputs.value} <i class="fas fa-trash delete-icon"></i>`;
        text.appendChild(newElement);
        newElement.querySelector(".delete-icon").addEventListener("click", function () {
            newElement.remove();
        });
        inputs.value = "";
    }
}
