// Psuedo-code
// going to need to create objects to store all of the player, gameboard, and other objects within the game

// start with an object that represents the gameboard. This object must contain an array that can be mutated so that we can change the display of the game

// the gameboard and player objects should be wrapped within an IIFE
const gameboard = (function createGameboard() {
    const board = document.querySelector("#board");
    const gameboardArray = new Array(9).fill("");
    const winningSets = [
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
    ];
    
    // populating the gameboard
    for (let i = 0; i < gameboardArray.length; i++) {
        const newDiv = document.createElement("div");
        newDiv.id = "div" + i;
        newDiv.className = "box";
        board.appendChild(newDiv);
    };

    function showGameboard() {
        return gameboardArray;
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

    function userWon(element) {
        return element === "X";
    };

    function botWon(element) {
        return element === "O";
    }

    function isFilled(element) {
        return element !== "";
    }

    // found the code to filter for another array of indices in an array here
    // https://stackoverflow.com/questions/43708721/how-to-select-elements-from-an-array-based-on-the-indices-of-another-array-in-ja
    function checkGame(array) {
        let gameStatus;
        for (const indset of winningSets) {
            const boardSet = array.filter((x,i) => (indset.includes(i)));
            if (boardSet.every(userWon) || boardSet.every(botWon)) {
                gameStatus = "over";
                break;
            } else if (array.every(isFilled)) {
                gameStatus = "over";
                break;
            } else {
                gameStatus = "playing";
            };
        };
        if (gameStatus === "over") {
            return true;
        } else {
            return false;
        };
    };

    function playGame() { 
        document.querySelectorAll(".box").forEach((div) => {
            div.addEventListener("click", (e) => {
                if (checkGame(gameboardArray)) {
                    alert("Game Over. Please restart");
                } else if (!e.target.classList.contains("filled")) {
                    e.target.textContent = "X";
                    e.target.classList.add("filled");
                    const index = e.target.id;
                    const indexNum = Number(index[index.length-1]);
                    gameboardArray[indexNum] = "X";
                    // giving the bot a turn after the user has made their play
                    if (!gameboardArray.every(isFilled) && !checkGame(gameboardArray)) {
                        setTimeout(changeBoardRand, 2000);
                    };
                } else {
                    alert("Pick a box that hasn't been filled")
                };
            });
        });
    };

    return {playGame, changeBoardRand, showGameboard, checkGame};
})();

gameboard.playGame();