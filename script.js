var form = document.getElementById("RudhavList")

var input = document.getElementById("To-Do-List")

var item = document.getElementById("Item")

form.addEventListener("submit", function(event){
    event.preventDefault()
    createItem(input.value)
})

function createItem(inputItems){
var items = `<li>${inputItems}
<button onclick = "deleteElement(this)">Delete</button> </li> `;

item.insertAdjacentHTML("beforeend", items)

input.value = "";
input.focus();
}

function deleteElement(ElementToDelete){
    ElementToDelete.parentElement.remove()
}