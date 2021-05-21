document.getElementById("entry").addEventListener("click", opencasino)

document.getElementById("1d").addEventListener("click", onedclick)
document.getElementById("2d").addEventListener("click", twodclick)
document.getElementById("3d").addEventListener("click", threedclick)

document.getElementById("lock01").addEventListener("click", lockslot01)
document.getElementById("lock02").addEventListener("click", lockslot02)
document.getElementById("lock03").addEventListener("click", lockslot03)

document.getElementById("roll").addEventListener("click", rollslot)

document.getElementById("takedatdosh").addEventListener("click", getmoney)

var money = 50;
var bets = 0;

var slotlock01 = 1;
var slotlock02 = 1;
var slotlock03 = 1;

var slot01 = 4;
var slot02 = 4;
var slot03 = 4;

var mrxiscoming = true;
var mrxtimer = 80;
var repeat = true;

var moneybackquarantee = 0;

function opencasino(event) {
    event.preventDefault();

    document.getElementById("entry").disabled = true;

    document.getElementById("1d").disabled = false;
    document.getElementById("2d").disabled = false;
    document.getElementById("3d").disabled = false;

    document.getElementById("lock01").disabled = false;
    document.getElementById("lock02").disabled = false;
    document.getElementById("lock03").disabled = false;
    document.getElementById("roll").disabled = false;

    randomize();
    radio1();
    mrx();
}

function mrx() {
    setTimeout(function () {

        if (money < 0 && mrxiscoming) {
            radio1();
            mrxiscoming = false;
        }

        if (money >= 0 && mrxiscoming == false && mrxtimer > 40) {
            mrxiscoming = true;
            mrxtimer = 60;
            setTimeout(function () {
                radio1();
            }, 350)
        } else if (money >= 0 && mrxiscoming == false) {
            mrxiscoming = true;
            mrxtimer = 60;
            var doorcloser = document.getElementById("doorcloser");
            doorcloser.play();
            setTimeout(function () {
                radio1();
            }, 350)
        }

        if (money < 0 && mrxiscoming == false) {
            mrxtimer--;


            if (mrxtimer <= 80 && mrxtimer > 40) {
                var xfar = document.getElementById("xfar");
                xfar.play();
            }

            if (mrxtimer == 40) {
                var doorbreaker = document.getElementById("doorbreaker");
                doorbreaker.play();
            }

            if (mrxtimer < 36 && mrxtimer > 0) {
                var xclose = document.getElementById("xclose");
                xclose.play();
            }

            if (mrxtimer == 0) {
                document.getElementById("entry").disabled = true;
                document.getElementById("1d").disabled = true;
                document.getElementById("2d").disabled = true;
                document.getElementById("3d").disabled = true;
                document.getElementById("lock01").disabled = true;
                document.getElementById("lock02").disabled = true;
                document.getElementById("lock03").disabled = true;
                document.getElementById("roll").disabled = true;
                document.getElementById("takedatdosh").disabled = true;
                var xover = document.getElementById("gameover");
                xover.play();
                var d = document.getElementById("cash");
                d.textContent = ("DX");
                var x = document.getElementById("bets");
                x.textContent = ("Game Over");
                return;
            }
        }

        mrx();

    }, 400)
}

function waitasec() {
    setTimeout(function () {
        return;
    }, 1000)
}

function lockslot01(event) {
    event.preventDefault();
    if (slotlock01 == 1) {
        slotlock01 = 2;
        document.getElementById("lock01").style.background = "#FAAAFF";
    } else {
        slotlock01 = 1;
        document.getElementById("lock01").style.background = "#FFFFFF";
    }
}

function lockslot02(event) {
    event.preventDefault();
    if (slotlock02 == 1) {
        slotlock02 = 2;
        document.getElementById("lock02").style.background = "#FAAAFF";
    } else {
        slotlock02 = 1;
        document.getElementById("lock02").style.background = "#FFFFFF";
    }
}

function lockslot03(event) {
    event.preventDefault();
    if (slotlock03 == 1) {
        slotlock03 = 2;
        document.getElementById("lock03").style.background = "#FAAAFF";
    } else {
        slotlock03 = 1;
        document.getElementById("lock03").style.background = "#FFFFFF";
    }
}

function rollslot(event) {
    event.preventDefault();
    document.getElementById("roll").disabled = true;
    document.getElementById("1d").disabled = true;
    document.getElementById("2d").disabled = true;
    document.getElementById("3d").disabled = true;
    randomize();
    checkslots()
    document.getElementById("takedatdosh").disabled = false;
}

function randomize() {
    if (slotlock01 == 1) {
        slot01 = Math.floor(Math.random() * 4 + 1);
    }
    if (slotlock02 == 1) {
        slot02 = Math.floor(Math.random() * 4 + 1);
    }
    if (slotlock03 == 1) {
        slot03 = Math.floor(Math.random() * 4 + 1);
    }
    updateimg();
}

function checkslots() {
    if (slot01 == 1 && slot02 == 1 && slot03 == 1) {
        bets = bets * 2;
    } else if (slot01 == 2 && slot02 == 2 && slot03 == 2) {
        bets = bets * 3;
    } else if (slot01 == 3 && slot02 == 3 && slot03 == 3) {
        bets = bets * 4;
    } else if (slot01 == 4 && slot02 == 4 && slot03 == 4) {
        bets = bets * 5;
    } else {
        bets = 0;
    }
}

function getmoney(event) {
    event.preventDefault();
    money = money + bets;
    bets = 0;
    normalize();
    updatetext();
    document.getElementById("1d").disabled = false;
    document.getElementById("2d").disabled = false;
    document.getElementById("3d").disabled = false;
}

function normalize() {
    document.getElementById("takedatdosh").disabled = true;
    document.getElementById("roll").disabled = false;
    document.getElementById("lock01").style.background = "#FFFFFF";
    slotlock01 = 1;
    document.getElementById("lock02").style.background = "#FFFFFF";
    slotlock02 = 1;
    document.getElementById("lock03").style.background = "#FFFFFF";
    slotlock03 = 1;
    randomize();
}

function onedclick(event) {
    event.preventDefault();

    money--;
    bets++;
    updatetext();

}

function twodclick(event) {
    event.preventDefault();

    money--; money--;
    bets++; bets++;
    updatetext();

}

function threedclick(event) {
    event.preventDefault();

    money--; money--; money--;
    bets++; bets++; bets++;
    updatetext();

}

function radio1() {
    var myAudio = document.getElementById("myAudio");
    if (myAudio.paused) {
        myAudio.play();
    } else {
        myAudio.pause();
    }
}

function updateimg() {
    if (slot01 == 1) {
        document.getElementById("imgslot01").src = "img/slot_banana.jpg";
    } else if (slot01 == 2) {
        document.getElementById("imgslot01").src = "img/slot_bell.jpg";
    } else if (slot01 == 3) {
        document.getElementById("imgslot01").src = "img/slot_diamond.jpg";
    } else {
        document.getElementById("imgslot01").src = "img/slot_7.jpg";
    }

    if (slot02 == 1) {
        document.getElementById("imgslot02").src = "img/slot_banana.jpg";
    } else if (slot02 == 2) {
        document.getElementById("imgslot02").src = "img/slot_bell.jpg";
    } else if (slot02 == 3) {
        document.getElementById("imgslot02").src = "img/slot_diamond.jpg";
    } else {
        document.getElementById("imgslot02").src = "img/slot_7.jpg";
    }

    if (slot03 == 1) {
        document.getElementById("imgslot03").src = "img/slot_banana.jpg";
    } else if (slot03 == 2) {
        document.getElementById("imgslot03").src = "img/slot_bell.jpg";
    } else if (slot03 == 3) {
        document.getElementById("imgslot03").src = "img/slot_diamond.jpg";
    } else {
        document.getElementById("imgslot03").src = "img/slot_7.jpg";
    }
}

function updatetext() {
    var d = document.getElementById("cash");
    d.textContent = ("$" + money);
    var x = document.getElementById("bets");
    x.textContent = ("Panos $" + bets);
}