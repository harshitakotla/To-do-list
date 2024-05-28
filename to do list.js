document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const taskInput = document.getElementById('task').value;
    const dueDate = document.getElementById('due-date').value;
    const priority = document.getElementById('priority').value;
    
    if(taskInput.trim() === '') {
        alert('Please enter a task!');
        return;
    }
    
    addTask(taskInput, dueDate, priority);
    
    document.getElementById('task-form').reset();
});

function addTask(task, dueDate, priority) {
    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');
    li.innerHTML = `
        <span class="task">${task}</span>
        <span class="due-date">Due: ${dueDate}</span>
        <span class="priority">Priority: ${priority}</span>
        <div class="actions">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;
    
    // Add the new task as the first item in the list
    if(taskList.firstChild) {
        taskList.insertBefore(li, taskList.firstChild.nextSibling); // Insert after the form
    } else {
        taskList.appendChild(li);
    }
    
    li.querySelector('.edit-btn').addEventListener('click', function() {
        const taskSpan = li.querySelector('.task');
        const dueDateSpan = li.querySelector('.due-date');
        const prioritySpan = li.querySelector('.priority');
        
        const newTask = prompt('Enter new task:', taskSpan.textContent);
        const newDueDate = prompt('Enter new due date:', dueDateSpan.textContent.substring(5));
        const newPriority = prompt('Enter new priority:', prioritySpan.textContent.substring(10));
        
        if(newTask && newDueDate && newPriority) {
            taskSpan.textContent = newTask;
            dueDateSpan.textContent = `Due: ${newDueDate}`;
            prioritySpan.textContent = `Priority: ${newPriority}`;
        }
    });
    
    li.querySelector('.delete-btn').addEventListener('click', function() {
        taskList.removeChild(li);
    });
}
