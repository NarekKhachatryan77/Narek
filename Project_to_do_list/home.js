function addTask() {
    var taskInput = document.getElementById("input");
    var taskList = document.getElementById("list");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement("li");
    var taskText = document.createElement("span");
    var taskIcon = document.createElement("i")
    taskText.textContent = taskInput.value;

    li.appendChild(taskIcon)
    li.classList.add("unchecked")
    li.onclick = function () {
        toggleCheck(li);
    };
    taskIcon.classList.add("fa-circle");
    taskIcon.classList.add("fa-regular");
    taskIcon.appendChild(taskText);

    var editButton = document.createElement("i");
    editButton.classList.add("fa-regular")
    editButton.classList.add("fa-pen-to-square")
    editButton.onclick = function () {
        taskList.removeChild(li);
        taskInput.value =  taskText.textContent 
    };
    li.appendChild(editButton);


    var deleteButton = document.createElement("i");
    deleteButton.classList.add("fa-solid")
    deleteButton.classList.add("fa-trash")
    deleteButton.onclick = function () {
        taskList.removeChild(li);
    };
    li.appendChild(deleteButton);

    taskList.appendChild(li);
    taskInput.value = "";
}
function toggleCheck(listItem) {
    var circleIcon = listItem.querySelector('i');
    if (circleIcon.classList.contains("fa-circle")) {
        circleIcon.classList.remove("fa-circle");
        circleIcon.classList.add("fa-check-circle");
        listItem.classList.remove("unchecked");
        listItem.classList.add("checked");
    } else {
        circleIcon.classList.remove("fa-check-circle");
        circleIcon.classList.add("fa-circle");
        listItem.classList.remove("checked");
        listItem.classList.add("unchecked");
    }
}