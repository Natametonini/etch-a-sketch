// Function to create the "board"
function makeDivs(boardSize) {
    const fullBoard = document.querySelector(".container");

    for (let i = 0; i < (boardSize * boardSize); i++) {
        const div = document.createElement("div");
        fullBoard.appendChild(div);
    }
}

makeDivs(16);