document.addEventListener('DOMContentLoaded',function () {
  console.log ("I am here!");
  let taskList = [];

  document.getElementById('add-task').addEventListener('click', function(event) {
    event.preventDefault();
console.log(event);
var taskValue = document.getElementById('new-task').value;

console.log("TASK VALUE" , taskValue);

if (taskValue) {
addTask(taskValue);
}

  });

  var taskNumber = 0; 
  function addTask(taskValue) {
    var li = document.createElement('li');
    li.setAttribute("id", `task-${taskNumber}`);

    // Create span for task text value
    var taskSpan = document.createElement('div');
    taskSpan.textContent = taskValue;
    taskSpan.setAttribute("id", `task-label-${taskNumber}`);
    taskSpan.classList.add("task-label");
    li.appendChild(taskSpan);

    // Create Delete Button 
    var actions = document.createElement ('div');
    actions.classList.add("task-actions");

    var deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete"
    deleteButton.type = "button";
    deleteButton.onclick = function(event) {
        li.parentNode.removeChild(li);
    }
    actions.appendChild(deleteButton);

    // Create Edit Button
    var editButton = document.createElement('button');
    editButton.textContent = "Edit"
    editButton.type = "button";
    editButton.onclick = function(event) {
        editTask(li, taskValue);
    }
    actions.appendChild(editButton);

    li.appendChild(actions);

    // Complete Task
    li.addEventListener('click', function() {
        completeTask(li);    
    });

    // Add new task to list
    document.getElementById('task-list').appendChild(li);

    taskNumber = taskNumber + 1;
  }

  function completeTask(li) {
    li.classList.toggle('completed');
  }

  function editTask(li, taskValue) {
    var label = li.querySelector(".task-label");
    var actions = li.querySelector(".task-actions");
    var editInput = document.createElement('input');
    editInput.type = "text";
    editInput.value = taskValue;
    label.appendChild(editInput);

    var cancelButton = document.createElement('button');
    cancelButton.textContent = "Cancel";
    cancelButton.type = "button";
    cancelButton.onclick = function(event) {

    }
    actions.replaceChildren(cancelButton);

    // Create Save Button
    var saveButton = document.createElement('button');
    saveButton.textContent = "Save"
    saveButton.type = "button";
    saveButton.onclick = function(event) {
        
    }
    actions.appendChild(saveButton);
  }

});