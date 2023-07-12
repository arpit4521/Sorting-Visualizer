let array = [];

for (let i = 0; i < 100; i++) {
  let randomNumber = Math.floor(Math.random() * 101);
  array.push(randomNumber);
}

function createBars() {
  const container = document.getElementById('bars-container');
  container.innerHTML = '';

  array.forEach(value => {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = value * 3 + 'px';
    container.appendChild(bar);
  });
}

createBars();

const generateArrayBtn = document.getElementById('generate-array-btn');
generateArrayBtn.addEventListener('click', createBars);
