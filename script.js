const countSpan = document.getElementById('count');
const errorMsg = document.getElementById('error');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const clearBtn = document.getElementById('clear');

let count = 0;

function updateCounter() {
  countSpan.textContent = count;
  if (count <= 0) {
    errorMsg.classList.remove('hidden');
    clearBtn.classList.add('hidden');
  } else {
    errorMsg.classList.add('hidden');
    clearBtn.classList.remove('hidden');
  }
}

incrementBtn.addEventListener('click', () => {
  count++;
  updateCounter();
});

decrementBtn.addEventListener('click', () => {
  if (count > 0) {
    count--;
    updateCounter();
  } else {
    errorMsg.classList.remove('hidden');
  }
});

clearBtn.addEventListener('click', () => {
  count = 0;
  updateCounter();
});
