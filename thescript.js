var gameOver = false;
var loseTimer;
var border = 150;

function clickHandlerFeh() {
	var scoreElem = document.getElementById("score");
	if (gameOver) {
		scoreElem.innerHTML = "Score: 0";
		gameOver = false;
		document.getElementById("status").innerHTML = "";
	} else {
		scoreElem.innerHTML = "Score: " + (Number(scoreElem.innerHTML.replace("Score: ", "")) + 1);
	}
	
	var button = document.getElementById("feh");
	button.innerHTML = "Quick, click me again!";
	var w = document.defaultView.innerWidth - button.style.width - border;
	var h = document.defaultView.innerHeight - button.style.height - border;
	var newX = (((button.style.width + border) / 2) + Math.floor(Math.random() * w)) + "px";
	var newY = (((button.style.height + border) / 2) + Math.floor(Math.random() * h)) + "px";
	button.style.top = newY;
	button.style.left = newX;
	clearTimeout(loseTimer);
	loseTimer = setTimeout(endGame, 3000);
}

function endGame() {
	gameOver = true;
	document.getElementById("status").innerHTML = "Game over!";
	document.getElementById("feh").innerHTML = "Click me to restart.";
}