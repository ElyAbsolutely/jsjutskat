document.getElementById("start").addEventListener("click", start)
document.getElementById("maali").addEventListener("click", buttonpress)
document.getElementById("update01").addEventListener("click", update01)
document.getElementById("update02").addEventListener("click", update02)
document.getElementById("update03").addEventListener("click", update03)
document.getElementById("update04").addEventListener("click", update04)
document.getElementById("clicker01").addEventListener("click", clicker01)
document.getElementById("clicker02").addEventListener("click", clicker02)
document.getElementById("short").addEventListener("click", short)
document.getElementById("medium").addEventListener("click", medium)
document.getElementById("long").addEventListener("click", long)

var score = 0;
var clicker = 1;
var timer = 0;
var vastustaja = 0;
var enemyclicker = 1;
var endgamescore = 1000;

function start(event) {
    event.preventDefault();
    document.getElementById("start").disabled = true;
    document.getElementById("short").disabled = true;
    document.getElementById("medium").disabled = true;
    document.getElementById("long").disabled = true;

    document.getElementById("maali").disabled = false;
    document.getElementById("update01").disabled = false;
    document.getElementById("update02").disabled = false;
    document.getElementById("update03").disabled = false;
    document.getElementById("update04").disabled = false;
    document.getElementById("clicker01").disabled = false;
    document.getElementById("clicker02").disabled = false;
    document.getElementById("restart").disabled = false;

    enemyloop(event);
    myLoop01(event);
    clickerloop();
    document.getElementById("img").src = "img/goaltremble.jpg";
}

function short(event) {
    event.preventDefault();
    endgamescore = 1000;
}

function medium(event) {
    event.preventDefault();
    endgamescore = 2000;
}

function long(event) {
    event.preventDefault();
    endgamescore = 3000;
}

function pisteet() {
    var x = document.getElementById("points");
    x.textContent = ("Sinä " + score + " - " + vastustaja + " Vastustaja");
}

function end(event) {
    event.preventDefault();
    document.getElementById("start").disabled = true;

    document.getElementById("maali").disabled = true;
    document.getElementById("update01").disabled = true;
    document.getElementById("update02").disabled = true;
    document.getElementById("update03").disabled = true;
    document.getElementById("update04").disabled = true;
    document.getElementById("clicker01").disabled = true;
    document.getElementById("clicker02").disabled = true;
}

function clickerloop() {
    if (vastustaja >= endgamescore || score >= endgamescore) {
        return;
    }
    setTimeout(function () {
        document.getElementById("img").src = "img/goaltremble.jpg";
        clickerloop();
    }, 1000)
}

function endloopwin(event) {
    event.preventDefault();
    setTimeout(function () {
        document.getElementById("img").src = "img/planebrasil.jpg";
    }, 2000)
}

function endlooplose(event) {
    event.preventDefault();
    setTimeout(function () {
        document.getElementById("img").src = "img/noplane.jpg";
    }, 2000)
}

function enemyloop(event) {
    event.preventDefault();
    if (vastustaja >= endgamescore || score >= endgamescore) {
        return;
    }
    if (vastustaja > 10) {
        enemyclicker++;
    }
    if (vastustaja > 50) {
        enemyclicker++;
    }
    if (vastustaja > 250) {
        enemyclicker++;
    }
    setTimeout(function () {
        increaseenemy(event);
        enemyloop(event);
    }, 1000)
}

function increaseenemy(event) {
    event.preventDefault();
    vastustaja = vastustaja + enemyclicker;
    var d = document.getElementById("enemy");
    pisteet();

    if (vastustaja >= endgamescore) {
        setTimeout(function () {
            d.textContent = ("Sinä " + score + " - " + vastustaja + " Vastustaja" + "   // Hävisit pelin");
            end(event);
            endlooplose(event);
        }, 2000)
    }
}

function buttonpress(event) {
    event.preventDefault();
    if (vastustaja >= endgamescore || score >= endgamescore) {
        return;
    }
    document.getElementById("img").src = "img/goalactual.jpg";
    increase(event, clicker);
}

function increase(event, points) {
    event.preventDefault();
    score = score + points;
    var x = document.getElementById("points");
    pisteet();

    if (score >= endgamescore) {
        setTimeout(function () {
            x.textContent = ("Sinä " + score + " - " + vastustaja + " Vastustaja" + "   // Voitit pelin");
            end(event);
            endloopwin(event);
        }, 2000)
    }
}

function decrease(event, number) {

    event.preventDefault();

    score = score - number;

    pisteet();
}

function update01(event) {
    event.preventDefault();

    if (10 > score) {
        return;
    }

    decrease(event, 10);

    timer = timer + 1;
}

function update02(event) {
    event.preventDefault();

    if (18 > score) {
        return;
    }

    decrease(event, 18);

    timer = timer + 2;
}

function myLoop01(event) {
    event.preventDefault();
    if (vastustaja >= endgamescore || score >= endgamescore) {
        return;
    }
    setTimeout(function () {
        increase(event, timer);
        myLoop01(event);
    }, 1000)
}

function update03(event) {
    event.preventDefault();

    if (25 > score) {
        return;
    }

    decrease(event, 25);

    timer = timer + 3;
}

function update04(event) {
    event.preventDefault();

    if (34 > score) {
        return;
    }

    decrease(event, 34);

    timer = timer + 5;
}

function clicker01(event) {
    event.preventDefault();

    if (10 > score) {
        return;
    }

    decrease(event, 10);

    clicker++;
}

function clicker02(event) {
    event.preventDefault();

    if (25 > score) {
        return;
    }

    decrease(event, 25);

    clicker++; clicker++; clicker++;
}

