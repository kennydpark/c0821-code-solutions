var h1 = document.querySelector('h1');

function update() {
  h1.textContent = 'Hello There';
}

var timeOut = setTimeout(update, 2000);

window.addEventListener('load', refresh);

function refresh(event) {
  return timeOut;
}
