$(document).ready(() => {

    prikazKonacni()

})

function prikaziGrad() {
    $.ajax({
        url: "models/kupovina/drzava.php",
        method: "POST",
        success: function(drzava) {
            drzava = drzava.drzava;
            ispisDrzava(drzava)

        },
        error: function(x) {
            console.log(x.responseText);
        }
    });
}

function ispisDrzava(drzava) {
    var ispis = "";
    for (let d of drzava) {
        ispis += `${d.country}`;
    }
    document.getElementById("unetaDrzavaNaziv").innerHTML = "Country: " + ispis;
}

function prikazKonacni() {
    var divPrik = document.getElementById('konacniPrikaz');
    var local = localStorage.getItem('korpaSH');
    var local2 = localStorage.getItem('rate');
    var ispis = "";
    var postojiDugme = false;
    var postojiRadio = false;
    if (local != null || local != undefined) {

        ispis = `<h2>Sačuvali smo informacije koje ste nam dali</h2>
        <p>Ako idalje želite da napravite porudžbinu kliknite nastavi</p>

        <div class="row d-flex justify-content-center">
                                    <button href="index.php?page=checkoutGo" class="btn text-light p-2 m-3 bg-success" name="checkOutDoneC" id="checkOutDoneC">Nastavi</button>
                                </div>
                                <div class="row d-flex justify-content-center">
                                    <a  href="index.php?page=checkout" class="btn bg-dark text-light">Nazad na informacije o porudžbini</a>
                                </div>`
        postojiDugme = true;

    } else {
        ispis = `<div class="container-fluid d-flex flex-column justify-content-around">
        <div class="row d-flex justify-content-around p-xl-3">
            <h2>Hvala na kupovini</h2>
        </div>`
        if (local2 != null || local2 != undefined) {
            ispis += `<div class="row d-flex justify-content-around p-xl-5">
            <p>Bilo bi nam od velike pomoći ako bi ste ocenili vaše iskustvo.</p>
        </div>
        <div class="row d-flex justify-content-around p-xl-5">
        <div class="star-rating">
        <fieldset class="d-flex flex-column">
            <div><input type="radio" id="star5" name="rating" value="5" /><label for="star5">Odlično</label></div>
          <div><input type="radio" id="star4" name="rating" value="4" /><label for="star4">Super</label></div>
          <div><input type="radio" id="star3" name="rating" value="3" /><label for="star3">Dobro</label></div>
          <div><input type="radio" id="star2" name="rating" value="2" /><label for="star2">Loše</label></div>
          <div><input type="radio" id="star1" name="rating" value="1" /><label for="star1">Užasno</label></div>
        </fieldset>
      </div>
                      </div>`
            postojiRadio = true;
        } else {
            ispis += `<div class="row d-flex justify-content-around p-xl-5">
            <p>Hvala na oceni</p>
        </div>`
        }


    }
    divPrik.innerHTML = ispis;
    if (postojiDugme == true) {
        document.getElementById("checkOutDoneC").addEventListener('click', prosledi)
    }
    if (postojiRadio == true) {
        var niz = document.getElementsByName("rating")
        for (let l of niz) {
            l.addEventListener('change', rating)
        }
    }
}

function prosledi() {


    var porudzbina = JSON.parse(localStorage.getItem('korpaSH'));
    localStorage.removeItem("korpaSH");
    localStorage.setItem('porudzbina', porudzbina);
    localStorage.setItem('rate', "true");

    var local2 = localStorage.getItem('rate');

    $.ajax({
        url: "models/kupovina/orderProccessing.php",
        method: "POST",
        dataType: "json",
        data: {
            porudzbina: porudzbina,
            sent: true
        },
        success: function(data) {
            console.log(data);
        },
        error: function(xhr, error, status) {
            let code = xhr.status;
            console.log(code);
            console.log(xhr.responseText);
        }

    })





    var divPrik = document.getElementById('konacniPrikaz');

    var ispis2 = "";
    ispis2 = `<div class="container-fluid d-flex flex-column justify-content-around">
    <div class="row d-flex justify-content-around p-xl-3">
        <h2>Hvala na kupovini!</h2>
    </div>`
    if (local2 != null || local2 != undefined) {
        ispis2 += `<div class="row d-flex justify-content-around p-xl-5">
        <p>Bilo bi nam od velike pomoći ako bi ste ocenili vaše iskustvo.</p>
    </div>
    <div class="row d-flex justify-content-around p-xl-5">
    <div class="star-rating">
    <fieldset class="d-flex flex-column">
        <div><input type="radio" id="star5" name="rating" value="5" /><label for="star5">Odlično</label></div>
      <div><input type="radio" id="star4" name="rating" value="4" /><label for="star4">Super</label></div>
      <div><input type="radio" id="star3" name="rating" value="3" /><label for="star3">Dobro</label></div>
      <div><input type="radio" id="star2" name="rating" value="2" /><label for="star2">Loše</label></div>
      <div><input type="radio" id="star1" name="rating" value="1" /><label for="star1">Užasno</label></div>
    </fieldset>
  </div>
                  </div>`
    } else {
        ispis2 += `<div class="row d-flex justify-content-around p-xl-5">
        <p>Hvala na oceni</p>
    </div>`
    }
    ispis2 += `</div>`;
    divPrik.innerHTML = ispis2;

}

function rating() {

    var rating = this.value;
    localStorage.removeItem('rate');

    console.log(rating)

    $.ajax({
        url: "models/kupovina/rating.php",
        method: "POST",
        dataType: "json",
        data: {
            rating: rating,
            sent: true
        },
        success: function(data) {
            console.log(data);
        },
        error: function(xhr, error, status) {
            let code = xhr.status;
            console.log(code);
            console.log(xhr.responseText);
        }

    })





    var divPrik = document.getElementById('konacniPrikaz');
    var ispis3 = "";
    ispis3 = `<div class="container-fluid d-flex flex-column justify-content-around ">
    <div class="row d-flex justify-content-around p-xl-3">
        <h2>Hala na kupovini!</h2>
    </div><div class="row d-flex justify-content-around p-xl-5">
        <p>Hvala na oceni!</p>
    </div></div>`;
    divPrik.innerHTML = ispis3;
}