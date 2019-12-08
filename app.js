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
	document.querySelector(".dice").src = diceDomImg;
	document.querySelector(".dice").style.display = "block";

	console.log(d);
});
