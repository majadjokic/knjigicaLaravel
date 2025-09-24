$(document).ready(function() {
    document.getElementById('checkOutC').addEventListener('click', checkOutCheck);
    ucitajDrzave();
});

function ucitajDrzave() {
    $.ajax({
        url: "models/kupovina/countriesSelect.php",
        method: "POST",
        success: (countries) => {
            countries = countries.countries;

            drzave(countries);

        }
    })
}

function drzave(countries) {
    var countriesDiv = document.getElementById('countryC');
    var drzave = `<option value=0>Izaberite državu</option>`;
    for (let d of countries) {
        drzave += `<option value="${d.country_id}">${d.country}</option>`
    }
    countriesDiv.innerHTML = drzave;
}

function checkOutCheck() {
    var card = document.getElementById("cardC").value;
    var country = document.getElementById("countryC").value;
    var city = document.getElementById("cityC").value;
    var address = document.getElementById("addressC").value;

    var isOkCard = false;
    var isOkCountry = false;
    var isOkCity = false;
    var isOkAddress = false;


    var regExCard = /^([0-9]{4}\-){3}[0-9]{4}$/
    var regExCity = /^[\s\d\' a-zđćčšž A-ZĐĆČŽŠ]*$/
    var regExAddress = /^[\s\d\'\,\- a-zđćčšž A-ZĐĆČŽŠ]*$/

    if (card != '') {
        if (!regExCard.test(card)) {
            document.getElementById('cardCW').innerHTML = "Niste pravilno uneli vašu karticu (0000-0000-0000-0000).";
            isOkCard = false;
        } else {
            document.getElementById('cardCW').innerHTML = "";
            isOkCard = true;
        }
    } else {
        document.getElementById('cardCW').innerHTML = "Niste uneli vašu karticu";
        isOkCard = false;
    }
    if (country == 0) {
        document.getElementById('countryCW').innerHTML = "Morate da izaberete državu"
        isOkCountry = false;
    } else {
        document.getElementById('countryCW').innerHTML = ""
        isOkCountry = true;
    }
    if (city != '') {
        if (!regExCity.test(city)) {
            document.getElementById('cityCW').innerHTML = "Niste pravilno uneli grad";
            isOkCity = false;
        } else {
            document.getElementById('cityCW').innerHTML = "";
            isOkCity = true;
        }
    } else {
        document.getElementById('cityCW').innerHTML = "Niste uneli grad";
        isOkCity = false;
    }
    if (address != '') {
        if (!regExAddress.test(address)) {
            document.getElementById('addressCW').innerHTML = "Niste pravilno uneli adresu";
            isOkAddress = false;
        } else {
            document.getElementById('addressCW').innerHTML = "";
            isOkAddress = true;
        }
    } else {
        document.getElementById('cityCW').innerHTML = "Niste uneli adresu";
        isOkAddress = false;
    }

    if (isOkCard == false || isOkCountry == false || isOkCity == false || isOkAddress == false) {
        return false;
    } else {
        return true;
    }
}