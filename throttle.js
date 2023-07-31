const defaultCountText = document.getElementById('defaultCount');
const throttleCountText = document.getElementById('throttleCount');

let defaultCount = 0;
const defaultCounter = () => {
  defaultCount++;
  defaultCountText.textContent = defaultCount;
};

// Throttle function
let throttleCount = 0;
let isScrolling = true;
const throttleCounter = () => {
  if (isScrolling) {
    throttleCount++;
    throttleCountText.textContent = throttleCount;
    isScrolling = false;
  }

  setTimeout(() => {
    isScrolling = true;
  }, 1000);
};

window.addEventListener('scroll', () => {
  defaultCounter();
  throttleCounter();
});
