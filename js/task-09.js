function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widget = document.querySelector(".widget");
const changeColorButton = widget.querySelector(".change-color");
const colorSpan = widget.querySelector(".color");

changeColorButton.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
}
