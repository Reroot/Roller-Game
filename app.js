/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

scores = [0, 0];
p1 = 0;
p2 = 1;

var curPlayer = 0;
//p1 is first

//resets
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";
document.querySelector(".dice").style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", () => {
	var d = Math.floor(Math.random() * 6) + 1;
	diceDom = document.querySelector(".dice");
	diceDomImg = "dice-" + d + ".png";
	//document.querySelector(".dice").src = diceDomImg;
	diceDom.src = diceDomImg;
	document.querySelector(".dice").style.display = "block";

	if (d != 1) {
		p1 += d;
		document.getElementById("current-" + curPlayer).textContent = p1;
	} else {
		document.getElementById("current-" + curPlayer).textContent = 0;
	}

	console.log(d);
});

document.querySelector(".btn-hold").addEventListener("click", () => {
	//player turn flipped after hold is clicked
	scores[curPlayer] = p1;
	document.getElementById(".score-0") = p1;
	curPlayer = curPlayer === 0 ? 1 : 0;
});
