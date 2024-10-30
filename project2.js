// Get references to DOM elements
const todoNameInput = document.getElementById("todo-name");
const todoDescriptionInput = document.getElementById("todo-description");
const addItemButton = document.getElementById("add-item");
const todosRemaining = document.getElementById("todos-remaining");
const todosDone = document.getElementById("todos-done");

// Function to create a new to-do item
function createTodoItem(name, description) {
    const todoItem = document.createElement("div");
    todoItem.className = "todo-item";

    // Create a span for the name and description
    const todoText = document.createElement("span");
    todoText.textContent = `${name} - ${description}`;

    // Create the tick (✔️) icon
    const checkIcon = document.createElement("span");
    checkIcon.className = "icon";
    checkIcon.textContent = "✔️";
    checkIcon.onclick = () => moveToDone(todoItem);

    // Create the delete (❌) icon (without an event to delete it)
    const deleteIcon = document.createElement("span");
    deleteIcon.className = "icon";
    deleteIcon.textContent = "❌";
    
    // Append text and icons to the todo item
    todoItem.appendChild(todoText);
    todoItem.appendChild(checkIcon);
    todoItem.appendChild(deleteIcon);

    return todoItem;
}

// Function to add a new item to "To-dos Remaining"
addItemButton.addEventListener("click", () => {
    const name = todoNameInput.value.trim();
    const description = todoDescriptionInput.value.trim();

    if (name && description) {
        const newTodo = createTodoItem(name, description);
        todosRemaining.appendChild(newTodo);

        // Clear input fields
        todoNameInput.value = "";
        todoDescriptionInput.value = "";
    } else {
        alert("Please enter both name and description.");
    }
});

// Function to move item to "To-dos Done" and remove icons
function moveToDone(todoItem) {
    // Remove the tick and delete icons before moving to "To-dos Done"
    todoItem.querySelector(".icon").remove();
    todoItem.querySelector(".icon").remove();

    // Move the item to "To-dos Done"
    todosDone.appendChild(todoItem);
}
