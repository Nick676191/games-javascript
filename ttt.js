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
        newDiv.id = "div" + i;
        newDiv.className = "box";
        board.appendChild(newDiv);
    };

    function changeBoardOne() { 
        document.querySelectorAll(".box").forEach((div) => {
            div.addEventListener("click", (e) => {
                if (!e.target.classList.contains("filled")) {
                    e.target.textContent = "X";
                    e.target.classList.add("filled");
                    const index = Number(e.target.id);
                    gameboardArray[index] = "X";
                } else {
                    alert("Pick a box that hasn't been filled")
                };
            });
        });
    };

    function changeBoardRand() {
        function genRand(array) {
            const num = Math.floor(Math.random() * array.length);
            if (gameboardArray[num] === "") {
                return num
            } else {
                return genRand(gameboardArray);
            };
        };

        const index = genRand(gameboardArray);
        const divLookup = "#div" + index;
        const div = document.querySelector(divLookup);
        div.textContent = "O";
        div.classList.add("filled");
        gameboardArray[index] = "O";
    };

    function showGameboard() {
        console.log(gameboardArray);
    }

    return {gameboardArray, changeBoardOne, changeBoardRand, showGameboard};
})();

gameboard.changeBoardOne();

// then each player must be their own object where one player can represent x and the other represents o
// function player() {
    
// }

// the gameboard and player objects should be wrapped within an IIFE

