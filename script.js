document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            // Create the list item and add task text as text node
            const li = document.createElement('li');
            const taskTextNode = document.createTextNode(taskText);
            li.appendChild(taskTextNode);

            // Create remove button
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.className = 'remove-btn';

            // Remove li when remove button is clicked
            removeBtn.onclick = function () {
                taskList.removeChild(li);
            };

            // Add button to li, and li to list
            li.appendChild(removeBtn);
            taskList.appendChild(li);

            // Clear input
            taskInput.value = '';
        } else {
            alert("Please enter a task.");
        }
    }

    // Event listener for Add Task button
    addButton.addEventListener('click', addTask);

    // Event listener for Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});