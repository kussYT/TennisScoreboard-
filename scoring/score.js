var scoreJoueur1 = 0;
var scoreJoueur2 = 0;
var jeuxRemportesJoueur1 = 0;
var jeuxRemportesJoueur2 = 0;
var jeuxRemportesJoueur1Set2 = 0;
var jeuxRemportesJoueur2Set2 = 0;
var joueurAuService = 1; // Joueur 1 commence le service
var namePlayer1 = "";
var namePlayer2 = "";
var triggerSet = true;
var scoreTwentyGameP1 = 10;
var scoreTwentyGameP2 = 10;

document.addEventListener("keydown", function (event) {
  var currentPage = window.pageName;
  if (currentPage === "original-scoreboard") {
    if (theSetIsWin()) {
      if (theSet2IsWin()) {
      } else {
        if (event.key === "a" || event.key === "A") {
          joueur1ScoreSet2();
        } else if (event.key === "e" || event.key === "E") {
          joueur2ScoreSet2();
        } else if (event.key === "z" || event.key === "Z") {
          scoreJoueur1 = 0;
          scoreJoueur2 = 0;
          updateScoreSet1();
          updateScoreSet2();
        }
      }
    } else {
      if (event.key === "a" || event.key === "A") {
        joueur1Score();
      } else if (event.key === "e" || event.key === "E") {
        joueur2Score();
      } else if (event.key === "z" || event.key === "Z") {
        scoreJoueur1 = 0;
        scoreJoueur2 = 0;
        updateScoreSet1();
        updateScoreSet2();
      }
    }
  } else if (currentPage === "ten-points") {
    if (event.key === "a" || event.key === "A") {
      ten_points_score_p1();
    } else if (event.key === "e" || event.key === "E") {
      ten_points_score_p2();
    }
  } else if (currentPage === "zero-to-twenty") {
    console.log(scoreJoueur1, scoreJoueur2);
    scoreJoueur1 = 10;
    scoreJoueur2 = 10;
    if (event.key === "a" || event.key === "A") {
      zero_twenty_malus_p1();
    } else if (event.key === "e" || event.key === "E") {
      zero_twenty_malus_p2();
    } else if (event.key === "q" || event.key === "Q") {
      zero_twenty_bonus_p1();
    } else if (event.key === "d" || event.key === "D") {
      zero_twenty_bonus_p2();
    }
  }
});

// From Ten to Zero or Twenty Scoring

function zero_twenty_malus_p1() {
  if (zero_twenty_win()) {
  } else {
    scoreTwentyGameP1 -= 1;
    console.log(scoreTwentyGameP1);
    update_zero_twenty_points();
  }
}

function zero_twenty_malus_p2() {
  if (zero_twenty_win()) {
  } else {
    scoreTwentyGameP2 -= 1;
    console.log(scoreTwentyGameP2);
    update_zero_twenty_points();
  }
}

function zero_twenty_bonus_p1() {
  if (zero_twenty_win()) {
  } else {
    scoreTwentyGameP1 += 3;
    console.log(scoreTwentyGameP1);
    update_zero_twenty_points();
  }
}

function zero_twenty_bonus_p2() {
  if (zero_twenty_win()) {
  } else {
    scoreTwentyGameP2 += 3;
    console.log(scoreTwentyGameP2);
    update_zero_twenty_points();
  }
}

function update_zero_twenty_points() {
  document.getElementById("joueur1").innerText = scoreTwentyGameP1;
  document.getElementById("joueur2").innerText = scoreTwentyGameP2;
  zero_twenty_win();
}

function zero_twenty_win() {
  if (scoreTwentyGameP1 >= 20 || scoreTwentyGameP2 <= 0) {
    document.getElementById("joueur1").classList.add("winner");
    document.getElementById("joueur2").classList.add("loser");
    return true;
  } else if (scoreTwentyGameP2 >= 20 || scoreTwentyGameP1 <= 0) {
    document.getElementById("joueur2").classList.add("winner");
    document.getElementById("joueur1").classList.add("loser");
    return true;
  } else {
    return false;
  }
}

// Ten Points Scoring

function ten_points_score_p1() {
  if (ten_points_win()) {
  } else {
    scoreJoueur1 += 1;
    console.log(scoreJoueur1);
    update_ten_points();
  }
}

function ten_points_score_p2() {
  if (ten_points_win()) {
  } else {
    scoreJoueur2 += 1;
    console.log(scoreJoueur2);
    update_ten_points();
  }
}

function update_ten_points() {
  document.getElementById("joueur1").innerText = scoreJoueur1;
  document.getElementById("joueur2").innerText = scoreJoueur2;
  ten_points_win();
}

function ten_points_win() {
  if (
    (scoreJoueur1 >= 10 && scoreJoueur2 < 9) ||
    (scoreJoueur1 >= 10 && scoreJoueur1 - scoreJoueur2 > 1)
  ) {
    document.getElementById("joueur1").classList.add("winner");
    document.getElementById("joueur2").classList.add("loser");
    return true;
  } else if (
    (scoreJoueur2 >= 10 && scoreJoueur1 < 9) ||
    (scoreJoueur2 >= 10 && scoreJoueur2 - scoreJoueur1 > 1)
  ) {
    document.getElementById("joueur2").classList.add("winner");
    document.getElementById("joueur1").classList.add("loser");
    return true;
  } else {
    return false;
  }
}

function theSetIsWin() {
  if (
    (jeuxRemportesJoueur1 === 6 && jeuxRemportesJoueur2 < 5) ||
    (jeuxRemportesJoueur2 === 6 && jeuxRemportesJoueur1 < 5) ||
    (jeuxRemportesJoueur1 === 7 && jeuxRemportesJoueur2 <= 6) ||
    (jeuxRemportesJoueur2 === 7 && jeuxRemportesJoueur1 <= 6)
  ) {
    return true;
  }
}

function theSet2IsWin() {
  if (
    (jeuxRemportesJoueur1Set2 === 6 && jeuxRemportesJoueur2Set2 < 5) ||
    (jeuxRemportesJoueur2Set2 === 6 && jeuxRemportesJoueur1Set2 < 5) ||
    (jeuxRemportesJoueur1Set2 === 7 && jeuxRemportesJoueur2Set2 <= 6) ||
    (jeuxRemportesJoueur2Set2 === 7 && jeuxRemportesJoueur1Set2 <= 6)
  ) {
    return true;
  }
}

function changeNamePlayer1() {
  var newName = document.getElementById("inputNamePlayer1").value;
  if (newName.trim() !== "") {
    namePlayer1 = newName;
    document.getElementById("namePlayer1").innerText = newName;
  }
}

function changeNamePlayer2() {
  var newName = document.getElementById("inputNamePlayer2").value;
  if (newName.trim() !== "") {
    namePlayer2 = newName;
    document.getElementById("namePlayer2").innerText = newName;
  }
}

function P1Serves() {
  document.getElementById("serveur1").classList.add("server");
  document.getElementById("serveur2").classList.remove("server");
  joueurAuService = 1;
}
function P2Serves() {
  document.getElementById("serveur2").classList.add("server");
  document.getElementById("serveur1").classList.remove("server");
  joueurAuService = 2;
}

function changeService() {
  if (joueurAuService === 1) {
    P2Serves();
  } else if (joueurAuService === 2) {
    P1Serves();
  }
}

function joueur1Score() {
  if (scoreJoueur1 === 3 && scoreJoueur2 === 3) {
    scoreJoueur1 = 4; // Avantage joueur 1
  } else if (theSetIsWin()) {
    jeuxRemportesJoueur1++;
    finSet();
  } else if (scoreJoueur1 === 4 && scoreJoueur2 === 3) {
    scoreJoueur1 = 0; // Jeu gagné
    scoreJoueur2 = 0;
    jeuxRemportesJoueur1++;
    changeService();
  } else if (scoreJoueur1 === 3 && scoreJoueur2 === 4) {
    scoreJoueur1 = 3; // Retour a 40-40
    scoreJoueur2 = 3;
  } else if (scoreJoueur1 === 3 && scoreJoueur2 !== 3) {
    scoreJoueur1 = 0; // Gagne le jeu
    scoreJoueur2 = 0;
    jeuxRemportesJoueur1++;
    changeService();
  } else if (jeuxRemportesJoueur1 < 7 || jeuxRemportesJoueur2 < 7) {
    scoreJoueur1++;
  }
  if (triggerSet === true) {
    updateScoreSet1();
  } else {
    updateScoreSet2();
  }
}

function joueur2Score() {
  if (scoreJoueur2 === 3 && scoreJoueur1 === 3) {
    scoreJoueur2 = 4; // Avantage joueur 2
  } else if (theSetIsWin()) {
    jeuxRemportesJoueur2++;
    finSet();
  } else if (scoreJoueur2 === 4 && scoreJoueur1 === 3) {
    scoreJoueur1 = 0; // Gagne le jeu
    scoreJoueur2 = 0;
    jeuxRemportesJoueur2++;
    changeService();
  } else if (scoreJoueur2 === 3 && scoreJoueur1 === 4) {
    scoreJoueur1 = 3; // Retour a 40-40
    scoreJoueur2 = 3;
  } else if (scoreJoueur2 === 3 && scoreJoueur1 !== 3) {
    scoreJoueur1 = 0; // Gagne le jeu
    scoreJoueur2 = 0;
    jeuxRemportesJoueur2++;
    changeService();
  } else if (jeuxRemportesJoueur1 < 7 || jeuxRemportesJoueur2 < 7) {
    scoreJoueur2++;
  }
  if (triggerSet === true) {
    updateScoreSet1();
  } else {
    updateScoreSet2();
  }
}

function joueur1ScoreSet2() {
  if (scoreJoueur1 === 3 && scoreJoueur2 === 3) {
    scoreJoueur1 = 4; // Avantage joueur 1
  } else if (theSet2IsWin()) {
    jeuxRemportesJoueur1Set2++;
    finSet();
  } else if (scoreJoueur1 === 4 && scoreJoueur2 === 3) {
    scoreJoueur1 = 0; // Jeu gagné
    scoreJoueur2 = 0;
    jeuxRemportesJoueur1Set2++;
    changeService();
  } else if (scoreJoueur1 === 3 && scoreJoueur2 === 4) {
    scoreJoueur1 = 3; // Retour a 40-40
    scoreJoueur2 = 3;
  } else if (scoreJoueur1 === 3 && scoreJoueur2 !== 3) {
    scoreJoueur1 = 0; // Gagne le jeu
    scoreJoueur2 = 0;
    jeuxRemportesJoueur1Set2++;
    changeService();
  } else if (jeuxRemportesJoueur1Set2 < 7 || jeuxRemportesJoueur2Set2 < 7) {
    scoreJoueur1++;
  }
  if (triggerSet === true) {
    updateScoreSet1();
  } else {
    updateScoreSet2();
  }
}

function joueur2ScoreSet2() {
  if (scoreJoueur2 === 3 && scoreJoueur1 === 3) {
    scoreJoueur2 = 4; // Avantage joueur 2
  } else if (theSet2IsWin()) {
    jeuxRemportesJoueur1Set2++;
    finSet();
  } else if (scoreJoueur2 === 4 && scoreJoueur1 === 3) {
    scoreJoueur1 = 0; // Gagne le jeu
    scoreJoueur2 = 0;
    jeuxRemportesJoueur2Set2++;
    changeService();
  } else if (scoreJoueur2 === 3 && scoreJoueur1 === 4) {
    scoreJoueur1 = 3; // Retour a 40-40
    scoreJoueur2 = 3;
  } else if (scoreJoueur2 === 3 && scoreJoueur1 !== 3) {
    scoreJoueur1 = 0; // Gagne le jeu
    scoreJoueur2 = 0;
    jeuxRemportesJoueur2Set2++;
    changeService();
  } else if (jeuxRemportesJoueur1Set2 < 7 || jeuxRemportesJoueur2Set2 < 7) {
    scoreJoueur2++;
  }
  if (triggerSet === true) {
    updateScoreSet1();
  } else {
    updateScoreSet2();
  }
}

function updateScoreSet1() {
  if (theSetIsWin()) {
    finSet();
  }
  var scoreLabels = ["0", "15", "30", "40", "AD"];
  document.getElementById("joueur1").innerText = scoreLabels[scoreJoueur1];
  document.getElementById("joueur2").innerText = scoreLabels[scoreJoueur2];
  document.getElementById("jeuxRemportesJoueur1").innerText =
    jeuxRemportesJoueur1;
  document.getElementById("jeuxRemportesJoueur2").innerText =
    jeuxRemportesJoueur2;
}

function updateScoreSet2() {
  if (theSet2IsWin()) {
    finSet();
  }
  var scoreLabels = ["0", "15", "30", "40", "AD"];
  document.getElementById("joueur1").innerText = scoreLabels[scoreJoueur1];
  document.getElementById("joueur2").innerText = scoreLabels[scoreJoueur2];
  document.getElementById("jeuxRemportesJoueur1Set2").innerText =
    jeuxRemportesJoueur1Set2;
  document.getElementById("jeuxRemportesJoueur2Set2").innerText =
    jeuxRemportesJoueur2Set2;
}

function finSet() {
  triggerSet = false;
  document
    .getElementById("jeuxRemportesJoueur1Set2")
    .classList.remove("cacher-jeux");
  document
    .getElementById("jeuxRemportesJoueur1Set2")
    .classList.add("jeux-player1");

  if (jeuxRemportesJoueur1 === 6 || jeuxRemportesJoueur1 === 7) {
    document.getElementById("jeuxRemportesJoueur1").classList.add("winner");
    document.getElementById("jeuxRemportesJoueur2").classList.add("loser");
  } else if (jeuxRemportesJoueur2 === 6 || jeuxRemportesJoueur2 === 7) {
    document.getElementById("jeuxRemportesJoueur2").classList.add("winner");
    document.getElementById("jeuxRemportesJoueur1").classList.add("loser");
  }

  if (jeuxRemportesJoueur1Set2 === 6 || jeuxRemportesJoueur1Set2 === 7) {
    document.getElementById("jeuxRemportesJoueur1Set2").classList.add("winner");
    document.getElementById("jeuxRemportesJoueur2Set2").classList.add("loser");

    document.getElementById("joueur1").classList.add("cacher-jeux");

    document.getElementById("joueur2").classList.add("cacher-jeux");
  } else if (jeuxRemportesJoueur2Set2 === 6 || jeuxRemportesJoueur2Set2 === 7) {
    document.getElementById("jeuxRemportesJoueur2Set2").classList.add("winner");
    document.getElementById("jeuxRemportesJoueur1Set2").classList.add("loser");

    document.getElementById("joueur1").classList.add("cacher-jeux");

    document.getElementById("joueur2").classList.add("cacher-jeux");
  }
  document
    .getElementById("jeuxRemportesJoueur2Set2")
    .classList.remove("cacher-jeux");
  document
    .getElementById("jeuxRemportesJoueur2Set2")
    .classList.add("jeux-player2");

  document.getElementById("boutonsFirstSet").classList.add("cacher-jeux");
  document.getElementById("boutonsSecondSet").classList.remove("cacher-jeux");
}

function initCheckboxListener() {
  document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById("myCheckbox");
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        console.log("La case est cochée !");
        document.getElementById("full-params").classList.add("hide-everything");
      } else {
        console.log("La case est décochée !");
        document
          .getElementById("full-params")
          .classList.remove("hide-everything");
      }
    });
  });
}
initCheckboxListener();

function resetScore() {
  var currentPage = window.pageName;
  if (currentPage === "original-scoreboard") {
    scoreJoueur1 = 0;
    socreJoueur2 = 0;
    updateScoreSet1();
    updateScoreSet2();
  } else if (currentPage === "ten-points") {
    scoreJoueur1 = 0;
    socreJoueur2 = 0;
    update_ten_points();
  } else if (currentPage === "zero-to-twenty") {
    scoreTwentyGameP1 = 10;
    scoreTwentyGameP2 = 10;
    update_zero_twenty_points();
  }
}
