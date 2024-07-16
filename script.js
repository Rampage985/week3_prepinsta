document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");
    const clearCompletedButton = document.getElementById("clearCompletedButton");

    addTaskButton.addEventListener("click", addTask);
    clearCompletedButton.addEventListener("click", clearCompletedTasks);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.addEventListener("change", toggleTaskCompletion);

            const span = document.createElement("span");
            span.textContent = taskText;

            li.appendChild(checkbox);
            li.appendChild(span);
            taskList.appendChild(li);
            taskInput.value = "";
        }
    }

    function toggleTaskCompletion(event) {
        const listItem = event.target.parentElement;
        listItem.classList.toggle("completed");
    }

    function clearCompletedTasks() {
        const completedTasks = document.querySelectorAll("li.completed");
        completedTasks.forEach(task => task.remove());
    }
});
