const fullBoard = document.querySelector(".container");

// Colorize each block
function colorize() {
    const squareArray = document.querySelectorAll(".square");

    squareArray.forEach(square => {
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "black";
        });
    });
}

// Create the board
function generateBoard(boardSize) {

    for (let i = 0; i < boardSize * boardSize; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        fullBoard.appendChild(div);
    }

    colorize();
}

// Button to generate a customizable board
const newBoardBtn = document.querySelector(".generateGrid");

newBoardBtn.addEventListener("click", () => {
    let userInput = prompt("Board Size: ");

    // Remove old board
    fullBoard.innerHTML = "";

    // Generate new board
    generateBoard(userInput);
});

// Base board
generateBoard(16);