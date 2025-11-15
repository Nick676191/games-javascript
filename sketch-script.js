const container = document.querySelector("div");

// creating 256 boxes for the 16x16 grid of divs
for (let i = 0; i < 256; i++) {
    const divGrid = document.createElement("div");
    divGrid.className = "box-" + i;
    container.appendChild(divGrid);
};