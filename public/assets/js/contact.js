$(document).ready(function() {
    $('#submitCon').click(proveriCon);
})

function proveriCon() {

    var isOkime = false;
    var isOkprezime = false;
    var isOkmejl = false;
    var isOktekst = false;
    var upozorenjefirstNameCon = document.querySelector('#upImeCon');
    var firstNameCon = document.querySelector('#firstNameCon').value;
    var regfirstNameCon = /^([A-ZĐĆČŽŠ][a-zđćčšž]{1,19}\-{0,1}){1,2}$/;
    if (firstNameCon != '' || firstNameCon == ' ') {
        if (!regfirstNameCon.test(firstNameCon)) {
            upozorenjefirstNameCon.classList.add('upozorenjeAktivan');
            upozorenjefirstNameCon.classList.remove('upozorenje');
            upozorenjefirstNameCon.innerHTML = "You didn't put in your first name properly. Make sure that the first leter is uppercase and the rest are lowercase and if you have two last names make sure you put in a - between them (example Mary-Kate).";
            isOkime = false;
        } else {
            upozorenjefirstNameCon.classList.remove('upozorenjeAktivan');
            upozorenjefirstNameCon.classList.add('upozorenje');;
            isOkime = true;
        }
    } else {
        upozorenjefirstNameCon.classList.add('upozorenjeAktivan');
        upozorenjefirstNameCon.classList.remove('upozorenje');
        upozorenjefirstNameCon.innerHTML = "You didn't put in your name."
        isOkime = false;
    }
    var upozorenjelastNameCon = document.querySelector('#upPrezimeCon');
    var lastNameCon = document.querySelector('#lastNameCon').value;
    var reglastNameCon = /^([A-ZĐĆČŽŠ][a-zđćčšž]{1,19}\-{0,1}){1,2}$/;
    if (lastNameCon != '' || lastNameCon == ' ') {
        if (!reglastNameCon.test(lastNameCon)) {
            upozorenjelastNameCon.classList.add('upozorenjeAktivan');
            upozorenjelastNameCon.classList.remove('upozorenje');
            upozorenjelastNameCon.innerHTML = "You didn't put in your last name properly. Make sure that the first leter is uppercase and the rest are lowercase and if you have two names make sure you put in a - between them (example Smith-Carlyle).";
            isOkprezime = true;
        } else {
            upozorenjelastNameCon.classList.remove('upozorenjeAktivan');
            upozorenjelastNameCon.classList.add('upozorenje');;
            isOkprezime = true;
        }
    } else {
        upozorenjelastNameCon.classList.add('upozorenjeAktivan');
        upozorenjelastNameCon.classList.remove('upozorenje');
        upozorenjelastNameCon.innerHTML = "You didn't put in your last name."
        isOkprezime = false;
    }
    var upozorenjeemailCon = document.querySelector('#upEmailCon');
    var emailCon = document.querySelector('#emailCon').value;
    var regemailCon = /^[a-z][\-\_\.\!\d a-z]*\@[a-z]{2,10}(\.[a-z]{2,3}){1,2}$/;
    if (emailCon != '' || emailCon == ' ') {
        if (!regemailCon.test(emailCon)) {
            upozorenjeemailCon.classList.add('upozorenjeAktivan');
            upozorenjeemailCon.classList.remove('upozorenje');
            upozorenjeemailCon.innerHTML = "You didn't put in your email properly (example maja@gmail.com)";
            isOkmejl = false;
        } else {
            upozorenjeemailCon.classList.remove('upozorenjeAktivan');
            upozorenjeemailCon.classList.add('upozorenje');;
            isOkmejl = true;
        }
    } else {
        upozorenjeemailCon.classList.add('upozorenjeAktivan');
        upozorenjeemailCon.classList.remove('upozorenje');
        upozorenjeemailCon.innerHTML = "You didn't put in an email."
        isOkmejl = false;
    }
    var upozorenjeTekstemailCon = document.querySelector('#upTekstCon');
    var tekstemailCon = document.querySelector('#textCon').value;
    if (tekstemailCon == '') {
        upozorenjeTekstemailCon.classList.add('upozorenjeAktivan');
        upozorenjeTekstemailCon.classList.remove('upozorenje');
        upozorenjeTekstemailCon.innerHTML = "You have to type out a messsage.";
        isOktekst = false;
    } else {
        upozorenjeTekstemailCon.classList.remove('upozorenjeAktivan');
        upozorenjeTekstemailCon.classList.add('upozorenje');;
        isOktekst = true;
    }

    if (isOkime == false || isOkprezime == false || isOkmejl == false || isOktekst == false) {
        return false;
    } else {
        return true;
    }

}
