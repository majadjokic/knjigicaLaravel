$(document).ready(function() {
    document.getElementById('signupS').addEventListener('click', signUpCheck);
});

function signUpCheck() {


    //get values
    var firstName = document.getElementById("firstNameS").value;
    var lastName = document.getElementById("lastNameS").value;
    var userName = document.getElementById("userNameS").value;
    var userMail = document.getElementById("userMailS").value;
    var userPass = document.getElementById("userPassS").value;
    var userPassConf = document.getElementById("userPassConfS").value;

    //warning spaces
    var WFirst = document.getElementById("userFirstNameSW");
    var WLast = document.getElementById("userLastNameSW");
    var WName = document.getElementById("userNameSW");
    var WMail = document.getElementById("userMailSW");
    var WPass = document.getElementById("userPassSW");
    var WPassConf = document.getElementById("userPassConfSW");

    //regular expresions
    var isOKime = false;
    var isOKprezime = false;
    var isOKuser = false;
    var isOKmejl = false;
    var isOKpass = false;
    var isOKpassconf = false;
    var regExFirstName = /^([A-ZĐĆČŽŠ][a-zđćčšž]{1,19}\-{0,1}){1,2}$/;
    var regExLastName = /^([A-ZĐĆČŽŠ][a-zđćčšž]{1,19}\-{0,1}){1,2}$/;
    var regExUserName = /^([\_\d a-z A-Z]*){1,29}$/;
    var regExUserMail = /^[a-z][\-\_\.\!\d a-z]*\@[a-z]{2,10}(\.[a-z]{2,3}){1,2}$/;
    var regExUserPass = /^([\@\?\!\$\#\d a-z A-Z]*){8,29}$/;

    //User name
    if (firstName != '' || firstName == '') {
        if (!regExFirstName.test(firstName)) {
            WFirst.innerHTML = "Niste pravilno uneli vaše ime. Budite sigurni da je početno slovo veliko, a da su sva ostala mala slova i ako imate dva imena da ih razdvojite - (primer Ana-Marija).";
            isOKime = false;
        } else {
            WFirst.innerHTML = "";
            isOKime = true;

        }
    }
    if (lastName != '' || lastName == '') {
        if (!regExLastName.test(lastName)) {
            WLast.innerHTML = "Niste pravilno uneli vaše prezime. Budite sigurni da je početno slovo veliko, a da su sva ostala mala slova i ako imate dva prezimena da ih razdvojite - (primer Perić-Lazić).";
            isOKprezime = false;
        } else {
            WLast.innerHTML = "";
            isOKprezime = true;

        }
    }
    if (userName != '' || userName == ' ') {
        if (!regExUserName.test(userName)) {
            WName.innerHTML = "Niste pravilno uneli vaše korisničko ime. Budite sigurni da nema razmaka ili specijalnih karaktera kao što su !    @   #   $   %   ^   &    *   (  )  -  +  =  '  \"";
            isOKuser = false;
        } else {
            WName.innerHTML = "";
            isOKuser = true;

        }


    } else {
        WName.innerHTML = "niste uneli vaše korisničko ime."
        isOKuser = false;
    }

    if (userMail != '' || userMail == ' ') {
        if (!regExUserMail.test(userMail)) {
            WMail.innerHTML = "Niste pravilno uneli vaš email (primer maja@gmail.com)";
            isOKmejl = false;
        } else {
            WMail.innerHTML = "";
            isOKmejl = true;

        }


    } else {
        WMail.innerHTML = "Niste uneli vaš email"
        isOKmejl = false;
    }

    if (userPass != '' || userPass == ' ') {
        if (!regExUserPass.test(userPass)) {
            WPass.innerHTML = "Niste pravilno uneli vašu lozinku. Vaša lozinka MORA imati barem 8 karaktera i NESME sadrzati %   ^   &    *   (  )  -  +  =  '  _  \"";
            isOKpass = false;
        } else {
            WPass.innerHTML = "";
            isOKpass = true;

        }


    } else {
        WPass.innerHTML = "Niste uneli lozinku"
        isOKpass = false;
    }

    if (userPassConf != '' || userPassConf == ' ') {
        if (userPass != userPassConf) {
            WPassConf.innerHTML = "Lozinke se ne podudaraju.";
            isOKpassconf = false;
        } else {
            WPassConf.innerHTML = "";
            isOKpassconf = true;

        }


    } else {
        WPassConf.innerHTML = "Niste potvrdili lozinku"
        isOKpassconf = false;
    }


    if (isOKime == false || isOKprezime == false || isOKuser == false || isOKmejl == false || isOKpass == false || isOKpassconf == false) {
        return false;
    } else {
        return true;
    }

}