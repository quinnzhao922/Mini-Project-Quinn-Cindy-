let secretCode = null;
let colors = ["red", "blue", "yellow", "green", "orange", "purple"];
let selects = document.getElementsByTagName("select");
//The background of each select tag should reflect the color option that the user chooses
pickRandomCode();
for(let select of selects) {
    select.addEventListener('change', changeColor, false);
}
//change the background color of the select tag to match its value
function changeColor() {
    let color = this.value;
    this.style.setProperty("background-color", color);
    this.style.setProperty("color", "white");
    if(color === "yellow") {
        this.style.setProperty("color", "black");
    }
}
let submitButton = document.getElementById("submit");
submitButton.addEventListener('click', guess, false)
//reset the game
let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetGame, false);
function resetGame() {
    //pick a random code when resetting the game
    pickRandomCode();
    // You'll need to activate the submit button
    console.log(document.getElementsByClassName("mmRow").length);
            for(let i =  document.getElementsByClassName("mmRow").length - 1; i >0; i--) {
                document.getElementById("gameBoard").removeChild(document.getElementsByClassName("mmRow")[i]);
                console.log("dele");
            }
            // removeEventListener(guess);
        
}
    
    // You'll want to clear any rows from a previous game if they exist

//a function here that will pick a random 4-color code and
//store it as an array in the variable named secretCode.
function pickRandomCode() {
    //first make sure there is nothing in the secretCode array by making it an empty array
    secretCode = [];
    //push 4 random strings from the colors array into the secretCode array
    for(let i = 0; i < 4; i++) {
        secretCode.push(colors[Math.floor(6 * Math.random())]);
    }
}
//You'll need to create an event listener on the submit button for when
//the user makes a guess.
function guess(){
    console.log(document.getElementsByClassName("mmRow").length);
    let newRow = document.createElement('div');
    newRow.classList.add('mmRow')
    let guessDiv = document.createElement('div')
    guessDiv.classList.add('guess');
    let feedbackDiv = document.createElement('div')
    feedbackDiv.classList.add('feedback')
    
    for (let i = 0; i < 4; i++){
        let guessIndicator = document.createElement('div')
        let selectedColor = selects[i].value;
        guessIndicator.classList.add('indicator', selectedColor);
        guessDiv.appendChild(guessIndicator);
    }
    for (let i = 0; i < 4; i++){
        let feedbackIndicator = document.createElement('div')
        feedbackIndicator.classList.add('indicator');
        feedbackDiv.appendChild(feedbackIndicator);
    }
        newRow.appendChild(guessDiv)
        newRow.appendChild(feedbackDiv);

        let gameBoard = document.getElementById('gameBoard');
        gameBoard.appendChild(newRow);

        checkGuess(guessDiv, feedbackDiv);
        function checkGuess (guessDiv, feedbackDiv){
            let guess = [];
            let feedback = [];
            for (let i = 0; i < 4; i ++){
                guess.push(guessDiv.children[i].classList[1]);
                if (guess [i] == secretCode[i]){
                    feedback.push("black");
                }
                else {
                    feedback.push("white");
                }
                for (let i = 0; i < feedback.length; i++){
                    let feedbackIndicator = document.createElement('div')
                    feedbackDiv.children[i].classList.add(feedback[i])
                    feedbackDiv.appendChild(feedbackIndicator);
                }
            }
        }
}
//Every time the user makes a guess, you need to append a new row in the board.
//I suggest that you make a row look something like this:

/*
    <div class="mmRow">
        <div class="guess">
            <div class="color indicator"></div>
            <div class="color indicator"></div>
            <div class="color indicator"></div>
            <div class="color indicator"></div>
        </div>
        <div class="feedback">
            <div class="color indicator"></div>
            <div class="color indicator"></div>
        </div>
    </div>
*/

/* The color class name would be the color that you want the indicator to be
such as "red", "blue", "black", "white", etc. The CSS is already set up
so that the indicator divs will look like circles*/