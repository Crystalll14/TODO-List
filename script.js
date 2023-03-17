// const todoInput = document.getElementById('todo-input');
// const addButton = document.getElementById('add-button');
// const todoList = document.getElementById('todo-list');


// let todos = JSON.parse(localStorage.getItem('todos')) || [];


// renderTodoList();


// addButton.addEventListener('click', function() {
//   const todoText = todoInput.value.trim();
//   if (todoText !== '') {
//     todos.unshift(todoText); 
//     localStorage.setItem('todos', JSON.stringify(todos)); 
//     todoInput.value = ''; 
//     renderTodoList(); 
//   }
// });


// todoList.addEventListener('click', function(event) {
//   if (event.target.tagName === 'LI') {
//     const index = Array.from(todoList.children).indexOf(event.target); 
//     todos.splice(index, 1); 
//     localStorage.setItem('todos', JSON.stringify(todos)); 
//     renderTodoList(); 
//   }
// });


// todoList.addEventListener('dblclick', function(event) {
//   if (event.target.tagName === 'LI') {
//     const index = Array.from(todoList.children).indexOf(event.target); 
//     const todoText = prompt('Edit Item:', todos[index]); 
//     if (todoText !== null && todoText.trim() !== '') {
//       todos[index] = todoText.trim(); 
//       localStorage.setItem('todos', JSON.stringify(todos)); 
//       renderTodoList();
//     }
//   }
// });


// function renderTodoList() {
//   todoList.innerHTML = ''; 
//   for (let i = 0; i < todos.length; i++) {
//     const todoItem = document.createElement('li');
//     todoItem.textContent = todos[i];
//     todoList.appendChild(todoItem);
//   }
// }

const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

// Retrieve the todo list from localStorage or initialize it to an empty array
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// Display the todo list on the web page
renderTodoList();

// Listen for the add button to be clicked
addButton.addEventListener('click', function() {
  const todoText = todoInput.value.trim();
  if (todoText !== '') {
    todos.unshift(todoText); // Add new todo item to the beginning of the list
    localStorage.setItem('todos', JSON.stringify(todos)); // Store updated list in localStorage
    todoInput.value = ''; // Reset the input field
    renderTodoList(); // Update the web page
  }
});

// Listen for a delete button to be clicked and remove the corresponding item from the list
todoList.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-button')) {
    const index = parseInt(event.target.parentNode.getAttribute('data-index')); // Find index of clicked item
    todos.splice(index, 1); // Remove item from list
    localStorage.setItem('todos', JSON.stringify(todos)); // Store updated list in localStorage
    renderTodoList(); // Update the web page
  }
});

// Listen for an edit button to be clicked and edit the corresponding item
todoList.addEventListener('click', function(event) {
  if (event.target.classList.contains('edit-button')) {
    const index = parseInt(event.target.parentNode.getAttribute('data-index')); // Find index of clicked item
    const todoText = prompt('Edit Item:', todos[index]); // Display prompt to edit item text
    if (todoText !== null && todoText.trim() !== '') {
      todos[index] = todoText.trim(); // Update item text in list
      localStorage.setItem('todos', JSON.stringify(todos)); // Store updated list in localStorage
      renderTodoList(); // Update the web page
    }
  }
});

// Render the todo list on the web page
function renderTodoList() {
  todoList.innerHTML = ''; // Clear existing items
  for (let i = 0; i < todos.length; i++) {
    const todoItem = document.createElement('li');
    todoItem.textContent = todos[i];
    todoItem.setAttribute('data-index', i);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-button');
    todoItem.appendChild(deleteButton);
    todoItem.appendChild(editButton);
    todoList.appendChild(todoItem);
  }
}
