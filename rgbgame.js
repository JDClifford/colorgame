let colors = [];
let squares = document.querySelectorAll(".square");
let tryAgainMessage = document.querySelector(".tryAgain");
let h1 = document.querySelector("h1");
let newButton = document.querySelector(".new");
let colorDisplay = document.querySelector(".colorDisplay");
let easy = document.querySelector("#easy");
let hard = document.querySelector("#hard");
let squareNumber = 6;
let pickedColor = "";



//Chooses 6 random RGB colors and builds them into a string
function pickAllColors(num) {
    for(i=0; i < num; i++) {
        let rgbBuilding = "rgb(" + randomRGB() + ", " + randomRGB() + ", " + randomRGB() + ")";
        colors.push(rgbBuilding);
    }
}

//Returns a random value between 0 and 255 for use in generating random RGB codes
function randomRGB() {
    return Math.floor(Math.random() * 256);
}

//Chooses one of the colors to be the winning color
function pickWinningColor() {
    let rand = Math.floor(Math.random() * colors.length);
    return colors[rand];
}

//Checks if clicked square is the winning square and display winning message
function checkIfWinner() {
    if(this.style.backgroundColor === pickedColor) {
        tryAgainMessage.textContent = "Correct";
        changeColors(pickedColor);
        newButton.textContent = "Play Again?";
    }
    else {
        this.style.backgroundColor = "#232323";
        tryAgainMessage.textContent = "Try again";
        newButton.textContent = "New Colors";
    }
}

//changes all square colors and the banner at the top of the page to match the given color
function changeColors(color) {
    h1.style.backgroundColor = color;
    for(i = 0; i < squareNumber; i++) {
        squares[i].style.backgroundColor = color;
    }
}


function newGame() {
    tryAgainMessage.textContent = "";
    newButton.textContent = "New colors";
    colors = [];
    pickAllColors(squareNumber);
    pickedColor = pickWinningColor();
    colorDisplay.textContent = pickedColor;
    changeColors("#232323");
    for(i = 0; i < squareNumber; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", checkIfWinner);
    }

}

easy.addEventListener("click", function() {
    changeColors("#232323");
    squareNumber = 3;
    easy.classList.add("selected");
    hard.classList.remove("selected");
    newGame();
})

hard.addEventListener("click", function() {
    squareNumber = 6;
    hard.classList.add("selected");
    easy.classList.remove("selected");
    newGame();
})

//listens for clicks on the button allowing users to start a new game or restart
newButton.addEventListener("click", function() {
    newGame();
})

newGame();