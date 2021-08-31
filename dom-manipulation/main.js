var buttonClicked = 0;
var hotButton = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');

function click(event) {
  buttonClicked++;
  var temp;
  if (buttonClicked < 4) {
    temp = 'cold';
  } else if (buttonClicked < 7) {
    temp = 'cool';
  } else if (buttonClicked < 10) {
    temp = 'tepid';
  } else if (buttonClicked < 13) {
    temp = 'warm';
  } else if (buttonClicked < 16) {
    temp = 'hot';
  } else {
    temp = 'nuclear';
  }
  hotButton.className = 'hot-button ' + temp;
  clickCount.textContent = 'Clicks: ' + buttonClicked;
}

hotButton.addEventListener('click', click);
