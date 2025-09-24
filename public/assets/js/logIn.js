$(document).ready(function() {
    document.getElementById('loginL').addEventListener('click', logInCheck);
});

function logInCheck() {


    //get values

    var userMail = document.getElementById("userMailL").value;
    var userPass = document.getElementById("userPassL").value;

    //warning spaces

    var WMail = document.getElementById("userMailLW");
    var WPass = document.getElementById("userPassLW");

    //regular expresions
    var isOKM = false;
    var isOKP = false;
    var regExUserMail = /^[a-z A-Z][\-\_\.\!\d a-z A-Z]*\@[a-z]{2,10}(\.[a-z]{2,3}){1,2}$/;
    var regExUserPass = /^([\@\?\!\$\#\d a-z A-Z]*){8,29}$/;

    //User name

    if (userMail != '' || userMail == ' ') {
        if (!regExUserMail.test(userMail)) {
            WMail.innerHTML = "Niste pravilno uneli vaš email (primer maja@gmail.com)";
            isOKM = false;
        } else {
            WMail.innerHTML = "";
            isOKM = true;

        }


    } else {
        WMail.innerHTML = "niste uneli vaš email."
        isOKM = false;
    }

    if (userPass != '' || userPass == ' ') {
        if (!regExUserPass.test(userPass)) {
            WPass.innerHTML = "Niste pravilno uneli vašu lozinku. Vaša lozinka MORA imati barem 8 karaktera i NESME sadrzati %   ^   &    *   (  )  -  +  =  '  _  \"";
            isOKP = false;
        } else {
            WPass.innerHTML = "";
            isOKP = true;

        }


    } else {
        WPass.innerHTML = "Niste uneli lozinku."
        isOKP = false;
    }


    if (isOKM == false || isOKP == false) {
        return false;
    } else {
        return true;
    }
}