$(document).ready(() => {
    $podProizvodi = "http://localhost/knjigicaLaravel/public/productsJson";
    $podPisciPovezano="http://localhost/knjigicaLaravel/public/taJson2"
    $podZanroviPovezano="http://localhost/knjigicaLaravel/public/tcJson"




    ucitajAjax($podZanroviPovezano,proveriZanrove);
    //ucitajAjax($podPisciPovezano,proveriAutore);
    ucitajAjax($podProizvodi, products);

    aktivirajFiltereZan()
    aktivirajFiltereAut()
    $("#poNazivu").change(nazivLS);
    $("#poCeni").change(cenaLS);
    $("#ukloni").click(brisi);
    $("#search").keyup(searchON);

    //AKO IMA NESTO U LS (SORT CENA I NAZIV)
    var lsNaziv = localStorage.getItem("naziv")
    var lsCena = localStorage.getItem("cena")
    if (lsNaziv != null && lsNaziv != undefined && lsNaziv != "") {
        document.getElementById("poNazivu").value = lsNaziv
    }
    if (lsCena != null && lsCena != undefined && lsCena != "") {
        document.getElementById("poCeni").value = lsCena
    }


})


function brisi() {
    localStorage.removeItem("zanrovi")
    localStorage.removeItem("zanroviNaslovi")
    localStorage.removeItem("autori")
    localStorage.removeItem("autoriNaslovi")
    localStorage.removeItem("naziv")
    localStorage.removeItem("cena")
    $('.category').prop('checked', false)
    $('.author').prop('checked', false)
    $('#poNazivu').val(0)
    $('#poCeni').val(0)
    ucitajAjax($podProizvodi, products)
}

function searchON() {
    ucitajAjax($podProizvodi, search)
}

function search(prod) {
    var unos = document.getElementById("search").value
    var pp=JSON.parse(prod)
    var p = pp.filter((x) => {
        if (x.title.toLowerCase().indexOf(unos.trim().toLowerCase()) != -1) {
            return x;
        }
    })
    productsSearch(p)
}

function ucitajAjax(file, fun) {
    $.ajax({
        url: file,
        method: "GET",
        type: "json",
        success: (result) => {
            fun(result);
        },
        error: (x) => {
            console.log(x);
        }
    })
}

function proveriZanrove(zanrovi){
    var lsn = localStorage.getItem("zanrovi")
    var zanroviZ=JSON.parse(zanrovi)
    if (lsn != null && lsn != undefined && lsn != "") {
        var ls = lsn.split(",")
        var lsNum=[]
        var prod1=[]
        for(let x=0;x<ls.length;x++){
            lsNum.push(parseInt(ls[x]))
        }
        for(let z of zanroviZ){
            if(lsNum.includes(z.category_id)){
                prod1.push(z.title_id)
            }
        }
        const distinct=(value,index,self)=>{
            return self.indexOf(value)===index;
        }
        var prod=prod1.filter(distinct)
        localStorage.setItem('zanroviNaslovi',prod)
    }



}

function proveriAutore(autori){
    var lsA = localStorage.getItem("autori")
    var autoriA=JSON.parse(autori)
    if (lsA != null && lsA != undefined && lsA != "") {
        var lsAut = lsA.split(",")
        var autori=[]
        var prod1=[]
        for(let x=0;x<lsAut.length;x++){
            autori.push(parseInt(lsAut[x]))
        }
        for(let a of autoriA){
            if(autori.includes(a.author_id)){
                prod1.push(a.title_id)
            }
        }
        const distinct=(value,index,self)=>{
            return self.indexOf(value)===index;
        }
        var prod=prod1.filter(distinct)
        localStorage.setItem('autoriNaslovi',prod)
    }




}

function products(prod) {
    var link=window.location.href
    var indLink=link.indexOf("#")
    var deloviLink
    if(indLink!=-1){
        deloviLink=link.split("#")

    }
    if(indLink!=-1){
        link=deloviLink[0]
    }
    else{
        link=window.location.href
    }

    var prodP=JSON.parse(prod)
    var prodPConst=JSON.parse(prod)


    //prodP = zanrovi(prodP);
    var zanrovi=localStorage.getItem('zanroviNaslovi')
    //zanrovi=ucitajAjax($podZanroviPovezano,proveriZanrove)
    console.log(zanrovi)
    if (zanrovi != null && zanrovi != undefined && zanrovi != "") {
        var zan = zanrovi.split(",")
        var zanroviNaslovi = []
        for (let x = 0; x < zan.length; x++) {
            zanroviNaslovi.push(parseInt(zan[x]))
        }
        var products = prodP.filter((x) => {
        if (zanroviNaslovi.indexOf(x.id) != -1) {
                return 1;
            }
        })
        prodP=products
    }
    else if(zanrovi == null && zanrovi == undefined && zanrovi == ""){
        localStorage.removeItem("zanroviNaslovi")
        prodP=prodPConst
    }

    // var autori=localStorage.getItem('autoriNaslovi')
    // //zanrovi=ucitajAjax($podZanroviPovezano,proveriZanrove)
    // console.log(autori)
    // if (autori != null && autori != undefined && autori != "") {
    //     var aut = autori.split(",")
    //     var autoriNaslovi = []
    //     for (let x = 0; x < aut.length; x++) {
    //         autoriNaslovi.push(parseInt(aut[x]))
    //     }
    //     var products2 = products.filter((x) => {
    //         if (autoriNaslovi.indexOf(x.id) != -1) {
    //             return 1;
    //         }
    //     })
    // }
    // else if (autori == null && autori == undefined && autori == ""){
    //     localStorage.removeItem("autoriNaslovi")
    //     products2=products
    // }
    // console.log(zanroviNaslovi)
    //console.log(products)


    //prodP = autori(prodP);
    prodP = sortNaziv(prodP)
   prodP = sortCena(prodP)
    var ispis = "";
    // var saleNiz = []
    if (prodP.length != 0) {

//console.log(prodP)
        for (let r of prodP) {

            ispis+=`<div class="m-3 col-xl-3 col-lg-3 col-md-6 col-sm-8 col-12">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-3">
                        <a href="`+link+`/${r.id}" ><img class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" src="assets/img/proizvodi/${r.cover}" alt="${r.title} cover"></a>
                    </div>
                    <p class="font-weight-bold">${r.title}</p>
                    <p id="autori${r.id}">
                    `
            //prekid za jos jedan json
            var nizAutora=[]
           pisci(r.id,nizAutora)

            function pisci(naslov,niz){
                $.ajax({
                    url: $podPisciPovezano,
                    type: "json",
                    method: "GET",
                    success: (result) => {
                        var sviAutori=JSON.parse(result)
                        var n=naslov
                        var autori=""
                        var na=niz
                        for(let a of sviAutori){
                            if(a.title_id==n){
                                na.push(a.author)
                            }
                        }
                        for(let x=0;x<na.length;x++){
                            if(x<na.length-1){
                                autori+=na[x]+", "
                            }
                            else{
                                autori+=na[x]
                            }
                        }
                        var aaa="autori"+n
                        document.getElementById(aaa).innerHTML=autori

                    }
                })

            }

            //kraj prekida
            ispis+=`</p>
                    <div id="cena"${r.id}>
                        <h4>${r.price} RSD</h4>
                    </div>

                </div>`


        }
    } else {
        ispis = `<div><h1>Nema proizvoda koji bi se prikazali.</h1></div>`
    }


    document.getElementById("products").innerHTML = ispis;

}




function productsSearch(prod) {
    var ispis = "";
    if (prod.length != 0) {
        for (let r of prod) {
            ispis += `<div class="m-3 col-xl-3 col-lg-3 col-md-6 col-sm-8 col-12">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <a href="\`+link+\`/${r.id}" ><img class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" src="assets/img/proizvodi/${r.cover}" alt="${r.title} cover"></a>
                </div>
                <p class="font-weight-bold">${r.title}</p>
                    <p id="autori${r.id}">
                    `
            //prekid za jos jedan json
            var nizAutora=[]
            pisci(r.id,nizAutora)

            function pisci(naslov,niz){
                $.ajax({
                    url: $podPisciPovezano,
                    type: "json",
                    method: "GET",
                    success: (result) => {
                        var sviAutori=JSON.parse(result)
                        var n=naslov
                        var autori=""
                        var na=niz
                        for(let a of sviAutori){
                            if(a.title_id==n){
                                na.push(a.author)
                            }
                        }
                        for(let x=0;x<na.length;x++){
                            if(x<na.length-1){
                                autori+=na[x]+", "
                            }
                            else{
                                autori+=na[x]
                            }
                        }
                        var aaa="autori"+n
                        document.getElementById(aaa).innerHTML=autori

                    }
                })

            }

            //kraj prekida
            ispis+=`</p>
                    <div id="cena"${r.id}>
                        <h4>${r.price} RSD</h4>
                    </div>

                </div>`



        }
    } else {
        ispis = `<div><h1>Nema proizvoda koji bi se prikazali.</h1></div>`
    }


    document.getElementById("products").innerHTML = ispis;
}

function aktivirajFiltereZan() {
    $('.category').change(zanroviLS)

//da chekira ako ima necega u LS
    var lsn = localStorage.getItem("zanrovi")
    if (lsn != null && lsn != undefined && lsn != "") {
        var ls = lsn.split(",")
    }
    if (ls != null && ls != undefined && ls != "") {
        if (ls.length != 0) {
            var zan = document.getElementsByClassName("category")
            for (let z of zan) {
                if (ls.indexOf(z.value) != -1) {
                    z.setAttribute("checked", true)
                } else {
                    z.setAttribute("unchecked", true)
                }
            }

        }
    }
}

function aktivirajFiltereAut() {
    $('.author').change(autoriLS)

//da checkira ako ima nesto u LS
    var lsn = localStorage.getItem("autori")
    if (lsn != null && lsn != undefined && lsn != "") {
        var ls = lsn.split(",")
    }
    if (ls != null && ls != undefined && ls != "") {
        if (ls.length != 0) {
            var aut = document.getElementsByClassName("autori")
            for (let a of aut) {
                if (ls.indexOf(k.value) != -1) {
                    a.setAttribute("checked", true)
                } else {
                    a.setAttribute("unchecked", true)
                }
            }

        }
    }
}

function autoriLS() {
    var autori = []
    $('.author:checked').each(function(el) {
        autori.push(parseInt($(this).val()))
    })
    localStorage.setItem("autori", autori)
    ucitajAjax($podPisciPovezano, proveriAutore)
    ucitajAjax($podProizvodi, products);
}

function zanroviLS() {
    var zanrovi = []
    $('.category:checked').each(function(el) {
        zanrovi.push($(this).val())
    })
    localStorage.setItem("zanrovi", zanrovi)
    //
    ucitajAjax($podZanroviPovezano, proveriZanrove)
    ucitajAjax($podProizvodi, products);
}

function nazivLS() {
    var naziv = document.getElementById("poNazivu").value
    localStorage.setItem("naziv", naziv)
    ucitajAjax($podProizvodi, products);
}

function cenaLS() {
    var cena = document.getElementById("poCeni").value
    localStorage.setItem("cena", cena)
    ucitajAjax($podProizvodi, products);
}

function autoriStrao(prodP) {
    //nije gotovo
    var lsn = localStorage.getItem("autori")
    if (lsn != null && lsn != undefined && lsn != "") {
        var ls = lsn.split(",")
    }
    if (ls != null && ls != undefined && ls != "") {
        if (ls.length != 0) {

            var products = prodP.filter((x) => {
                if (ls.indexOf(x.coll_id) != -1) {
                    return 1;
                }
            })
            return products
        } else {
            return prodP
        }
    }
    return prodP;

}


function zanroviStaro(prodP) {
    //nije gotovo

    //console.log(prodP)
    //zanrovi koji se traze
    var lsn = localStorage.getItem("zanrovi")

    //console.log(lsn)
    if (lsn != null && lsn != undefined && lsn != "") {
        var ls = lsn.split(",")
        var lsNum=[]
        for(let x=0;x<ls.length;x++){
            lsNum.push(parseInt(ls[x]))
        }
        //console.log(lsNum)
        // for(let x=0;x<lsNum;x++){
        //     console.log(typeof lsNum[x])
        // }
        //var nizNaslovaSaZanrom = izvuciNaslove(lsNum)
        //console.log(prodP)
        izvuciNaslove(prodP,lsNum)
    }
    //treba da se pozove json sa povezanim tabelama title_category i categories



    // //function izvuciNaslove(lsNum) {
    //     //console.log(prodP)
    //     var novo=$.ajax({
    //         url: $podZanroviPovezano,
    //         method: "GET",
    //         type: "json",
    //         success: (zanrovi) => {
    //             //console.log(prodP)
    //             //console.log(ls)
    //             var l=lsNum
    //             console.log(l)
    //             var nz=[]
    //             //global
    //             //console.log(l)
    //             var zz = JSON.parse(zanrovi)
    //             //console.log(zz)
    //
    //             for (let z of zz) {
    //                 //console.log(typeof z.category_id)
    //                 //console.log(z.category_id)
    //                 //console.log(l)
    //                 //console.log(l.includes(5))
    //                 if (l.includes(z.category_id)) {
    //                     nz.push(z.title_id)
    //                     //console.log("da")
    //                    // console.log("niz: "+nizNaslovaSaZanrom)
    //                 }
    //             }
    //             console.log(nz)
    //             if (nz != null && nz != undefined && nz != "") {
    //                 if (nz.length != 0) {
    //                     var products = prodP.filter((x) => {
    //                         if (nz.indexOf(x.id) != -1) {
    //                             return 1;
    //                         }
    //                     })
    //
    //                     //return products
    //                     localStorage.setItem('zanroviNaslovi',products)
    //                 } else {
    //                     //return prodP
    //                     localStorage.removeItem('zanroviNaslovi')
    //                 }
    //
    //             }
    //             //return nz
    //             //poveziNasloveZanrove(nizNaslovaSaZanrom)
    //         }
    //     })
    // //}


    //console.log(prodP)
    //console.log(products)
    console.log(novo)

    // function poveziNasloveZanrove(nizNaslovaSaZanrom){
    //     //console.log(prodP)
    //     var nz=nizNaslovaSaZanrom
    //     if (nz != null && nz != undefined && nz != "") {
    //         if (nz.length != 0) {
    //             var products = prodP.filter((x) => {
    //                 if (nz.indexOf(x.id) != -1) {
    //                     return 1;
    //                 }
    //             })
    //             console.log(typeof products)
    //             return products
    //         } else {
    //             return prodP
    //         }
    //     }
    // }

    //onda se pravi niz sa id-evima naslova koji imaju taj zanr

    //proci kroz niz i napraviti niz obj knjiga ciji se id podudara sa id-evima iz prethodno napravljenog niza


    //prolaz kroz podatke
    // if (ls != null && ls != undefined && ls != "") {
    //     if (ls.length != 0) {
    //         var products = prodP.filter((x) => {
    //             if (ls.indexOf(x.type_id) != -1) {
    //                 return 1;
    //             }
    //         })
    //         return products
    //     } else {
    //         return prodP
    //     }
    // }




}

function izvuciNasloveStaro(prodP,lsNum) {
    //console.log(prodP)
   $.ajax({
        url: $podZanroviPovezano,
        method: "GET",
        type: "json",
        success: (zanrovi) => {
            //console.log(prodP)
            //console.log(ls)
            var l=lsNum
            console.log(l)
            var nz=[]
            //global
            //console.log(l)
            var zz = JSON.parse(zanrovi)
            //console.log(zz)

            for (let z of zz) {
                //console.log(typeof z.category_id)
                //console.log(z.category_id)
                //console.log(l)
                //console.log(l.includes(5))
                if (l.includes(z.category_id)) {
                    nz.push(z.title_id)
                    //console.log("da")
                   // console.log("niz: "+nizNaslovaSaZanrom)
                }
            }
            console.log(nz)
            if (nz != null && nz != undefined && nz != "") {
                if (nz.length != 0) {
                    var products = prodP.filter((x) => {
                        if (nz.indexOf(x.id) != -1) {
                            return 1;
                        }
                    })

                    //return products
                    localStorage.setItem('zanroviNaslovi',products)
                } else {
                    //return prodP
                    localStorage.removeItem('zanroviNaslovi')
                }

            }
            //return nz
            //poveziNasloveZanrove(nizNaslovaSaZanrom)
        }
    })
}

function sortNaziv(prodP) {
    var ls = localStorage.getItem("naziv")
    if (ls != null && ls != undefined && ls != "") {
        if (ls.length != 0) {
            prodP.sort((a, b) => {
                if (ls == "az") {
                    return a.title > b.title ? 1 : -1;
                } else if (ls == "za") {
                    return b.title > a.title ? 1 : -1;
                } else {
                    return 0;
                }
            })
            return prodP
        } else {
            return prodP
        }
    }

    return prodP;
}


function sortCena(prodP) {
    var ls = localStorage.getItem("cena")
    if (ls != null && ls != undefined && ls != "") {
        if (ls.length != 0&&ls!=0) {
            prodP.sort((a, b) => {
                if(ls=="asc"){
                    let fa = a.price,
                        fb = b.price;

                    if (fa < fb) {
                        return -1;
                    }
                    if (fa > fb) {
                        return 1;
                    }
                    return 0;
                }
                else if(ls=="desc"){
                    let fa = a.price,
                        fb = b.price;

                    if (fa < fb) {
                        return 1;
                    }
                    if (fa > fb) {
                        return -1;
                    }
                    return 0;
                }

            })
            return prodP
        } else {
            return prodP
        }
    }

    return prodP;
}
