const toDoInput = document.querySelector(".todo-input");
const toDoButton = document.querySelector(".todo-button");
const toDoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

toDoButton.addEventListener("click", addToDo);
toDoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("input", filterToDo);

function addToDo(event) {
    event.preventDefault();
    // Générer au click une TODO div
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("todo");
    // Créer le li
    const newToDo = document.createElement("li");
    newToDo.innerText = toDoInput.value;
    newToDo.classList.add("todo-item");
    toDoDiv.appendChild(newToDo);
    // Bouton check
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    toDoDiv.appendChild(completedButton);
    // Bouton supprimer
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    toDoDiv.appendChild(trashButton);
    // Ajouter todo a la todo-list
    toDoList.appendChild(toDoDiv);
    toDoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;
    // Delete TODO
    if (item.classList[0] === "trash-btn") {
        const todo =  item.parentElement;
        todo.classList.add("fall")
        todo.addEventListener("transitionend", function(){
            todo.remove();
        });
    }
    // Check mark
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterToDo(event) {
    const todos = toDoList.childNodes;
    todos.forEach(function(todo) {
        switch(e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
        }
    })
}

