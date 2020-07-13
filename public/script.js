var scoreUser = 0;
var scoreComputer = 0;

window.onload = function () {
var buttonStart = document.getElementById("button-start");
var welcomeNote = document.getElementById("welcome-note");
var option = document.getElementById("option");
var welcome2 = document.getElementById("welcome2");
var batu = document.getElementsByClassName("batu");
var gunting = document.getElementsByClassName("gunting");
var kertas = document.getElementsByClassName("kertas");
var arena = document.getElementById("arena");
var userSelect = document.getElementById("user-selection");
var computerSelect = document.getElementById("computer-selection");
var versus = document.getElementById("versus");
var tampilScoreUser = document.getElementById("user");
var tampilScoreComputer = document.getElementById("computer");
var compNumb = 0;


buttonStart.addEventListener("click",function(){
    welcomeNote.style.display = "none";
    option.style.opacity = "100";
    welcome2.style.opacity = "100";
    arena.style.display = "block";

});



gunting[0].addEventListener("click", function() {
    compNumb = randomChoose();
    userSelect.innerHTML = "<p>User</p> <img src='img/gunting.png' height='150' width='120'>";
    if (compNumb == 1) {
        versus.innerHTML = "<img src='img/versus.png'>";
        computerSelect.innerHTML = "<p>Computer</p><img src='img/gunting2.png' height='120' width='150'>";
        tampilScoreUser.innerHTML = "User = "+scoreUser;
        tampilScoreComputer.innerHTML = "Computer = "+scoreComputer;
    }else if (compNumb == 2) {
        versus.innerHTML = "<img src='img/versus.png'>";
        computerSelect.innerHTML = "<p>Computer</p><img src='img/kertas2.png' height='120' width='150'>";
        scoreUser += 1;
        tampilScoreUser.innerHTML = "User = "+scoreUser;
        tampilScoreComputer.innerHTML = "Computer = "+scoreComputer;
    }else if (compNumb == 3) {
        versus.innerHTML = "<img src='img/versus.png'>";
        computerSelect.innerHTML = "<p>Computer</p><img src='img/batu2.png' height='120' width='150'>";
        scoreComputer += 1;
        tampilScoreUser.innerHTML = "User = "+scoreUser;
        tampilScoreComputer.innerHTML = "Computer = "+scoreComputer;
    } 

    if (scoreUser == 5) {
        alert("User Win !!!");
        scoreUser = 0;
        scoreComputer = 0;
        tampilScoreUser.innerHTML = "User = "+scoreUser;
        tampilScoreComputer.innerHTML = "Computer = "+scoreComputer;
    }
    if (scoreComputer == 5) {
        alert("Computer Win !!!");
        scoreUser = 0;
        scoreComputer = 0;
        tampilScoreUser.innerHTML = "User = "+scoreUser;
        tampilScoreComputer.innerHTML = "Computer = "+scoreComputer;
    }
});
kertas[0].addEventListener("click", function() {
    compNumb = randomChoose();
    userSelect.innerHTML = "<p>User</p> <img src='img/kertas.png' height='150' width='120'>";
    if (compNumb == 1) {
        versus.innerHTML = "<img src='img/versus.png'>";
        computerSelect.innerHTML = "<p>Computer</p><img src='img/gunting2.png' height='120' width='150'>";
        scoreComputer += 1;
        tampilScoreUser.innerHTML = "User = "+scoreUser;
        tampilScoreComputer.innerHTML = "Computer = "+scoreComputer;
    }else if (compNumb == 2) {
        versus.innerHTML = "<img src='img/versus.png'>";
        computerSelect.innerHTML = "<p>Computer</p><img src='img/kertas2.png' height='120' width='150'>";
        tampilScoreUser.innerHTML = "User = "+scoreUser;
        tampilScoreComputer.innerHTML = "Computer = "+scoreComputer;
    }else if (compNumb == 3) {
        versus.innerHTML = "<img src='img/versus.png'>";
        computerSelect.innerHTML = "<p>Computer</p><img src='img/batu2.png' height='120' width='150'>";
        scoreUser += 1;
        tampilScoreUser.innerHTML = "User = "+scoreUser;
        tampilScoreComputer.innerHTML = "Computer = "+scoreComputer;

    } 

    if (scoreUser == 5) {

        alert("User Win !!!");
        scoreUser = 0;
        scoreComputer = 0;
        tampilScoreUser.innerHTML = "User = "+scoreUser;
        tampilScoreComputer.innerHTML = "Computer = "+scoreComputer;
    }
    if (scoreComputer == 5) {
        alert("Computer Win !!!");
        scoreUser = 0;
        scoreComputer = 0;
        tampilScoreUser.innerHTML = "User = "+scoreUser;
        tampilScoreComputer.innerHTML = "Computer = "+scoreComputer;
    }
});
batu[0].addEventListener("click", function() {
    compNumb = randomChoose();
    userSelect.innerHTML = "<p>User</p> <img src='img/batu.png' height='150' width='120'>";
    if (compNumb == 1) {
        versus.innerHTML = "<img src='img/versus.png'>";
        computerSelect.innerHTML = "<p>Computer</p><img src='img/gunting2.png' height='120' width='150'>";
        scoreUser += 1;
        tampilScoreUser.innerHTML = "User = "+scoreUser;
        tampilScoreComputer.innerHTML = "Computer = "+scoreComputer;
    }else if (compNumb == 2) {
        versus.innerHTML = "<img src='img/versus.png'>";
        computerSelect.innerHTML = "<p>Computer</p><img src='img/kertas2.png' height='120' width='150'>";
        scoreComputer += 1;
        tampilScoreUser.innerHTML = "User = "+scoreUser;
        tampilScoreComputer.innerHTML = "Computer = "+scoreComputer;
    }else if (compNumb == 3) {
        versus.innerHTML = "<img src='img/versus.png'>";
        computerSelect.innerHTML = "<p>Computer</p><img src='img/batu2.png' height='120' width='150'>";
        tampilScoreUser.innerHTML = "User = "+scoreUser;
        tampilScoreComputer.innerHTML = "Computer = "+scoreComputer;
    }

    if (scoreUser == 5) {
        alert("User Win !!!");
        scoreUser = 0;
        scoreComputer = 0;
        tampilScoreUser.innerHTML = "User = "+scoreUser;
        tampilScoreComputer.innerHTML = "Computer = "+scoreComputer;
    }
    if (scoreComputer == 5) {
        alert("Computer Win !!!");
        scoreUser = 0;
        scoreComputer = 0;
        tampilScoreUser.innerHTML = "User = "+scoreUser;
        tampilScoreComputer.innerHTML = "Computer = "+scoreComputer;
    }
});


}

// 1 untuk gunting , 2 untuk kertas, 3 untuk batu
function randomChoose() {
var rand = Math.floor(Math.random() * 3) + 1; 
return rand;
}
