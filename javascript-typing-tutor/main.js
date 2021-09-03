var $eachChar = document.querySelectorAll('span');
var $dialog = document.querySelector('.dialog');
var $score = document.querySelector('.score');
var $quote = document.querySelector('.quote');

var i = 0;
$eachChar[i].className = 'next';

document.addEventListener('keydown', function (event) {
  if (event.key === $eachChar[i].textContent) {
    $eachChar[i].className = 'green';
    i++;
    points++;
    $eachChar[i].className = 'next';
  } else {
    $eachChar[i].className = 'red';
  }
  if ($eachChar[23].className === 'green') {
    $dialog.className = 'dialog dialog-on';
  }
  var percent = (points / 24) * 100;

  if ($eachChar[0].className === 'green') {
    $score.className = 'score dialog-on';
  }
  $quote.textContent = 'progress: ' + percent + '%';

  if (percent === 100) {
    $quote.textContent = '100%! Good job, now click the button down below if you\'re a psychopath';
  }
});

var points = 0;

var $button = document.querySelector('button');
$button.addEventListener('click', function (event) {
  location.reload();
});

// if ($eachChar[23].className === 'green') {
//   $quote.textContent = '100%! Good job, now click the button down below if you\'re bored enough';
// }
