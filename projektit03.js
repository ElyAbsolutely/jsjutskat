document.getElementById("btnlaheta").addEventListener("click", laheta)

function laheta(event) {
    event.preventDefault();

    var xid = document.getElementById("id").value;

    if (xid.length == 0) {
        window.alert("ID kenttä on tyhjä")
        return;
    } else if (xid.length < 6) {
        window.alert("ID pitää olla vähintää 6 merkkiä pitkä")
        return;
    }

    var xpassword = document.getElementById("password").value;

    if (xpassword.length == 0) {
        window.alert("Salasana kenttä on tyhjä")
        return;
    }

    var xname = document.getElementById("name").value;

    if (xname.length == 0) {
        window.alert("Nimi kenttä on tyhjä")
        return;
    }

    var xroad = document.getElementById("road").value;

    if (xroad.length == 0) {
        window.alert("Osoite kenttä on tyhjä")
        return;
    }

    var xcuntry = document.getElementById("dropdown").value;

    if (xcuntry != 1 && xcuntry != 2) {
        window.alert("Et ole valinnut maatasi")
        return;
    }

    var xmailman = document.getElementById("mailman").value;

    if (xmailman.length == 0) {
        window.alert("Postinumero kenttä on tyhjä")
        return;
    } else if (xmailman.length < 5 || xmailman.length > 5) {
        window.alert("Postinumerossa pitää olla 5 numeroa")
        return;
    } else if (isNaN(xmailman)) {
        window.alert("Postinumerossa ei saa olla kirjaimia ja tasan 5 numeroa")
        return;
    }

    var xemail = document.getElementById("email").value;

    if (xemail.length == 0) {
        window.alert("Sähköposti kenttä on tyhjä")
        return;
    }


    if (ValidateEmail(xemail) == false) {
        window.alert("Viallinen sähköposti")
        return;
    }



    if (document.getElementById("sexbutton01").checked != true && document.getElementById("sexbutton02").checked != true) {
        window.alert("Et ole mies etkä nainen, olet helikopteri")
        return;
    }

    document.body.style.backgroundImage = "url('img/brazil.png')";
    new Audio('mp3/important.mp3').play()
    window.alert("Contratulations! You´re going to brazil");
}

function ValidateEmail(mail) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
        return (true)
    } else {
        return (false)
    }
}
