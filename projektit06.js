var game = 0;

document.getElementById("1dplay").addEventListener("click", startgame1d)
document.getElementById("2dplay").addEventListener("click", startgame2d)

document.getElementById("stopall").addEventListener("click", stopall)

document.getElementById("1d1p").addEventListener("click", play1d1p)
document.getElementById("1d2p").addEventListener("click", play1d2p)

document.getElementById("2d1p").addEventListener("click", play2d1p)
document.getElementById("2d2p").addEventListener("click", play2d2p)

document.getElementById("score1").addEventListener("click", score1)
document.getElementById("score2").addEventListener("click", score2)

document.getElementById("score3").addEventListener("click", score3)
document.getElementById("score4").addEventListener("click", score4)

//Preloading
var face0 = new Image();
face0.src = "img/d1.jpg";
var face1 = new Image();
face1.src = "img/d2.jpg";
var face2 = new Image();
face2.src = "img/d3.jpg";
var face3 = new Image();
face3.src = "img/d4.jpg";
var face4 = new Image()
face4.src = "img/d5.jpg";
var face5 = new Image();
face5.src = "img/d6.jpg";

var score = 0;
var player1 = 0;
var player2 = 0;

var dice01 = 0;
var dice02 = 0;

var douple = 0;

function startgame1d() {
    game = 2;
    startgame();
}

function startgame2d() {
    game = 1;
    startgame();
}

function startgame() {
    if (game == 1) {
        document.getElementById("2d1p").disabled = false;
        document.getElementById("2d2p").disabled = true;
        document.getElementById("score3").disabled = false;
        document.getElementById("score4").disabled = true;
    } else if (game == 2) {
        document.getElementById("1d1p").disabled = false;
        document.getElementById("1d2p").disabled = true;
        document.getElementById("score1").disabled = false;
        document.getElementById("score2").disabled = true;
    }
    document.getElementById("1dplay").disabled = true;
    document.getElementById("2dplay").disabled = true;
}

function stopall() {
    game = 0;
    score = 0;
    player1 = 0;
    player2 = 0;
    dice01 = 0;
    dice02 = 0;
    douple = 0;

    document.getElementById("1dplay").disabled = false;
    document.getElementById("2dplay").disabled = false;
    document.getElementById("1d1p").disabled = true;
    document.getElementById("1d2p").disabled = true;
    document.getElementById("2d1p").disabled = true;
    document.getElementById("2d2p").disabled = true;
    document.getElementById("score1").disabled = true;
    document.getElementById("score2").disabled = true;
    document.getElementById("score3").disabled = true;
    document.getElementById("score4").disabled = true;
    document.getElementById("1i2p").src = eval("face0.src");
    document.getElementById("2i2p").src = eval("face0.src");
    document.getElementById("1i1p").src = eval("face0.src");
    document.getElementById("2i1p").src = eval("face0.src");
    document.getElementById("i2p").src = eval("face0.src");
    document.getElementById("i1p").src = eval("face0.src");

    updatetext01();
    updatetext02();
    var y = document.getElementById("1tscore");
    y.textContent = ("-     -" + score);
    var x = document.getElementById("2tscore");
    x.textContent = ("-     -" + score);
}

function play1d1p() {
    dice01 = getrandom();
    document.getElementById("i1p").src = eval("face" + dice01 + ".src");

    if (dice01 == 0) {
        score = 0;
        score1();
        return;
    }
    score = score + dice01 + 1;
    var y = document.getElementById("1tscore");
    y.textContent = ("-     -" + score);
}

function score1() {
    document.getElementById("1d1p").disabled = true;
    document.getElementById("score1").disabled = true;
    document.getElementById("1d2p").disabled = false;
    document.getElementById("score2").disabled = false;
    player1 = player1 + score;
    check01()
    score = 0;
    var y = document.getElementById("1tscore");
    y.textContent = ("-     -" + score);
}

function play1d2p() {
    dice01 = getrandom();
    document.getElementById("i2p").src = eval("face" + dice01 + ".src");

    if (dice01 == 0) {
        score = 0;
        score2();
        return;
    }
    score = score + dice01 + 1;
    var y = document.getElementById("1tscore");
    y.textContent = ("-     -" + score);
}

function score2() {
    document.getElementById("1d1p").disabled = false;
    document.getElementById("score1").disabled = false;
    document.getElementById("1d2p").disabled = true;
    document.getElementById("score2").disabled = true;
    player2 = player2 + score;
    check01()
    score = 0;
    var y = document.getElementById("1tscore");
    y.textContent = ("-     -" + score);
}

function play2d1p() {
    dice01 = getrandom();
    dice02 = getrandom();
    document.getElementById("1i1p").src = eval("face" + dice01 + ".src");
    document.getElementById("2i1p").src = eval("face" + dice02 + ".src");

    if (dice01 == 0 && dice02 != 0 || dice01 != 0 && dice02 == 0 || douple == 3) {
        score = 0;
        score3();
        var y = document.getElementById("2tscore");
        y.textContent = ("-     -" + score);
        return;
    }

    if (douple == 3) {
        score = 0;
        score3();
        var y = document.getElementById("2tscore");
        y.textContent = ("-     -" + score);
        return;
    }

    if (dice01 == 0 && dice02 == 0) {
        douple++;
        score = score + 25;
        var y = document.getElementById("2tscore");
        y.textContent = ("-     -" + score);
        return;
    }

    if (dice01 == dice02) {
        douple++;
        dice01 = (dice01 + dice02 + 2) * 2;
        score = score + dice01;
        var y = document.getElementById("2tscore");
        y.textContent = ("-     -" + score);
        return;
    }


    score = score + dice01 + dice02 + 2;

    var y = document.getElementById("2tscore");
    y.textContent = ("-     -" + score);
}

function score3() {
    document.getElementById("2d1p").disabled = true;
    document.getElementById("score3").disabled = true;
    document.getElementById("2d2p").disabled = false;
    document.getElementById("score4").disabled = false;
    player1 = player1 + score;
    check02()
    score = 0;
    douple = 0;
}

function play2d2p() {
    dice01 = getrandom();
    dice02 = getrandom();
    document.getElementById("1i2p").src = eval("face" + dice01 + ".src");
    document.getElementById("2i2p").src = eval("face" + dice02 + ".src");

    if (dice01 == 0 && dice02 != 0 || dice01 != 0 && dice02 == 0 || douple == 3) {
        score = 0;
        score4();
        var y = document.getElementById("2tscore");
        y.textContent = ("-     -" + score);
        return;
    }

    if (dice01 == 0 && dice02 == 0) {
        douple++;
        score = score + 25;
        var y = document.getElementById("2tscore");
        y.textContent = ("-     -" + score);
        return;
    }

    if (dice01 == dice02) {
        douple++;
        dice01 = (dice01 + dice02 + 2) * 2;
        score = score + dice01;
        var y = document.getElementById("2tscore");
        y.textContent = ("-     -" + score);
        return;
    }


    score = score + dice01 + dice02 + 2;

    var y = document.getElementById("2tscore");
    y.textContent = ("-     -" + score);
}

function score4() {
    document.getElementById("2d1p").disabled = false;
    document.getElementById("score3").disabled = false;
    document.getElementById("2d2p").disabled = true;
    document.getElementById("score4").disabled = true;
    player2 = player2 + score;
    check02()
    score = 0;
    douple = 0;
}

function getrandom() {
    return num = Math.round(Math.random() * 5);
}

function check01() {
    updatetext01()
    if (player1 >= 50) {
        window.alert("player1win")
    } else if (player2 >= 50) {
        window.alert("player2win")
    } else {
        var y = document.getElementById("1tscore");
        y.textContent = ("-     -" + score);
        return;
    }
    stopall();
}

function check02() {
    updatetext02()
    if (player1 >= 100) {
        window.alert("player1win")
    } else if (player2 >= 100) {
        window.alert("player2win")
    } else {
        var y = document.getElementById("2tscore");
        y.textContent = ("-     -" + score);
        return;
    }
    stopall();
}

function updatetext01() {
    var d = document.getElementById("1t1p");
    d.textContent = (player1);
    var x = document.getElementById("1t2p");
    x.textContent = (player2);
}

function updatetext02() {
    var d = document.getElementById("2t1p");
    d.textContent = (player1);
    var x = document.getElementById("2t2p");
    x.textContent = (player2);
}