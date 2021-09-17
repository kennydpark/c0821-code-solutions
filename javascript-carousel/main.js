var $arrowNext = document.querySelector('.arrow-right');
var $arrowPrevious = document.querySelector('.arrow-left');
var $imageElement = document.querySelector('img');
var $allCircles = document.querySelectorAll('.fa-circle');
var $circleRow = document.querySelector('.progress-dot-row');
var position = null;
var imageOneUrl = 'images/001.png';
var imageTwoUrl = 'images/004.png';
var imageThreeUrl = 'images/007.png';
var imageFourUrl = 'images/025.png';
var imageFiveUrl = 'images/039.png';
var imageUrlArray = [imageOneUrl, imageTwoUrl, imageThreeUrl, imageFourUrl, imageFiveUrl];

$arrowNext.addEventListener('click', goNext);
function goNext(event) {
  clearInterval(intervalID);
  position++;
  if (position > 5) {
    position = 1;
  }
  positionOfImage();
  intervalID = setInterval(autoSwitch, 3000);
}

$arrowPrevious.addEventListener('click', goPrevious);
function goPrevious(event) {
  clearInterval(intervalID);
  position--;
  if (position < 1) {
    position = 5;
  }
  positionOfImage();
  intervalID = setInterval(autoSwitch, 3000);
}

function positionOfImage() {
  for (var i = 0; i < $allCircles.length; i++) {
    if ((position - 1) === i) {
      $allCircles[i].setAttribute('class', 'fas fa-circle circle-one');
    } else {
      $allCircles[i].setAttribute('class', 'far fa-circle circle-one');
    }
  }
  for (var n = 0; n < imageUrlArray.length; n++) {
    if ((position - 1) === n) {
      $imageElement.setAttribute('src', imageUrlArray[n]);
    }
  }
}

$circleRow.addEventListener('click', circleClick);
function circleClick(event) {
  clearInterval(intervalID);
  for (var i = 0; i < $allCircles.length; i++) {
    if (event.target === $allCircles[i]) {
      $allCircles[i].setAttribute('class', 'fas fa-circle circle-one');
      position = (i + 1);
      positionOfImage();
    } else {
      $allCircles[i].setAttribute('class', 'far fa-circle circle-one');
    }
  }
  intervalID = setInterval(autoSwitch, 3000);
}

window.addEventListener('DOMContentLoaded', function (event) {
  position = 1;
  positionOfImage();
});

var intervalID = setInterval(autoSwitch, 3000);

function autoSwitch() {
  position++;
  for (var i = 0; i < $allCircles.length; i++) {
    if ((position - 1) === i) {
      $allCircles[i].setAttribute('class', 'fas fa-circle circle-one');
    } else {
      $allCircles[i].setAttribute('class', 'far fa-circle circle-one');
    }
  }
  for (var n = 0; n < imageUrlArray.length; n++) {
    if ((position - 1) === n) {
      $imageElement.setAttribute('src', imageUrlArray[n]);
    }
  }
  if (position > 5) {
    position = 1;
  }
  if (position === 1) {
    $imageElement.setAttribute('src', imageOneUrl);
    $allCircles[0].setAttribute('class', 'fas fa-circle circle-one');
  }
}
