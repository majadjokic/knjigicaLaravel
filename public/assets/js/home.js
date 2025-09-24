$(document).ready(() => {
    var heightP = $(window).height();
    var heightNav = $("nav").height();
    var heightFooter=$("#footer").height();
    var novaVisina = heightP - heightNav-heightFooter;
    $("#bgImg").css("height", novaVisina);
    $(window).resize(function() {
        heightP = $(window).height();
        $("#bgImg").css("height", novaVisina);
    })

    //ucitajAjax();
});

function ucitajAjax() {
    $.ajax({
        url: 'models/miscellaneous/dinmHome.php',
        method: "post",
        type: "json",
        success: function(response) {
            ispisi(response.home)


        },
        error: function() {
            console.log("Ovo nece")
        }
    })
}

function ispisi(home) {
    var ispis = "";
    for (let h of home) {
        ispis = `<div class="col-12 d-flex justify-content-center">
        <h3 id="opis">${h.description}</h3>
    </div>
    <div class="col-12 p-2 d-flex justify-content-center align-content-center">
        <a class="btn" href="${h.href}">${h.name}</a>
    </div>`;
    }
    document.getElementById("dinamickiHome").innerHTML = ispis;
}
