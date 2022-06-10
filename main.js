var $car = document.querySelector('.car');
var $pageContainer = document.querySelector('.container');

window.addEventListener('keydown', changeDirection);
window.addEventListener('keydown', startOrStopCar);

var data = {
  direction: null,
  location: [0, 0],
  driving: false
};

var fullHeight = $pageContainer.offsetHeight;
var fullWidth = $pageContainer.offsetWidth;
var moveIntervalId = null;
var xAxis = null;
var yAxis = null;

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
    moveIntervalId = setInterval(moveCar, 1);
    data.driving = true;
    moveCar(moveIntervalId);
  } else if (event.code === 'Space' && data.driving === true) {
    clearInterval(moveIntervalId);
    data.location[0] = xAxis;
    data.driving = false;
  }
}

function moveCar(intervalId) {
  xAxis = data.location[0];
  yAxis = data.location[1];

  if (xAxis >= fullWidth - 101 && data.direction === 'right') {
    xAxis = fullWidth - 101;
    $car.style.left = xAxis + 'px';
    data.location[0] = xAxis;
    clearInterval(intervalId);
  } else if (xAxis <= 1 && data.direction === 'left') {
    xAxis = 1;
    $car.style.left = xAxis + 'px';
    data.location[0] = xAxis;
    clearInterval(intervalId);
  } else if (yAxis >= fullHeight - 101 && data.direction === 'down') {
    yAxis = fullHeight - 101;
    $car.style.top = yAxis + 'px';
    data.location[1] = yAxis;
    clearInterval(intervalId);
  } else if (yAxis <= 1 && data.direction === 'up') {
    yAxis = 1;
    $car.style.top = yAxis + 'px';
    data.location[1] = yAxis;
    clearInterval(intervalId);
  } else if (data.direction === 'up' && yAxis < fullHeight) {
    yAxis--;
    $car.style.top = yAxis + 'px';
    data.location[1] = yAxis;
  } else if (data.direction === 'down' && yAxis < fullHeight) {
    yAxis++;
    $car.style.top = yAxis + 'px';
    data.location[1] = yAxis;
  } else if (data.direction === 'right' && xAxis < fullWidth) {
    xAxis++;
    $car.style.left = xAxis + 'px';
    data.location[0] = xAxis;
  } else if (data.direction === 'left' && xAxis < fullWidth) {
    xAxis--;
    $car.style.left = xAxis + 'px';
    data.location[0] = xAxis;
  }
}
