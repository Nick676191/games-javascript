// grabbing the main container that will hold the button and boxes containers
const mainContainer = document.querySelector("div");
const boxContainer = document.createElement("div");
boxContainer.className = "boxes";
mainContainer.appendChild(boxContainer);

// function that fills up the boxes container will all of the square div elements 
function gridCreator(n=16) {
    // creating n^2 boxes for the nxn grid of divs
    for (let i = 0; i < n*n; i++) {
        const divGrid = document.createElement("div");
        const divDims = 100/n;
        divGrid.className = "box";
        divGrid.style.width = divDims + "%";
        divGrid.style.height = divDims + "%";
        divGrid.style.boxSizing = "border-box";
        divGrid.style.border = "0.25px solid black";
        divGrid.addEventListener("mouseenter", (event) => {
            event.target.style.backgroundColor = "teal"
        });
        boxContainer.appendChild(divGrid);
    };
};

// initializing the 16x16 square div grid
gridCreator();

// creating the container for the button and inserting that above the boxes container
const btnContainer = document.createElement("div");
btnContainer.className = "btnBox";
mainContainer.insertBefore(btnContainer, boxContainer);

// creating the title of the page
const head = document.createElement("h1");
head.textContent = "Etch-a-Sketch";
mainContainer.insertBefore(head, btnContainer);

// creating the ability for the user to customize the grid boxes
const inputBtn = document.createElement("button");
inputBtn.textContent = "Reset Grid";
inputBtn.className = "btn";
btnContainer.appendChild(inputBtn);

// changing the grid each time the button is pressed
inputBtn.addEventListener("click", () => {
    const userInput = prompt("What is N for the NxN grid?");
    if (Number(userInput) <= 100 && Number(userInput) > 0 && Number(userInput) % 1 === 0) {
        const boxes = document.querySelectorAll(".box");
        boxes.forEach((box) => box.remove());
        gridCreator(n=Number(userInput));
    } else {
        alert("Please input an integer number that is less than or equal to 100 but greater than 0");
    };
});