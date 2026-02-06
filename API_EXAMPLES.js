// Example API test calls - Run these in your browser console or with curl/Postman

// 1. Get all tasks
fetch('http://localhost:5000/api/tasks')
  .then(res => res.json())
  .then(data => console.log('All tasks:', data));

// 2. Create a new task
fetch('http://localhost:5000/api/tasks', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'Sample Task',
    description: 'This is a sample task',
    status: 'pending'
  })
})
.then(res => res.json())
.then(data => console.log('Created task:', data));

// 3. Get a specific task (replace TASK_ID with actual ID)
fetch('http://localhost:5000/api/tasks/TASK_ID')
  .then(res => res.json())
  .then(data => console.log('Task details:', data));

// 4. Update a task (replace TASK_ID with actual ID)
fetch('http://localhost:5000/api/tasks/TASK_ID', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'Updated Title',
    status: 'in-progress'
  })
})
.then(res => res.json())
.then(data => console.log('Updated task:', data));

// 5. Delete a task (replace TASK_ID with actual ID)
fetch('http://localhost:5000/api/tasks/TASK_ID', {
  method: 'DELETE'
})
.then(res => res.json())
.then(data => console.log('Delete response:', data));

// 6. Health check
fetch('http://localhost:5000/api/health')
  .then(res => res.json())
  .then(data => console.log('Server status:', data));
