document.getElementById("btnmuunna").addEventListener("click", muunna)

function muunna(event) {

    event.preventDefault();

    var x = document.getElementById("cf").value;
    var value01 = document.getElementById("dropdown").value;

    if (x.length == 0) {
        window.alert("Adblock detected, plz delete System64")
        return;
    }



    if (value01 == 1) {
        //to Celsius??

        x = (x - 32) / 1.8;

    } else if (value01 == 2) {
        //|| Fahrenheit??

        x = (x * 1.8) + 32;

    }


    if (document.getElementById("button01").checked == true) {

        x = x.toFixed(1);

    } else if (document.getElementById("button02").checked == true) {

        x = x.toFixed(2);

    } else if (document.getElementById("button03").checked == true) {

        x = x.toFixed(3);

    }

    var text = document.getElementById("answer");
    text.textContent = ("Vastaus = " + x);

}