// Select color input
const colorInput = document.querySelector("#colorPicker");
let colorVal = colorInput.value;

// When size is submitted by the user, call makeGrid()
document.querySelector("#sizePicker").addEventListener("submit", (e) => {
  e.preventDefault();

  let gridHeight = e.target.inputHeight.value;
  let gridWidth = e.target.inputWidth.value;

  // validating the input and making sure they are whole numbers
  gridHeight = isNaN(Number(gridHeight)) ? 0 : Math.round(Number(gridHeight));
  gridWidth = isNaN(Number(gridWidth)) ? 0 : Math.round(Number(gridWidth));

  // return if the any of the values are 0
  if (!gridHeight || !gridWidth) {
    return false;
  }

  makeGrid(gridHeight, gridWidth);
});

// event for the color input
colorInput.addEventListener("input", (e) => {
  e.preventDefault();

  colorVal = e.target.value;
});

function makeGrid(height, width) {
  // Your code goes here!
  const tableEl = document.querySelector("#pixelCanvas");
  tableEl.innerHTML = "";

  // make a loop for the rows (tr) using the height
  for (let i = 0; i < height; i++) {
    const trEl = document.createElement("tr");

    // make the loop for the columns (td) using the width
    for (let k = 0; k < width; k++) {
      const tdEl = document.createElement("td");
      tdEl.addEventListener("click", (e) => {
        tdEl.style.backgroundColor = colorVal;
      });
      trEl.appendChild(tdEl);
    }

    tableEl.appendChild(trEl);
  }
}
