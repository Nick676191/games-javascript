// for (let i = 0; i < 9; i++) {
//     const board = document.querySelector("#board");
//     const newDiv = document.createElement("div");
//     newDiv.id = i;
//     board.appendChild(newDiv);
// };

// Psuedo-code
// going to need to create objects to store all of the player, gameboard, and other objects within the game

// start with an object that represents the gameboard. This object must contain an array that can be mutated so that we can change the display of the game
const gameboard = (function createGameboard() {
    const board = document.querySelector("#board");
    const gameboardArray = new Array(9).fill("");
    
    // populating the gameboard
    for (let i = 0; i < gameboardArray.length; i++) {
        const newDiv = document.createElement("div");
        newDiv.id = i;
        newDiv.className = "box";
        board.appendChild(newDiv);
    };

    function changeBoardOne() {
        const divs = document.querySelectorAll(".box")
        divs.forEach((div) => {
            div.addEventListener("click", (e) => {
                e.target.textContent = "X";
                const index = Number(e.target.id);
                gameboardArray[index] = "X";
            });
        });
    };

    function showGameboard() {
        console.log(gameboardArray);
    }

    return {gameboardArray, changeBoardOne, showGameboard};
})();

gameboard.changeBoardOne();

// then each player must be their own object where one player can represent x and the other represents o
// function player() {
    
// }

// the gameboard and player objects should be wrapped within an IIFE

