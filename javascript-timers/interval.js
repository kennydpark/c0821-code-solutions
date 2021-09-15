var h1 = document.querySelector('h1');
function countDown() {
  h1.textContent--;
  if (h1.textContent < 0) {
    h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(interval);
  }
}

var interval = setInterval(countDown, 1000);
