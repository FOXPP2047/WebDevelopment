var gamePattern = [];
var userClickedPattern = [];

let buttonColors = ["red", "blue", "green", "yellow"];

let started = false;
let level = 0;
let bestLevel = 0;

function nextSequence() {
  userClickedPattern = [];

  level += 1;

  $("#level-title").text("Level " + level);

  let randomNumber = Math.floor((Math.random() * 4));
  let randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColor);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("." + currentColor).addClass("pressed");
  setTimeout(function () {
    $("." + currentColor).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("pass");
    if(userClickedPattern.length === gamePattern.length) {
      if(bestLevel < currentLevel + 1) {
        bestLevel = currentLevel + 1;
        $("#best-level").text("Best Level :  " + bestLevel);
      }
      setTimeout(function() {
            nextSequence();
        }, 1000);
    }
  } else {
      var audio = new Audio("sounds/wrong.mp3");
      audio.play();
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
      $("h1").text("Game Over, Press Any Key to Restart");
      startOver();
    }
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

$(".btn").click(function() {
  if(started) {
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
    //setTimeout(nextSequence, 1000);
  }
});

$(document).keypress(function() {
  if(!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
})
