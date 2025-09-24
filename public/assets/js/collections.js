$(document).ready(() => {
    ucitajAjax();
});

function ucitajAjax() {
    $.ajax({
        url: 'models/productDisplay/kolekcije.php',
        method: "post",
        type: "json",
        success: function(response) {
            var pomoc = JSON.parse(response);
            ispisi(pomoc.coll)


        },
        error: function() {
            console.log("Ovo nece")
        }
    })
}

function ispisi(coll) {
    var ispis = `<div style="background-image: url(assets/img/knitLj.jpg); background-position: center; background-size: cover;" class="container-fluid col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 p-0 m-0  d-flex justify-content-center align-items-center">
    <div class="row p-5 m-0 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-center align-items-center prozirniSloj"><div class="p-5"><a class="btn linkKol" href="index.php?page=products">
    <h1>Sve kolekcije</h1>
</a></div></div>
</div>`;
    for (let c of coll) {
        // if (toLowerCase(c.collection) == "sve kolekcije") {
        //     continue;
        // } else {
        ispis += `<div style="background-image: url(${c.src}); background-position: center; background-size: cover;" class="container-fluid col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 p-0 m-0  d-flex justify-content-center align-items-center">
            <div class="row p-5 m-0 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-center align-items-center prozirniSloj"><div class="p-5"><a class="btn linkKol" href="index.php?page=products&coll=${c.coll_id}">
            <h1>${c.collection}</h1>
        </a></div></div>
        </div>`;
        //}


    }

    document.getElementById("collections").innerHTML = ispis;
    var linkovi = document.getElementsByClassName("linkKol")
    for (let l of linkovi) {
        l.addEventListener("click", dodajFilterKolekcije);
    }

}


function dodajFilterKolekcije() {
    localStorage.setItem("collection", this.dataset.kolekcija);
}