let i = 0;
let konamiCurrent = [];
const konamiCorrect = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiReverse = konamiCorrect;
konamiReverse.reverse();
document.addEventListener('keyup', konamiCode);

function konamiCode(event) {
  if(event.key == konamiCorrect[i]) {
    i++;
    konamiCurrent.push(event.key);
  } else {
    konamiCurrent = [];
    i = 0;
  }
  if(i == 10) {
    window.location.href = 'https://youtu.be/hw_pwSKDGos';
  }
}