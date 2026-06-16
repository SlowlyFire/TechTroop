const container = document.getElementById('container');
const NUM_BOXES = 30;

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

// Extension 2: check if all boxes share the same color
function checkAllSame() {
  const boxes = document.querySelectorAll('.box');
  const colors = Array.from(boxes).map(b => b.style.backgroundColor);
  const firstColor = colors[0];
  const allSame = firstColor && colors.every(c => c === firstColor);
  document.getElementById('status').textContent = allSame ? 'Nice job!' : '';
}

for (let i = 0; i < NUM_BOXES; i++) {
  const box = document.createElement('div');
  box.className = 'box';

  // Each box changes itself to a random color on mouseenter
  box.onmouseenter = function() {
    box.style.backgroundColor = getRandomColor();
    checkAllSame();
  };

  container.appendChild(box);
}