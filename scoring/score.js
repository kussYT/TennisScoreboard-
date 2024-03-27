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

document.addEventListener("keydown", function (event) {
  if (theSetIsWin()) {
    if (event.key === "a" || event.key === "A") {
      joueur1ScoreSet2(); // Appel de la fonction pour le joueur 1
    } else if (event.key === "e" || event.key === "E") {
      joueur2ScoreSet2(); // Appel de la fonction pour le joueur 2
    }
  } else {
    if (event.key === "a" || event.key === "A") {
      joueur1Score(); // Appel de la fonction pour le joueur 1
    } else if (event.key === "e" || event.key === "E") {
      joueur2Score(); // Appel de la fonction pour le joueur 2
    }
  }
});

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
  } else if (
    jeuxRemportesJoueur1Set2 < 7 ||
    jeuxRemportesJoueur2Set2 < 7
  ) {
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
  } else if (
    jeuxRemportesJoueur1Set2 < 7 ||
    jeuxRemportesJoueur2Set2 < 7
  ) {
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
  document.getElementById("joueur1").innerText =
    scoreLabels[scoreJoueur1];
  document.getElementById("joueur2").innerText =
    scoreLabels[scoreJoueur2];
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
  document.getElementById("joueur1").innerText =
    scoreLabels[scoreJoueur1];
  document.getElementById("joueur2").innerText =
    scoreLabels[scoreJoueur2];
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
    document
      .getElementById("jeuxRemportesJoueur1")
      .classList.add("winner");
    document
      .getElementById("jeuxRemportesJoueur2")
      .classList.add("loser");
  } else if (jeuxRemportesJoueur2 === 6 || jeuxRemportesJoueur2 === 7) {
    document
      .getElementById("jeuxRemportesJoueur2")
      .classList.add("winner");
    document
      .getElementById("jeuxRemportesJoueur1")
      .classList.add("loser");
  }

  if (jeuxRemportesJoueur1Set2 === 6 || jeuxRemportesJoueur1Set2 === 7) {
    document
      .getElementById("jeuxRemportesJoueur1Set2")
      .classList.add("winner");
    document
      .getElementById("jeuxRemportesJoueur2Set2")
      .classList.add("loser");
  } else if (
    jeuxRemportesJoueur2Set2 === 6 ||
    jeuxRemportesJoueur2Set2 === 7
  ) {
    document
      .getElementById("jeuxRemportesJoueur2Set2")
      .classList.add("winner");
    document
      .getElementById("jeuxRemportesJoueur1Set2")
      .classList.add("loser");
  }
  document
    .getElementById("jeuxRemportesJoueur2Set2")
    .classList.remove("cacher-jeux");
  document
    .getElementById("jeuxRemportesJoueur2Set2")
    .classList.add("jeux-player2");

  document.getElementById("boutonsFirstSet").classList.add("cacher-jeux");
  document
    .getElementById("boutonsSecondSet")
    .classList.remove("cacher-jeux");
}
