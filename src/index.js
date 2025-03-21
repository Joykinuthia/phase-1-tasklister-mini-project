  document.addEventListener("DOMContentLoaded", () => {
  // your code here
    const form = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks");
    
    form.addEventListener("submit", function(event){
      event.preventDefault();
  
      const taskDescription = document.getElementById("new-task-description").value.trim();
      const priority = document.getElementById("priority").value;
      
      if(taskDescription === "") {
        alert("Task cannot be blank");
        return;
      }
  
      // Create new list item
      const li = document.createElement("li");
      li.textContent = taskDescription;
  
      // Add color based on priority
      if(priority === "high") li.style.color = "red";
      else if(priority === "medium") li.style.color = "yellow";
      else li.style.color = "green";
  
      // Create edit button
      const editBtn = document.createElement("button");
      editBtn.textContent = "edit";
      editBtn.style.marginLeft = "15px";
      editBtn.addEventListener("click", () => {
        const newTask = prompt("Edit task:", li.firstChild.textContent);
        if (newTask) li.firstChild.textContent = newTask;
      });
  
      // Create delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "X";
      deleteBtn.style.marginLeft = "8px";
      deleteBtn.addEventListener("click", () => li.remove());
  
      // Append buttons to task item
      li.appendChild(editBtn);
      li.appendChild(deleteBtn);
  
      // Append task item to task list
      taskList.appendChild(li);
  
      // Clear the form input
      form.reset();
  
      // Sort tasks by priority
      sortTasks(taskList);
    });
  });
  
  // Function to sort tasks by priority
  function sortTasks(taskList) {
    const tasks = Array.from(taskList.children);
    tasks.sort((a, b) => {
      const priorityOrder = {high: 1, medium: 2, low: 3};
      const aPriority = priorityOrder[a.style.color];
      const bPriority = priorityOrder[b.style.color];
      return aPriority - bPriority;
    });
  
    // Re-append sorted tasks
    tasks.forEach(task => taskList.appendChild(task));
  }
  

