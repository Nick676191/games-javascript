const mainContainer = document.querySelector("div");

const boxContainer = document.createElement("div");
boxContainer.className = "boxes";
mainContainer.appendChild(boxContainer);

// creating 256 boxes for the 16x16 grid of divs
for (let i = 0; i < 256; i++) {
    const divGrid = document.createElement("div");
    divGrid.className = "box";
    boxContainer.appendChild(divGrid);
};

// changing the color of each box that the mouse enters into
const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
    box.addEventListener("mouseenter", (event) => {
        event.target.style.backgroundColor = "teal";
    });
});

// creating the container for the button and inserting that above the boxes container
const btnContainer = document.createElement("div");
btnContainer.className = "btnBox";
mainContainer.insertBefore(btnContainer, boxContainer);

// creating the ability for the user to customize the grid boxes
const inputBtn = document.createElement("button");
inputBtn.textContent = "Change the Grid Size";
inputBtn.className = "btn";
btnContainer.appendChild(inputBtn);