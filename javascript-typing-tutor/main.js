var $eachChar = document.querySelectorAll('span');
var i = 0;
$eachChar[i].className = 'next';

document.addEventListener('keydown', function (event) {
  if (event.key === $eachChar[i].innerHTML) {
    $eachChar[i].className = 'green';
    i++;
    $eachChar[i].className = 'next';
  } else {
    $eachChar[i].className = 'red';
  }
});
