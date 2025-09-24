$(document).ready(function() {
    document.getElementById('resetPass').addEventListener('click', resetPassword);
});

function resetPassword() {

    //get values

    var userMail = document.getElementById("userMailP").value;
    var userPass = document.getElementById("passPass").value;
    var confPass = document.getElementById("passConfPass").value

    //warning spaces

    var WMail = document.getElementById("userMailW");
    var WPass = document.getElementById("userPassW");
    var WCPass = document.getElementById("userConfPassW");

    //regular expresions
    var isOKmejl = false;
    var isOKpass = false;
    var isOKpassconf = false;
    var regExUserMail = /^[a-z][\-\_\.\!\d a-z]*\@[a-z]{2,10}(\.[a-z]{2,3}){1,2}$/;
    var regExUserPass = /^([\@\?\!\$\#\d a-z A-Z]*){8,29}$/;

    //User name

    if (userMail != '' || userMail == ' ') {
        if (!regExUserMail.test(userMail)) {
            WMail.innerHTML = "Niste pravilno uneli vaš email (primer maja@gmail.com)";
            isOKmejl = false;
        } else {
            WMail.innerHTML = "";
            isOKmejl = true;

        }


    } else {
        WMail.innerHTML = "Niste uneli vaš email."
        isOKmejl = false;
    }

    if (userPass != '' || userPass == ' ') {
        if (!regExUserPass.test(userPass) && userPass.length < 9) {
            WPass.innerHTML = "Niste pravilno uneli vašu lozinku. Vaša lozinka MORA imati barem 8 karaktera i NESME sadrzati %   ^   &    *   (  )  -  +  =  '  _  \"";
            isOKpass = false;
        } else {
            WPass.innerHTML = "";
            isOKpass = true;

        }


    } else {
        WPass.innerHTML = "Niste uneli lozinku."
        isOKpass = false;
    }

    if (confPass != '' || confPass != ' ') {
        if (userPass != confPass) {
            WCPass.innerHTML = "Lozinke se ne podudaraju";
            isOKpassconf = false;
        } else {
            WCPass.innerHTML = "";
            isOKpassconf = true;

        }
    } else {
        WCPass.innerHTML = "Niste potvrdili lozinku"
        isOKpassconf = false;
    }

    if (isOKpassconf == false || isOKpass == false || isOKmejl == false) {
        return false;
    } else {
        return true;
    }
}