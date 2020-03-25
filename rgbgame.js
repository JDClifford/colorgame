let colors = [];
let squares = document.querySelectorAll(".square");
let tryAgainMessage = document.querySelector(".tryAgain");
let h1 = document.querySelector("h1");
let newButton = document.querySelector(".new");
let colorDisplay = document.querySelector(".colorDisplay");
let easy = document.querySelector("#easy");
let hard = document.querySelector("#hard");
let isEasy = false;
let squareNumber = 6;



//assesses whether a user has selected the correct color and gives feedback or ends the game
function gamePlay() {
    for(i = 0; i < squareNumber; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", function() {
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
        })
    }
}

//changes all square colors and the banner at the top of the page to match the winning color
function changeColors(color) {
    h1.style.backgroundColor = color;
    for(i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

//Chooses one of the colors to be the winning color
function pickWinningColor() {
    let rand = Math.floor(Math.random() * colors.length);
    return colors[rand];
}

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



function freshGame() {
    tryAgainMessage.textContent = "";
    newButton.textContent = "New colors";
    colors = []
    if(isEasy === true) {
        pickAllColors(3);
    }
    else {
        pickAllColors(6);
    }
    pickedColor = pickWinningColor();
    colorDisplay.textContent = pickedColor;
    changeColors("#232323");
    gamePlay();

}


pickAllColors(6)
let pickedColor = pickWinningColor();
colorDisplay.textContent = pickedColor;
gamePlay();

easy.addEventListener("click", function() {
    isEasy = true;
    squareNumber = 3;
    freshGame();
})

hard.addEventListener("click", function() {
    isEasy = false;
    squareNumber = 6;
    freshGame();
})

//listens for clicks on the button allowing users to start a new game or restart
newButton.addEventListener("click", function() {
    freshGame();
})