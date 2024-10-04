// * Import Html Elements
let userInp = document.getElementById("taskInput");
let list = document.getElementById('taskList');
let counter = document.getElementById('taskCount');
let i = 0;

// Load tasks from localStorage on page load
let savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
savedTasks.forEach(task => {
    list.innerHTML += task;
    i++;  // Increment task index
});
counterFun();  // Update counter after loading saved tasks

// Add function
function Add() {
    let taskValue = userInp.value.trim().toUpperCase();
    if (taskValue.length > 0) {
        let taskLI = `<li class="task" id="task${i}">
        <span>${taskValue}</span> <i onclick="deleteTask('task${i}')" class="fa-solid fa-trash-can"></i>
        </li>`;

        // Save task to localStorage
        savedTasks.push(taskLI);
        localStorage.setItem('tasks', JSON.stringify(savedTasks));

        // Add task to the list
        list.innerHTML += taskLI;

        i++;  // Increment the task index
        userInp.value = "";  // Clear the input
        counterFun();  // Update task counter
    } else {
        alert('Please enter a task in the input');
    }
}

// Delete function
function deleteTask(id) {
    let task = document.getElementById(id);
    
    if (task) {  // Check if the element exists
        task.remove();  // Remove the task element

        // Update localStorage by removing the deleted task
        savedTasks = savedTasks.filter(t => !t.includes(id));
        localStorage.setItem('tasks', JSON.stringify(savedTasks));

        i--;  // Decrement task count after deletion
        counterFun();  // Update task counter after deletion
    } else {
        console.log(`Task with id ${id} not found`);  // Log an error message if the task is not found
    }
}

// Task count function
function counterFun() {
    counter.innerHTML = `(${list.getElementsByTagName('li').length})`;  // Show the number of tasks
}

// Clear all tasks
function clearTasks(){
    list.innerHTML = "";
    localStorage.removeItem('tasks');  // Clear tasks from localStorage
    i = 0;  // Reset task index
    counterFun();  // Update task counter
}
