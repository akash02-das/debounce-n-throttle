const buttonElement = document.getElementById('button');
const textElement = document.getElementById('text');

// Debounce Function
const debounce = (func, delay) => {
  let timeout;

  return function () {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      func();
    }, delay);
  };
};

let count = 0;
const clickHandler = () => {
  count++;
  textElement.innerText = `${count} times clicked`;
};

buttonElement.addEventListener('click', debounce(clickHandler, 500));
