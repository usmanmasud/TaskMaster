// public/script.js
const apiUrl = 'http://localhost:5000/api/tasks';

async function createTask() {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const deadline = document.getElementById('deadline').value;
  const priority = document.getElementById('priority').value;

  const task = { title, description, deadline, priority };
  await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
  fetchTasks();
}

async function fetchTasks() {
  const response = await fetch(apiUrl);
  const tasks = await response.json();

  const tasksContainer = document.getElementById('tasks-container');
  tasksContainer.innerHTML = '';
  tasks.forEach((task) => {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    taskDiv.innerHTML = `<h3>${task.title}</h3><p>${task.description}</p><p>Priority: ${task.priority}</p><p>Deadline: ${new Date(task.deadline).toDateString()}</p>`;
    tasksContainer.appendChild(taskDiv);
  });
}

fetchTasks();
