function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value;
    if (task.trim() === "") {
        alert("Please enter a task!");
        return;
    }
    var list = document.getElementById("taskList");
    var listItem = document.createElement("li");
    listItem.textContent = task;
    listItem.onclick = function() {
        this.classList.toggle("completed");
    };
    list.appendChild(listItem);
    input.value = "";
}
