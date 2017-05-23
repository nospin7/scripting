var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  setupModeButtons();
  setupSquareButtons();
  reset();
}

function setupModeButtons(){
for (var i = 0; i < modeButtons.length; i++) {
  //mode button event listeners
  modeButtons[i].addEventListener("click", function() {
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
    reset();
    });
  }
}

function setupSquareButtons(){
  for(var i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.background = colors[i];
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
      //grab color of clicked square
      var clickedColor = this.style.background;
      //compare clicked color to picked color
        if (clickedColor === pickedColor) {
          messageDisplay.textContent = "Correct!";
          changeColors(clickedColor);
          h1.style.background = clickedColor;
          resetButton.textContent = "Play Again?"

        } else {
          //wrong color
          this.style.background="#232323";
          messageDisplay.textContent = "Try Again.";
          }
        });
  }
}


function reset(){
  //generate new colors
  colors=generateRandomColors(numSquares);
  //pick new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  //change colors of squares
  for(var i=0;i<squares.length;i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  h1.style.background = "steelblue";
  }
}

resetButton.addEventListener("click", function(){
  colors=reset();
})


function generateRandomColors(num){
  //make an array
  var arr = [];
  //repeat num times
  for (var i=0; i < num; i++){
    arr.push(randomColor())
  }
  //return array
  return arr
}

function changeColors(color){
  //loop through all squares
  for(var i=0; i<squares.length;i++){
    //change each color to match given color
    squares[i].style.background = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function randomColor(){
  //pick red 0 to 255
  var r = Math.floor(Math.random() * 256)
  //pick green 0 to 255
  var g = Math.floor(Math.random() * 256)
  //pick blue 0 to 255
  var b = Math.floor(Math.random() * 256)
  
  return "rgb(" + r + ", "+ g + ", " + b + ")"
}