const inputElement = document.querySelector('input');
const debounceText = document.getElementById('debounce');

// Debounce Function
const debounceInput = (cb, delay) => {
  let timeout;

  return function (...args) {
    clearInterval(timeout);

    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

const changeHandler = (text) => {
  debounceText.textContent = text;
};

inputElement.addEventListener(
  'input',
  debounceInput((e) => changeHandler(e.target.value), 1000)
);
