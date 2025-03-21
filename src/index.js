document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");
  
  form.addEventListener("submit", function(event){
    event.preventDefault();

    const taskDescription = document.getElementById("new-task-description").value.trim();
    const priority = document.getElementById("priority").value;
    if(taskDescription==="") {
      alert("Task cannot be blank")
      return;
    }
      

// new list item
    const li = document.createElement("li");
    li.textContent = taskDescription;

    taskList.appendChild(li);

    form.reset() //to clear input field
    

//color priority
    if(priority === "high") li.style.color = "red";
    else if(priority === "medium") li.style.color = "yellow";
    else li.style.color = "green";

    sortTasks();
  })
});

//fuction for sorting tasks by priority
function sortTasks() {
  const tasks = Array.from(taskList.children);
  tasks.sort((a,b) => {
    const priorityOrder = {high:1, medium:2, low:3};
    const aPriority = priorityOrder[a.style.color];
    const bPriority = priorityOrder[b.sytle.color];
    return aPriority - bPriority;
  })

  tasks.forEach(task => taskList.appendChild(task));

}
  
// delete button
    const deleteBtn = document.getElementById("button");
    deleteBtn.textContent = "X";
    deleteBtn.style.marginLeft = "8px";
    deleteBtn.add.addEventListener("click", () => li.remove());


// edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "edit"
    editBtn.style.marginLeft = "15px";
    editBtn.addEventListener("click", () => { 
    const newTask = prompt("edit task:", li.firstChild.textContent);
  if(newTask) li.firstChild.textContent = newTask;
})

//appending buttons to task item
li.appendChild(editBtn);
li.appendChild(deleteBtn);


