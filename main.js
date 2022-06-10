var $pageContainer = document.querySelector('.container');
var $car = document.querySelector('.car');

window.addEventListener('keydown', changeDirection);
window.addEventListener('keydown', startOrStopCar);

var data = {
  direction: null,
  location: [0, 0],
  driving: false
};

var fullWidth = $pageContainer.offsetWidth;
var xAxis = null;

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

function startOrStopCar(event) {
  if (event.code === 'Space' && data.driving === false) {
    var moveIntervalId = setInterval(moveCar, 5);
    data.driving = true;
    moveCar(moveIntervalId);
  } else if (event.code === 'Space' && data.driving === true) {

    data.driving = false;
  }
}

function moveCar(intervalId) {
  xAxis = data.location[0];
  if (xAxis >= fullWidth - 101) {
    xAxis = fullWidth - 101;
    $car.style.left = xAxis + 'px';
    data.location[0] = xAxis;
    clearInterval(intervalId);
  } else if (xAxis < fullWidth) {
    xAxis++;
    $car.style.left = xAxis + 'px';
    data.location[0] = xAxis;
  }
}
