document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            // Create list item
            const li = document.createElement('li');

            // Create a text node and add it to li
            const taskTextNode = document.createTextNode(taskText);
            li.appendChild(taskTextNode);

            // Create remove button
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.className = 'remove-btn';

            // On click, remove this list item
            removeBtn.onclick = function () {
                taskList.removeChild(li);
            };

            // Append button to li
            li.appendChild(removeBtn);

            // Add li to the list
            taskList.appendChild(li);

            // Clear the input
            taskInput.value = '';
        } else {
            alert("Please enter a task.");
        }
    }

    // Call addTask when button is clicked
    addButton.addEventListener('click', addTask);

    // Also call addTask on Enter key press
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});