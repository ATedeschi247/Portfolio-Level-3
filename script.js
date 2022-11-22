let i = 0;
let j = 0;
let konamiCurrent = [];
let konamiCorrect = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiReverse = ['a', 'b', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowDown','ArrowDown', 'ArrowUp', 'ArrowUp'];
document.addEventListener('keyup', konamiCode);

function konamiCode(event) {
  if((event.key == konamiCorrect[i]) && j==0) {
    i++;
    konamiCurrent.push(event.key);
  } else if((event.key == konamiReverse[j]) && i==0) {
    j++;
    konamiCurrent.push(event.key);
  } else {
    konamiCurrent = [];
    i = 0;
    j = 0;
  }
  if(i == 10) {
    window.location.href = 'https://youtu.be/dQw4w9WgXcQ';
    i = 0;
    j = 0;
  }
  if(j == 10) {
    window.location.href = 'https://youtu.be/hw_pwSKDGos';
    i = 0;
    j = 0;
  }
}
