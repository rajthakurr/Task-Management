const API_URL = 'http://localhost:5000/api';
let allTasks = [];
let currentFilter = 'all';
let editingTaskId = null;

// DOM Elements
const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');
const editModal = document.getElementById('editModal');
const editForm = document.getElementById('editForm');
const closeBtn = document.querySelector('.close');
const filterButtons = document.querySelectorAll('.filter-btn');

// Event Listeners
taskForm.addEventListener('submit', addTask);
editForm.addEventListener('submit', updateTask);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
  if (e.target === editModal) closeModal();
});

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    displayTasks();
  });
});

// Fetch and display tasks
async function fetchTasks() {
  try {
    const response = await fetch(`${API_URL}/tasks`);
    if (!response.ok) throw new Error('Failed to fetch tasks');
    allTasks = await response.json();
    displayTasks();
  } catch (error) {
    console.error('Error fetching tasks:', error);
    taskList.innerHTML = '<p class="empty-state"><p>Failed to load tasks. Make sure the server is running.</p></p>';
  }
}

// Display tasks based on filter
function displayTasks() {
  let filteredTasks = allTasks;
  
  if (currentFilter !== 'all') {
    filteredTasks = allTasks.filter(task => task.status === currentFilter);
  }

  if (filteredTasks.length === 0) {
    taskList.innerHTML = '<div class="empty-state"><p>No tasks found. Create one to get started!</p></div>';
    return;
  }

  taskList.innerHTML = filteredTasks.map(task => `
    <div class="task-card ${task.status}">
      <div class="task-content">
        <div class="task-title">${escapeHtml(task.title)}</div>
        ${task.description ? `<div class="task-description">${escapeHtml(task.description)}</div>` : ''}
        <div class="task-meta">
          <span class="task-status ${task.status}">${formatStatus(task.status)}</span>
          <span class="task-date">Created: ${formatDate(task.createdAt)}</span>
        </div>
      </div>
      <div class="task-actions">
        <button class="btn btn-secondary" onclick="openEditModal('${task._id}')">Edit</button>
        <button class="btn btn-danger" onclick="deleteTask('${task._id}')">Delete</button>
      </div>
    </div>
  `).join('');
}

// Add new task
async function addTask(e) {
  e.preventDefault();
  
  const title = document.getElementById('title').value.trim();
  const description = document.getElementById('description').value.trim();
  const status = document.getElementById('status').value;

  if (!title) {
    alert('Please enter a task title');
    return;
  }

  try {
    const response = await fetch(`${API_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description, status }),
    });

    if (!response.ok) throw new Error('Failed to add task');
    
    taskForm.reset();
    fetchTasks();
  } catch (error) {
    console.error('Error adding task:', error);
    alert('Failed to add task');
  }
}

// Open edit modal
async function openEditModal(taskId) {
  const task = allTasks.find(t => t._id === taskId);
  if (!task) return;

  editingTaskId = taskId;
  document.getElementById('editTitle').value = task.title;
  document.getElementById('editDescription').value = task.description || '';
  document.getElementById('editStatus').value = task.status;
  
  editModal.classList.add('show');
}

// Close modal
function closeModal() {
  editModal.classList.remove('show');
  editingTaskId = null;
}

// Update task
async function updateTask(e) {
  e.preventDefault();

  if (!editingTaskId) return;

  const title = document.getElementById('editTitle').value.trim();
  const description = document.getElementById('editDescription').value.trim();
  const status = document.getElementById('editStatus').value;

  if (!title) {
    alert('Please enter a task title');
    return;
  }

  try {
    const response = await fetch(`${API_URL}/tasks/${editingTaskId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description, status }),
    });

    if (!response.ok) throw new Error('Failed to update task');
    
    closeModal();
    fetchTasks();
  } catch (error) {
    console.error('Error updating task:', error);
    alert('Failed to update task');
  }
}

// Delete task
async function deleteTask(taskId) {
  if (!confirm('Are you sure you want to delete this task?')) return;

  try {
    const response = await fetch(`${API_URL}/tasks/${taskId}`, {
      method: 'DELETE',
    });

    if (!response.ok) throw new Error('Failed to delete task');
    
    fetchTasks();
  } catch (error) {
    console.error('Error deleting task:', error);
    alert('Failed to delete task');
  }
}

// Utility functions
function formatStatus(status) {
  return status
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Load tasks on page load
fetchTasks();
