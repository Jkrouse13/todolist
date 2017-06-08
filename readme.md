# Todolist
Clone this repo to download starter files and add some JavaScript so that you can add todo items to the todo list.
Upon typing a task into the input field and pressing the "enter" key, a new item should be added below. You should be able to keep adding items over and over.
<br/>
# Hints
- In order to rely on the "enter" key, you'll need to use the event listener keypress. Since you are listening for a keypress, you'll need to match the enter key by code (hint, it's 13).
- Also, when you are appending each item, you should use the following template:
  `  <li><div class="view"><label>Task Text Here</label></div></li>`
- You'll also need to use the method `insertAdjacentHTML` to add each item to the list. You'll want to use the `beforeend` position so each item goes to the bottom.
