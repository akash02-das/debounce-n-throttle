const inputElement = document.querySelector('input');
const defaultText = document.getElementById('default');
const debounceText = document.getElementById('debounce');

// Debounce Function
const debounceInput = (cb, delay) => {
  let timeout;

  return function (...args) {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

const updateDebounceText = debounceInput((text) => {
  debounceText.textContent = text;
}, 1000);

inputElement.addEventListener('input', (e) => {
  defaultText.textContent = e.target.value;
  updateDebounceText(e.target.value);
});
