var $car = document.querySelector('.car');

window.addEventListener('keydown', changeDirection);
window.addEventListener('keydown', startCar);

var data = {
  direction: null,
  location: []
};

const faceUp = [
  { transform: 'rotate(-90deg)' }
];

const faceDown = [
  { transform: 'rotate(90deg)' }
];

const faceLeft = [
  { transform: 'rotate(180deg)' }
];

const faceRight = [
  { transform: 'rotate(0deg)' }
];

const turnSettings = {
  duration: 150,
  iteration: 1,
  fill: 'forwards'
};

function changeDirection(event) {
  if (event.key === 'ArrowUp') {
    $car.animate(faceUp, turnSettings);
    data.direction = 'up';
  } else if (event.key === 'ArrowDown') {
    $car.animate(faceDown, turnSettings);
    data.direction = 'down';
  } else if (event.key === 'ArrowLeft') {
    $car.animate(faceLeft, turnSettings);
    data.direction = 'left';
  } else if (event.key === 'ArrowRight') {
    $car.animate(faceRight, turnSettings);
    data.direction = 'right';
  }
}

function startCar() {
  var i = 0;
  setInterval(function () {
    i++;
    $car.style.left = i + 'px';
  }, 16);
}
