$(document).ready(() => {

    ucitajAjax("productDisplay/products", ispisiTabelu)
    alert('cart');

})

function ucitajAjax(file, fun) {
    $.ajax({
        url: "models/" + file + ".php",
        type: "json",
        method: "POST",
        success: (result) => {
            fun(result.result)
        }
    })
}

function ispisiTabelu(result) {
    var proizvodiUkorpi = JSON.parse(localStorage.getItem("korpaSH"))
    var redCart = document.querySelector('#korpaRed')
    var checkOutDiv = document.getElementById("checkOutDiv")
    var ukupnaCenaDiv = document.getElementById("ukupnaCenaDiv")
    var ispisiRed = '';

    if (!proizvodiUkorpi) {
        redCart.innerHTML = `<div class="container-fluid d-flex flex-column justify-content-around nistaUkorpi">
                        <div class="row d-flex justify-content-around p-3">
                            <h1>Nemate ni jedan priozvod u korpi</h1>
                        </div>
                        <div class="row d-flex justify-content-around p-5">
                            <p>Ovde će se nalaziti vaši proizvodi kada ih ubacite u korpu.</p>
                        </div>

                    </div>`
        checkOutDiv.innerHTML = `<a href="index.php?page=products"><h4>Nastavite kupovinu</h4></a>`
    } else {
        redCart.innerHTML = `<div class="table-responsive" id="tabelaCart">
                                <table class="table table-dark purple table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th width="50">
                                                Proizvod
                                            </th>
                                            <th width="50">
                                                Slika
                                            </th>
                                            <th width="50">
                                                Cena (jednog komada)
                                            </th>
                                            <th width="50">
                                                Veličina
                                            </th>
                                            <th width="200">
                                                Količina
                                            </th>
                                            <th width="200">
                                                Izbacite proizvod
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                </table>
                            </div>`
        var divTabelaCart = document.querySelector('#tabelaCart tbody');
        var ukupnaCena = 0;

        for (let l of proizvodiUkorpi) {
            for (let p of result) {
                if (l.proizvod == p.prod_id) {
                    ispisiRed += `<tr class="purpleLight">
                                    <td>
                                        <div class="d-flex justify-content-around align-items-center centrirajCart">
                                            ${p.name}</div>
                                    </td>
                                    <td>
                                        <div class="d-flex justify-content-around align-items-center centrirajCart">
                                            <img class="slikaPcart" src="${p.src}" alt="${p.alt}" />
                                        </div>
                                    </td>
                                    <td>
                                        <div class="d-flex justify-content-around align-items-center centrirajCart">
                                            ${p.price} RSD</div>
                                    </td>
                                    <td>
                                        <div class="d-flex justify-content-around align-items-center centrirajCart">
                                        <p class="velicinaIspis" id="velicina" data-idproizvodavelicina=${l.id}></p></div>
                                    </td>
                                    <td>
                                        <div class="d-flex justify-content-around align-items-center centrirajCart">
                                            <div class="d-flex justify-content-around align-items-center flex-row ">
                                                <div class="d-flex justify-content-center align-items-center col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 ">
                                                    <button class="btn text-white dugmeManje" data-idproduct="${l.id}" ><i class="fas fa-chevron-left"></i></button>
                                                </div>
                                                <div class="d-flex justify-content-center align-items-center col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 "><p class="kolicinaIspis" id="kolicina" data-idproizvodakolicina=${l.id} ></p></div>
                                            <div class="d-flex justify-content-center align-items-center col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 ">
                                            <button class="btn text-white dugmeVise" data-idproduct="${l.id}" ><i class="fas fa-chevron-right"></i></button></div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                <div class="d-flex justify-content-center align-items-center centrirajCart">
                                <button type="submit" class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 izbaci btn text-light" data-idkorpa="${l.id}">Ukloni proizvod</button>
                            </div>
                                </td>
                            </tr>`;



                    ukupnaCena += parseInt(l.kolicina) * parseInt(p.price);



                    function ispisiKolicinu() {

                        var kolicina = document.getElementsByClassName("kolicinaIspis")


                        for (let q of kolicina) {
                            var proizvodId = q.dataset.idproizvodakolicina;
                            for (let pk of proizvodiUkorpi) {
                                if (proizvodId == pk.id) {
                                    q.innerHTML = pk.kolicina
                                }
                            }
                        }
                    }


                    function ispisiVelicinu() {
                        var velicina = document.getElementsByClassName("velicinaIspis")
                        for (let q of velicina) {
                            var proizvodVel = q.dataset.idproizvodavelicina;
                            for (let pk of proizvodiUkorpi) {
                                if (proizvodVel == pk.id) {
                                    if (pk.velicina == undefined) {
                                        q.innerHTML = "ONE SIZE"
                                    } else {
                                        q.innerHTML = pk.velicina
                                    }
                                }
                            }
                        }
                    }




                } //kraj glavnof if-a
            }
        } //kraj od prvog  i glavnog for-a





        divTabelaCart.innerHTML = ispisiRed;
        ispisiKolicinu()
        ispisiVelicinu()
        ukupnaCenaDiv.innerHTML = `<p class="font-weight-bold">Total: </p>
            <p class="font-weight-bolder pl-3" id="ukupnaCena"></p>`;
        checkOutDiv.innerHTML = `<a class="btn p-2 text-white purple" href="index.php?page=checkout" id="checkOut">Kasa</a>`;

        var ukupnaCenaP = document.getElementById("ukupnaCena")
        ukupnaCenaP.innerHTML = ukupnaCena + " RSD";


        var manje = document.getElementsByClassName("dugmeManje");
        var vece = document.getElementsByClassName("dugmeVise");
        for (let m of manje) {
            m.addEventListener('click', (e) => {
                e.preventDefault()
                for (let p of proizvodiUkorpi) {
                    if (p.id == m.dataset.idproduct) {
                        if (p.kolicina >= 2) {
                            p.kolicina = parseInt(p.kolicina) - 1
                            p = {
                                "id": p.id,
                                "proizvod": p.proizvod,
                                "velicina": p.velicina,
                                "kolicina": p.kolicina
                            }
                            localStorage.setItem("korpaSH", JSON.stringify(proizvodiUkorpi))
                            ispisiKolicinu()
                            ispisiVelicinu()
                            ucitajAjax("productDisplay/products", ispisiTabelu)
                        }
                    }

                }
            })
        }
        for (let v of vece) {
            v.addEventListener('click', (e) => {
                e.preventDefault()
                for (let p of proizvodiUkorpi) {
                    if (p.id == v.dataset.idproduct) {
                        if (p.kolicina <= 9) {
                            p.kolicina = parseInt(p.kolicina) + 1
                            p = {
                                "id": p.id,
                                "proizvod": p.proizvod,
                                "velicina": p.velicina,
                                "kolicina": p.kolicina
                            }
                            localStorage.setItem("korpaSH", JSON.stringify(proizvodiUkorpi))
                            ispisiKolicinu()
                            ispisiVelicinu()
                            ucitajAjax("productDisplay/products", ispisiTabelu)
                        }
                    }

                }
            })
        }
        var izbaci = document.getElementsByClassName("izbaci");
        for (let g of izbaci) {
            g.addEventListener('click', (e) => {
                e.preventDefault();
                if (proizvodiUkorpi.length > 1) {
                    var nisuIzbaceni = proizvodiUkorpi.filter((p) => p.id != g.dataset.idkorpa);
                    localStorage.setItem("korpaSH", JSON.stringify(nisuIzbaceni))
                    ispisiKolicinu()
                    ispisiVelicinu()
                    ucitajAjax("productDisplay/products", ispisiTabelu)
                } else {
                    localStorage.removeItem("korpaSH")
                    ispisiKolicinu()
                    ispisiVelicinu()
                    ucitajAjax("productDisplay/products", ispisiTabelu)
                    checkOutDiv.innerHTML = `<a href="index.php?page=products"><h4>Nasnatite kupovinu</h4></a>`
                    ukupnaCenaDiv.innerHTML = ''
                }
            })
        }

    }

}
