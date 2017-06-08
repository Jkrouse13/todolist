// First select out input and our area that
// we'll put our todo items.
const list = document.querySelector('.todo-list');
const input = document.querySelector('.new-todo');


// This function runs on every keypress
// when the key is the enter key (13), it will add the text
function addTodo(event) {
  if (event.keyCode === 13) { // checks for enter key
    let text = input.value; // gets the value of the input (text entered)
    let html = itemTemplate(text); // sends the text to the template to build our list item

    // This will let us add HTML element to the end of the list element
    // Basically it appends it
    list.insertAdjacentHTML('beforeend', html);

    input.value = ""; // reset the input field so you can keep entering more
  }
}

// This function builds the HTML that is appended for each list item
function itemTemplate (text) {
  return '<li><div class="view"><label>' + text + '</label></div></li>';
}

// This adds an event listener for every keypress to our
// input field. It will then run the addTodo function above
input.addEventListener('keypress', addTodo);
