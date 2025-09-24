$(document).ready(() => {
    ucitajAjax("productDisplay/productDesc", productDesc);
    ucitajAjax("productDisplay/productImg", productImg);

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



function productDesc(prod) {
    var opis = "";
    var saleNiz = [];
    for (let p of prod) {
        opis += `<div id="zaKupovinu">
        <h3>${p.name}</h3><div id="cena${p.id}">`
        popustProizvoda(p.id)

        function popustProizvoda(proizvod) {
            $.ajax({
                url: "models/productDisplay/popustProizvoda.php",
                type: "json",
                method: "POST",
                success: (result) => {
                    var pp = proizvod
                    var ime = "cena" + p.id
                    var element = ""
                    for (let s of result.result) {
                        if (s.Product_id == pp) {
                            element = {
                                "proizvod": pp,
                                "popust": s.Procent
                            }
                            saleNiz.push(element)
                        }
                    }
                    if (saleNiz.length == 0) {
                        document.getElementById(ime).innerHTML = `<h4 class="pt-3">${p.price} RSD</h4>`

                    }
                    for (let broj = 0; broj < saleNiz.length; broj++) {
                        if (saleNiz[broj].proizvod != pp) {
                            document.getElementById(ime).innerHTML = `<h4 class="pt-3">${p.price} RSD</h4>`
                        } else if (saleNiz[broj].proizvod == pp) {
                            var ogPrice = parseInt(p.price)
                            var sale = parseInt(saleNiz[broj].popust)
                            var newPrice = ogPrice - ((ogPrice / 100) * sale)
                            newPrice = newPrice.toFixed(2)
                            document.getElementById(ime).innerHTML = `<h4 class="pt-3">${newPrice} RSD</h4><del>${p.price} RSD</del>`
                        }
                    }

                }
            })
        }
        opis += `</div><div id="velicine" class="mt-5 mb-5">
        <div id="sizes" class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 d-flex row"></div>`
        ucitajVelicine(p.size_type)

        function ucitajVelicine(size_type) {
            var st = parseInt(size_type);
            var fileS = "";
            if (st == 1) {
                fileS = "sizesNumbers";
            } else if (st == 2) {
                fileS = "sizesLetters";
            } else {
                fileS = "sizesOneSize";
            }
            $.ajax({
                url: "models/productDisplay/" + fileS + ".php",
                type: "json",
                method: "POST",
                success: (result) => {
                    var sizes = "";
                    for (let s of result.result) {
                        if (s.size != "ONE SIZE") {
                            sizes += `<div class="form-check m-2">
                            <input class="form-check-input" type="radio" name="size" id="size${s.id}" value="${s.size}">
                            <label class="form-check-label" for="size${s.id}">
                            ${s.size}
                            </label>
                          </div>`
                        } else {
                            sizes += `<p>${s.size}</p>`;
                        }

                    }
                    document.getElementById("sizes").innerHTML = sizes;
                }
            })
        }
        opis += `<p><a class="ljub" href="assets/stitchHeartSizeChart.pdf" target="_blanc">Pronađi veličinu</a></p></div>
        <button type="submit" class="btn" id="dodajUkorpu" data-productid="${p.id}">Dodaj u korpu</button>
        </div>
        <div id="zaInforamcije" class="mt-5">
        <p id="detProd">Detalji o proizvodu +</p>
        <div id="detProdDiv" class="pl-3">
            <p>${p.description}</p>
        </div>
        
        <p id="matProd">Materijal i održavanje +</p>
        <div id="matProdDiv" class="pl-3">
            <p>${p.mat}</p>
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 d-flex flex-row" id="odrzavanje">`
        ucitajAjax("productDisplay/productCare", odrzavanje);

        function odrzavanje(odr) {
            var care = "";
            for (let o of odr) {
                care += `<img src="${o.srcWashing}" alt="${o.washing}" class="m-2" style="width:30px">
                            <img src="${o.srcBleaching}" alt="${o.bleaching}" class="m-2" style="width:30px">
                            <img src="${o.srcDrying}" alt="${o.drying}" class="m-2" style="width:30px">
                            <img src="${o.srcIroning}" alt="${o.ironing}" class="m-2" style="width:30px">
                            <img src="${o.srcDrycleaning}" alt="${o.drycleaning}" class="m-2" style="width:30px">`;
            }
            document.getElementById("odrzavanje").innerHTML = care;
        }


        opis += `</div>
        </div>
        
        <p id="retProd">Dostava i povraćaj robe +</p>
        <div id="retProdDiv" class="pl-3">
            <p>Pravo na povratak u roku od 14 dana</p>
            <p>Broj telefona: 0800 / 191 066</p>
        </div>
        
        </div>`;
    }
    document.getElementById("prodDesc").innerHTML = opis;

    //funkcije koje prikazuju/kriju podatke 

    $(document).ready(function() {


        $('#detProdDiv').hide();
        var brojacDesc = 0;
        $('#detProd').click(function() {
            $('#detProdDiv').slideToggle('slow');
            if ($('#detProdDiv').is(':visible') && (brojacDesc % 2 == 0)) {
                $('#detProd').html('Detalji o proizvodu -');
            } else {
                $('#detProd').html('Detalji o proizvodu +');
            }
            brojacDesc++;
        })
        $('#matProdDiv').hide();
        var brojacMat = 0;
        $('#matProd').click(function() {
            $('#matProdDiv').slideToggle('slow');
            if ($('#matProdDiv').is(':visible') && (brojacMat % 2 == 0)) {
                $('#matProd').html('Materijal i održavanje -');
            } else {
                $('#matProd').html('Materijal i održavanje +');
            }
            brojacMat++;
        })
        $('#retProdDiv').hide();
        var brojacRet = 0;
        $('#retProd').click(function() {
            $('#retProdDiv').slideToggle('slow');
            if ($('#retProdDiv').is(':visible') && (brojacRet % 2 == 0)) {
                $('#retProd').html('Dostava i povraćaj robe -');
            } else {
                $('#retProd').html('Dostava i povraćaj robe +');
            }
            brojacRet++;
        })
    })



    document.getElementById("dodajUkorpu").addEventListener("click", dodajUkorpu)

}

function productImg(prod) {
    var slike = "";
    var broj = 1;
    for (let p of prod) {
        if (broj < 3) {
            slike += `<div class="p-1 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 d-flex justify-content-center align-items-center">
            <img class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" src="${p.src}" alt="${p.name} ` + broj + `">
            </div>`
        }
        if (broj >= 3) {
            slike += `<div class="p-1 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 d-flex justify-content-center align-items-center">
            <img class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" src="${p.src}" alt="${p.name} ` + broj + `">
            </div>`;
        }
        broj++;
    }
    document.getElementById("prodImg").innerHTML = slike;

}

function dodajUkorpu() {

    var proizvod = document.getElementById("dodajUkorpu");
    var proizvodId = parseInt(proizvod.dataset.productid)
    var velicinaP = $("input[type='radio'][name='size']:checked").val();
    console.log(proizvodId)
    console.log(typeof(proizvodId))
    var korpa = JSON.parse(localStorage.getItem("korpaSH"));
    if (korpa == null || korpa == "" || korpa.length == 0) {
        korpa = [];
        var proizvod = {
            "id": 1,
            "proizvod": proizvodId,
            "velicina": velicinaP,
            "kolicina": 1
        }
        korpa.push(proizvod)
        korpa = JSON.stringify(korpa);
        localStorage.setItem("korpaSH", korpa);
        alert("Artikal dodat u korpu. Imate 1 komad ovog artikla u korpi.")
    } else if (korpa != null || korpa != "" || korpa.length != 0) {
        var p = korpa.find(obj => obj.proizvod == proizvodId && obj.velicina == velicinaP)
        if (p != undefined && p.kolicina < 10) {
            p.kolicina += 1;
            korpa = JSON.stringify(korpa)
            localStorage.setItem("korpaSH", korpa);
            alert("Artikal dodat u korpu. Imate " + p.kolicina + " komada ovog artikla u korpi.")
        } else if (p != undefined && p.kolicina == 10) {
            alert("Već imate 10 komada od ovog proizvoda u korpi, što je maksimum.")
        } else if (p == undefined) {
            var duzina = korpa.length + 1
            var proizvod = {
                "id": duzina,
                "proizvod": proizvodId,
                "velicina": velicinaP,
                "kolicina": 1
            }
            korpa.push(proizvod)
            korpa = JSON.stringify(korpa)
            localStorage.setItem("korpaSH", korpa);
            alert("Artikal dodat u korpu. Imate 1 komad ovog artikla u korpi.")
        }
    }

}