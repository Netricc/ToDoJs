// * Import Html Elements
let userInp = document.getElementById("taskInput");
let list = document.getElementById('taskList');
let counter = document.getElementById('taskCount');
let i = 0;

// Add function
function Add() {
    let taskValue = userInp.value.trim().toUpperCase();
    if (taskValue.length > 0) {
        let taskLI = `<li class="task" id="task${i}">
        <span>${taskValue}</span> <i onclick="deleteTask('task${i}')" class="fa-solid fa-trash-can"></i>
        </li>`;

        i++;  // Increment the task index

        list.innerHTML += taskLI;  // Append task to the list

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


function clearTasks(){
    list.innerHTML = ""
}
