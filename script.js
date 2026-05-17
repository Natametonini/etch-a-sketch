const fullBoard = document.querySelector(".container");
const boardPixelSize = 800;


// Colorize each block
function colorizePixel() {
    const squareArray = document.querySelectorAll(".square");

    squareArray.forEach(square => {
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "black";
        });
    });
}

// Adapt the board to be a square (eg. 16x16; 32x32)
function makeBoardSquare(boardSize, numberOfSquaresRow) {
    const squareArray = document.querySelectorAll(".square");
    let squareSize = 
    boardSize / numberOfSquaresRow;

    squareArray.forEach(square => {
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
    })
}

// Create the board
function generateBoard(boardSize) {
    
    for (let i = 0; i < boardSize * boardSize; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        fullBoard.appendChild(div);
    }
    
    colorizePixel();
    makeBoardSquare(boardPixelSize, 16);
}

// Button to generate a customizable board
const newBoardBtn = document.querySelector(".generateGrid");
newBoardBtn.addEventListener("click", () => {
    let userInput = prompt("Board Size: ");

    // Remove old board
    fullBoard.innerHTML = "";

    // Generate new board
    generateBoard(userInput);

    makeBoardSquare(800, userInput);
});

// Base board
generateBoard(16);
