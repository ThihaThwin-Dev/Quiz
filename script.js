var result;
function start() {
    document.getElementById("startbtn").setAttribute("class", "btnstart inactiveStart");
    document.getElementById("startbtn").disabled = true;
    document.getElementById("stopbtn").disabled = false;
    document.getElementById("stopbtn").setAttribute("class", "btnstop activeStop");
    quiz();
    chooseAnswer();
}
function stop() {
    document.getElementById("startbtn").setAttribute("class", "btnstart activeStart");
    document.getElementById("startbtn").disabled = false;
    document.getElementById("stopbtn").disabled = true;
    document.getElementById("stopbtn").setAttribute("class", "btnstop inactiveStop");
    document.getElementById("timeplayed").innerText = "";
    scoreHistory();

}
function quiz() {
    var num1 = Math.floor(Math.random() * 100);
    var num2 = Math.floor(Math.random() * 100);
    var operator = Math.round(Math.random() * 3);
    switch (operator) {
        case 0:
            var x = num1 + "*" + num2;
            result = num1 * num2;
            break;
        case 1:
            var x = num1 + "+" + num2;
            result = num1 + num2;
            break;
        case 2:
            var x = num1 + "-" + num2;
            result = num1 - num2;
            break;
        case 3:
            var x = num1 + "/" + num2;
            result = num1 / num2;
            result = Math.round(result * 100) / 100;
            break;
    }
    document.getElementById("randomNo").innerText = x;
    chooseAnswer();
}
function chooseAnswer() {
    var operator = Math.round(Math.random() * 2);
    switch (operator) {
        case 0:
            document.getElementById("firstcell").innerText = result;
            document.getElementById("secondcell").innerText = result + Math.round(Math.random() * 100);
            document.getElementById("thirdcell").innerText = result + Math.round(Math.random() * 50);
            break;
        case 1:
            document.getElementById("firstcell").innerText = result + Math.round(Math.random() * 100);
            document.getElementById("secondcell").innerText = result;
            document.getElementById("thirdcell").innerText = result + Math.round(Math.random() * 50);
            break;
        case 2:
            document.getElementById("firstcell").innerText = result + Math.round(Math.random() * 50);
            document.getElementById("secondcell").innerText = result + Math.round(Math.random() * 100);
            document.getElementById("thirdcell").innerText = result;
            break;
    }
}
function answerPress(cellbtn) {
    if (cellbtn.innerText == result) {
        var scorepoint = document.getElementById("scoreBoard").innerText;
        var finalscore = +scorepoint + 10;
        document.getElementById("scoreBoard").innerText = finalscore;
    }
    else {
        var scorepoint = document.getElementById("scoreBoard").innerText;
        var finalscore = +scorepoint - 10;
        document.getElementById("scoreBoard").innerText = finalscore;
    }
    timePlayed();
    quiz();
}
function scoreHistory() {
    var highScore = (document.getElementById("scoreBoard").innerText);
    document.getElementById("history").innerHTML += "Your Score is " + highScore + "<br>";
    document.getElementById("scoreBoard").innerHTML = "";
}
function resetAll() {
    document.getElementById("startbtn").disabled = false;
    document.getElementById("stopbtn").disabled = true;
    document.getElementById("scoreBoard").innerText = "";
    document.getElementById("timeplayed").innerText = "";
    document.getElementById("history").innerHTML = "";
    document.getElementById("firstcell").innerText = "";
    document.getElementById("secondcell").innerText = "";
    document.getElementById("thirdcell").innerText = "";
    document.getElementById("randomNo").innerText = "";
}
function timePlayed() {
    var count = document.getElementById("timeplayed").innerText;
    var finalcount = +count + 1;
    console.log(count);
    document.getElementById("timeplayed").innerText = finalcount;
}
