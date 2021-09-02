var taskList = document.querySelector('.task-list');

taskList.addEventListener('click', function (event) {
  console.log('event.target:', event.target, 'event.target.tagName:', event.target.tagName);
  var targetEl = event.target;
  if (event.target.tagName === 'BUTTON') {
    var closestElement = targetEl.closest('.task-list-item');
    console.log('closest .task-list-item:', closestElement);
    closestElement.remove();
  }
});
