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
  if (position === 1) {
    $imageElement.setAttribute('src', imageOneUrl);
  } else if (position === 2) {
    $imageElement.setAttribute('src', imageTwoUrl);
  } else if (position === 3) {
    $imageElement.setAttribute('src', imageThreeUrl);
  } else if (position === 4) {
    $imageElement.setAttribute('src', imageFourUrl);
  } else {
    $imageElement.setAttribute('src', imageFiveUrl);
  }
}

$circleRow.addEventListener('click', circleClick);
function circleClick(event) {
  clearInterval(intervalID);
  for (var i = 0; i < $allCircles.length; i++) {
    if (event.target === $allCircles[i]) {
      $allCircles[i].setAttribute('class', 'fas fa-circle circle-one');
    } else {
      $allCircles[i].setAttribute('class', 'far fa-circle circle-one');
    }
  }
  if (event.target === $allCircles[0]) {
    $imageElement.setAttribute('src', imageOneUrl);
    position = 1;
  } else if (event.target === $allCircles[1]) {
    $imageElement.setAttribute('src', imageTwoUrl);
    position = 2;
  } else if (event.target === $allCircles[2]) {
    $imageElement.setAttribute('src', imageThreeUrl);
    position = 3;
  } else if (event.target === $allCircles[3]) {
    $imageElement.setAttribute('src', imageFourUrl);
    position = 4;
  } else {
    $imageElement.setAttribute('src', imageFiveUrl);
    position = 5;
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
  if (position === 2) {
    $imageElement.setAttribute('src', imageTwoUrl);
  } else if (position === 3) {
    $imageElement.setAttribute('src', imageThreeUrl);
  } else if (position === 4) {
    $imageElement.setAttribute('src', imageFourUrl);
  } else if (position === 5) {
    $imageElement.setAttribute('src', imageFiveUrl);
  }
  if (position > 5) {
    position = 1;
  }
  if (position === 1) {
    $imageElement.setAttribute('src', imageOneUrl);
    $allCircles[0].setAttribute('class', 'fas fa-circle circle-one');
  }
}
