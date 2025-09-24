$(document).ready(function() {
    document.getElementById('resetPassword').addEventListener('click', confCheck);
});

function confCheck() {


    //get values

    var userMail = document.getElementById("userMail").value;

    //warning spaces

    var WMail = document.getElementById("userMailW");


    //regular expresions
    var isOK = false;
    var regExUserMail = /^[a-z][\-\_\.\!\d a-z]*\@[a-z]{2,10}(\.[a-z]{2,3}){1,2}$/;

    //User name

    if (userMail != '' || userMail == ' ') {
        if (!regExUserMail.test(userMail)) {
            WMail.innerHTML = "Niste pravilno uneli vaš email (primer maja@gmail.com)";
            isOK = false;
        } else {
            WMail.innerHTML = "";
            isOK = true;

        }


    } else {
        WMail.innerHTML = "Niste uneli vaš email."
        isOK = false;
    }




    return isOK;
}