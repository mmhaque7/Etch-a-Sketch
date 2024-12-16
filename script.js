const container = document.querySelector(".container");

for (let row = 0; row < 16; row++) {
  const rowDiv = document.createElement("div");
  rowDiv.classList.add("row");
  container.appendChild(rowDiv);

  for (let col = 0; col < 16; col++) {
    const square = document.createElement("div");
    square.classList.add("square");
    rowDiv.appendChild(square);
  }
}
const squares = document.querySelectorAll(".square");
let previousSquares = [];

squares.forEach((square) => {
  square.addEventListener("mouseover", () => {
    const randomColor = getRandomColor();
    square.style.background = randomColor;

    previousSquares.push(square);
    square.style.background = randomColor;
  });
});

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

const btnReset = document.querySelector(".btn-reset");
btnReset.addEventListener("click", () => {
  previousSquares.forEach((square) => {
    square.style.background = "#ccc";
  });
  previousSquares = [];
});
