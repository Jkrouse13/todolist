// Add your JS here.

var todoInput = document.querySelector('.new-todo');

// Select the ordered list element with the id 'todoList' and store in a variable `todoList`.

var todoList = document.querySelector('.todo-list');



// Add a keypress event listener to `todoInput`.

todoInput.addEventListener('keypress', function(event)
{if (event.keyCode === 13){
  var todoContent = event.target.value;
  event.target.value = "";
  var newTodoLi = document.createElement('li');
  newTodoLi.textContent = todoContent;
  todoList.appendChild(newTodoLi);
  newTodoLi.innerHTML = "<li>" + "<class = 'view'>" + "<label>" + newTodoLi.textContent;
}
return event;
}
);
