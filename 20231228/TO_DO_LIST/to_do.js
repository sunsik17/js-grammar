document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const taskText = taskInput.value;
    const li = document.createElement('li');
    li.innerText = taskText;

    li.addEventListener('click', () => {
        li.classList.toggle('completed');
        saveTasks();
    });

    taskList.appendChild(li);
    taskInput.value = '';
    saveTasks();
}

function saveTasks() {
    const taskList = document.getElementById('taskList');
    const tasks = [];
    
    for (const li of taskList.children) {
        const taskText = li.innerText;
        const isCompleted = li.classList.contains('completed');
        tasks.push({ text: taskText, completed: isCompleted });
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const taskList = document.getElementById('taskList');
    const savedTasks = localStorage.getItem('tasks');

    if (savedTasks) {
        const tasks = JSON.parse(savedTasks);

        for (const task of tasks) {
            const li = document.createElement('li');
            li.innerText = task.text;

            if (task.completed) {
            li.classList.add('completed');
            }

            li.addEventListener('click', () => {
            li.classList.toggle('completed');
            saveTasks();
            });

        taskList.appendChild(li);
        }
    }
}