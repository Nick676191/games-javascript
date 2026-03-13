for (let i = 0; i < 9; i++) {
    const board = document.querySelector("#board");
    const newDiv = document.createElement("div");
    newDiv.id = i;
    board.appendChild(newDiv);
};

// Psuedo-code
// going to need to create objects to store all of the player, gameboard, and other objects within the game

// start with an object that represents the gameboard. This object must contain an array that can be mutated so that we can change the display of the game

// then each player must be their own object where one player can represent x and the other represents o

// the gameboard and player objects should be wrapped within an IIFE

