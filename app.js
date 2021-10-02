const toDoInput = document.querySelector(".todo-input");
const toDoButton = document.querySelector(".todo-button");
const toDoList = document.querySelector(".todo-list");

toDoButton.addEventListener("click", addToDo);

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

