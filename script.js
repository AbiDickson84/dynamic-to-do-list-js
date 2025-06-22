// Wait for the DOM to fully load before running JavaScript
document.addEventListener('DOMContentLoaded', function () {

    // Select the Add Task button, input field, and task list
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get input and remove whitespace

        // Only continue if taskText is not empty
        if (taskText !== "") {

            // Create new li element and set its textContent to taskText
            const li = document.createElement('li');
            li.textContent = taskText;

            // Create a button for removing the task
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.className = 'remove-btn';

            // Assign onclick event to the remove button
            removeBtn.onclick = function () {
                taskList.removeChild(li);
            };

            // Append the button to the li
            li.appendChild(removeBtn);

            // Append the li to the task list
            taskList.appendChild(li);

            // Clear the input field
            taskInput.value = '';
        } else {
            alert("Please enter a task.");
        }
    }

    // Attach event listener to the Add Task button
    addButton.addEventListener('click', addTask);

    // Attach event listener to input field for Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});