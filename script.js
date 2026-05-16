// Function to create the "board"
function makeDivs(boardSize) {
    const fullBoard = document.querySelector(".container");

    for (let i = 0; i < (boardSize * boardSize); i++) {
        const div = document.createElement("div");
        div.classList = "square";
        fullBoard.appendChild(div);
    }
}

makeDivs(16);

const squareArray = document.querySelectorAll(".square")
squareArray.forEach(square => {
    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "black";
    })
})