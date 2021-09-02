var tabContainer = document.querySelector('.tab-container');
var allTab = document.querySelectorAll('.tab');
var allView = document.querySelectorAll('.view');

tabContainer.addEventListener('click', tabClick);

function tabClick(event) {
  if (!event.target.matches('.tab')) {
    return;
  }
  for (var i = 0; i < allTab.length; i++) {
    if (allTab[i] === event.target) {
      allTab[i].className = 'tab active';
    } else {
      allTab[i].className = 'tab';
    }
  }

  if (!event.target.matches('.tab')) {
    return;
  }
  var dataView = event.target.getAttribute('data-view');

  for (var x = 0; x < allView.length; x++) {
    if (allView[x].getAttribute('data-view') === dataView) {
      allView[x].className = 'view';
    } else {
      allView[x].className = 'view hidden';
    }
  }
}
