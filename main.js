var $pageContainer = document.querySelector('.container');
var $car = document.querySelector('.car');

window.addEventListener('keydown', changeDirection);
window.addEventListener('keydown', startCar);

var data = {
  direction: null,
  location: [0, 0]
};

var fullWidth = $pageContainer.offsetWidth;

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

var moveIntervalId = setInterval(startCar, 5);
var xAxis = null;

function startCar() {
  xAxis = data.location[0];
  if (xAxis >= fullWidth - 101) {
    xAxis = fullWidth - 101;
    $car.style.left = xAxis + 'px';
    data.location[0] = xAxis;
    clearInterval(moveIntervalId);
  } else if (xAxis < fullWidth) {
    xAxis++;
    $car.style.left = xAxis + 'px';
    data.location[0] = xAxis;
  }
}
