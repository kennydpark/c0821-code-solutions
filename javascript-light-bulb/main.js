var button = document.querySelector('.button');
var circle = document.querySelector('.circle');
var body = document.querySelector('.body');
button.addEventListener('click', click);

function click(event) {
  if (button.className === 'button button-off') {
    button.className = 'button button-on';
    circle.className = 'circle circle-on';
    body.className = 'body body-on';
  } else if (button.className === 'button button-on') {
    button.className = 'button button-off';
    circle.className = 'circle circle-off';
    body.className = 'body body-off';
  }
}
