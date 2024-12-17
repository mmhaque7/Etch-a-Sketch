const container = document.querySelector(".container");
const newGridButton = document.getElementById("btn-grid");
let previousSquares = [];

newGridButton.addEventListener("click", () => {
  const gridSize = prompt(
    "Enter the number of squares per side for the new grid:"
  );
  if (gridSize) {
    const gridSizeInt = parseInt(gridSize);
    if (gridSizeInt > 0) {
      // remove existing grid
      container.innerHTML = "";

      // generate new grid
      const grid = [];
      for (let i = 0; i < gridSizeInt; i++) {
        grid[i] = [];
        for (let j = 0; j < gridSizeInt; j++) {
          const square = document.createElement("div");
          square.style.width = `${960 / gridSizeInt}px`;
          square.style.height = `${960 / gridSizeInt}px`;
          square.style.margin = "1px";
          square.style.opacity = "0.5";
          container.appendChild(square);
          grid[i][j] = square;
        }
      }

      grid.forEach((row) => {
        row.forEach((square) => {
          square.addEventListener("mouseover", () => {
            const randomColor = getRandomColor();
            previousSquares.push(square);
            square.style.background = randomColor;
          });
        });
      });
    } else {
      alert("Invalid grid size. Please enter a positive integer.");
    }
  }
});

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
const btnReset = document.getElementById("btn-reset");

if (btnReset) {
  btnReset.addEventListener("click", () => {
    console.log("Reset button clicked!");
    previousSquares.forEach((square) => {
      square.style.background = "#fff";
    });
    previousSquares = [];
  });
}
