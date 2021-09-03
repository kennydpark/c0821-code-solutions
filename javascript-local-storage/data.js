/* exported todos */

var todos = [];

window.addEventListener('beforeunload', beforeUnload);

function beforeUnload(event) {
  var todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
}

var previousTodosJSON = localStorage.getItem('javascript-local-storage');
if (previousTodosJSON) {
  todos = JSON.parse(previousTodosJSON);
}
