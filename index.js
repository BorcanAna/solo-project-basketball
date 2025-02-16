let scoreHome = document.getElementById("score-home");
let scoreGuest = document.getElementById("score-guest");
let homeScore  = 0;
let guestScore = 0;

function homePlus() {
    homeScore += 2;
    scoreHome.textContent = homeScore;
}

function homeSubstract() {
    homeScore -= 2;
    scoreHome.textContent = homeScore;
}

function guestPlus() {
    guestScore += 2;
    scoreGuest.textContent = guestScore
}

function guestSustract() {
    guestScore -= 2;
    scoreGuest.textContent = guestScore;
}

function  resetScore() {
    scoreHome.textContent = 0;
    scoreGuest.textContent = 0;
    homeScore = 0;
    guestScore = 0;
}

