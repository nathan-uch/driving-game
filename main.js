var $car = document.querySelector('.car');

window.addEventListener('keydown', changeDirection);

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
  } else if (event.key === 'ArrowDown') {
    $car.animate(faceDown, turnSettings);
  } else if (event.key === 'ArrowLeft') {
    $car.animate(faceLeft, turnSettings);
  } else if (event.key === 'ArrowRight') {
    $car.animate(faceRight, turnSettings);
  }
}
