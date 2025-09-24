$(document).ready(() => {
    document.getElementById("prodBtn").addEventListener('click', prodCheck)
    document.getElementById("picBtn").addEventListener('click', picCheck)
    document.getElementById("collBtn").addEventListener('click', collCheck)
    document.getElementById("prodSaleBtn").addEventListener('click', psCheck)
    document.getElementById("saleBtn").addEventListener('click', saleCheck)
    document.getElementById("typeBtn").addEventListener('click', typeCheck)
    document.getElementById("unitsBtn").addEventListener('click', unitsCheck)
    document.getElementById("usersBtn").addEventListener('click', usersCheck)
    document.getElementById("userRolesBtn").addEventListener('click', userRoleCheck)
    document.getElementById("thumBtn").addEventListener('click', thumbnailCheck)
})

function prodCheck() {

    var prodNiz = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]


    var naziv = document.getElementById('name').value
    var wNaziv = document.getElementById('wProdName')
    var eregN = /^[a-zšđčćž A-ZŠĐČĆŽ][a-zšđčćž A-ZŠĐČĆŽ \s]{1,99}$/


    var cena = document.getElementById('price').value
    var wCena = document.getElementById('wProdPrice')
    var eregC = /^[0-9]{6}$/


    var opis = document.getElementById('desc').value
    var wOpis = document.getElementById('wProdDesc')
    var eregO = /^[a-zšđčćž A-ZŠĐČĆŽ \-][a-zšđčćž A-ZŠĐČĆŽ \. \, \- 0-9 \n]{499}$/


    var mat = document.getElementById('mat').value
    var wMat = document.getElementById('wProdMat')
    var eregMat = /^[a-zšđčćž A-ZŠĐČĆŽ 0-9][a-zšđčćž A-ZŠĐČĆŽ \; \s \: \% \, 0-9 \n]{119}$/


    var kolekcija = document.getElementById('collId').value
    var wKol = document.getElementById('wProdCollId')


    var tip = document.getElementById('typeId').value
    var wTip = document.getElementById('wProdTypeId')


    var velicina = document.getElementById('sizeType').value
    var wVelicina = document.getElementById('wProdSizeType')


    var cw = document.getElementById('careW').value
    var wCW = document.getElementById('wProdCareW')


    var cb = document.getElementById('careB').value
    var wCB = document.getElementById('wProdCareB')


    var cd = document.getElementById('careD').value
    var wCD = document.getElementById('wProdCareD')


    var ci = document.getElementById('careI').value
    var wCI = document.getElementById('wProdCareI')


    var cdc = document.getElementById('careDC').value
    var wCDC = document.getElementById('wProdCareDC')


    var active = document.getElementById('active').value
    var wActive = document.getElementById('wProdActive')



    if (!eregN.test(naziv)) {
        wNaziv.innerHTML = "Niste pravilno uneli naziv proizvoda. Naziv ne sme imatibrojeve niji specijalne karaktere u sebi."
        prodNiz[0] = 1
    } else {
        wNaziv.innerHTML = ""
        prodNiz[0] = 0
    }
    if (!eregC.test(cena)) {
        wCena.innerHTML = "Niste pravilno uneli cenu proizvoda.Cena prizvoda može biti samo ceo broj u dužini od 6 cifara."
        prodNiz[1] = 1
    } else {
        wCena.innerHTML = ""
        prodNiz[1] = 0
    }
    if (!eregO.test(opis)) {
        wOpis.innerHTML = "Niste pravilno uneli opis proizvoda. Ne sme sadržati karaktere * + % $ # _ ! & @ itd..."
        prodNiz[2] = 1
    } else {
        wOpis.innerHTML = ""
        prodNiz[2] = 0
    }
    if (!eregMat.test(mat)) {
        wMat.innerHTML = "Niste pravilno uneli materijal/sastav proizvoda. Ne sme sadržati karaktere * + $ # _ ! & @ itd... "
        prodNiz[3] = 1
    } else {
        wMat.innerHTML = ""
        prodNiz[3] = 0
    }
    if (kolekcija == 0) {
        wKol.innerHTML = "Morate izabrati količinu."
        prodNiz[4] = 1
    } else {
        wKol.innerHTML = ""
        prodNiz[4] = 0
    }
    if (tip == 0) {
        wTip.innerHTML = "Morate izabrati tip."
        prodNiz[5] = 1
    } else {
        wTip.innerHTML = ""
        prodNiz[5] = 0
    }
    if (velicina == 0) {
        wVelicina.innerHTML = "Morate izabrati tip veličine."
        prodNiz[6] = 1
    } else {
        wVelicina.innerHTML = ""
        prodNiz[6] = 0
    }
    if (cw == 0) {
        wCW.innerHTML = "Morate izabrati način pranja."
        prodNiz[7] = 1
    } else {
        wCW.innerHTML = ""
        prodNiz[7] = 0
    }
    if (cb == 0) {
        wCB.innerHTML = "Morate izabrati način izbeljivanja."
        prodNiz[8] = 1
    } else {
        wCB.innerHTML = ""
        prodNiz[8] = 0
    }
    if (cd == 0) {
        wCD.innerNTML = "Morate izabrati način sušenja."
        prodNiz[9] = 1
    } else {
        wCD.innerNTML = ""
        prodNiz[9] = 0
    }
    if (ci == 0) {
        wCI.innerHTML = "Morate izabrati način peglanja."
        prodNiz[10] = 1
    } else {
        wCI.innerHTML = ""
        prodNiz[10] = 0
    }
    if (cdc == 0) {
        wCDC.innerHTML = "Morate izabrati način hemijskog čišćenja."
        prodNiz[11] = 1
    } else {
        wCDC.innerHTML = ""
        prodNiz[11] = 0
    }
    if (active == "n") {
        wActive.innerHTML = "Morate izabrati da li je proizvod aktivan."
        prodNiz[12] = 1
    } else {
        wActive.innerHTML = ""
        prodNiz[12] = 0
    }

    if (prodNiz.includes(1)) {
        return false
    } else {
        return true
    }

}

function collCheck() {

    collNiz = [1, 1]

    var coll = document.getElementById('collection').value
    var wColl = document.getElementById('wCollColl')
    var eregColl = /^[a-zšđčćž A-ZŠĐČĆŽ][a-zšđčćž A-ZŠĐČĆŽ \s]{1,29}$/


    var cDate = document.getElementById('cDate').value
    var wDate = document.getElementById('wCollDate')



    if (!eregColl.test(coll)) {
        wColl.innerHTML = "Morate ubaciti ime kolekcije. Može imati samo razmake, velika i mala slova."
        collNiz[0] = 1
    } else {
        wColl.innerHTML = ""
        collNiz[0] = 0
    }
    if (cDate == "") {
        wDate.innerHTML = "Morate ubaciti datum."
        collNiz[1] = 1
    } else {
        wDate.innerHTML = ""
        collNiz[1] = 0
    }


    if (collNiz.includes(1)) {
        return false
    } else {
        return true
    }

}


function saleCheck() {


    saleNiz = [1, 1, 1, 1, 1]

    var name = document.getElementById('saleName').value
    var wName = document.getElementById('wSaleName')
    var eregName = /^[a-zšđčćž A-ZŠĐČĆŽ][a-zšđčćž A-ZŠĐČĆŽ \s \']{1,19}$/


    var proc = document.getElementById('saleprocent').value
    var wProc = document.getElementById('wSaleProcent')
    var eregProc = /[0-9]{1,2}/


    var active = document.getElementById('saleActive').value
    var wActive = document.getElementById('wSaleActive')



    var dateStart = document.getElementById('saleDateStart').value
    var wStart = document.getElementById('wSaleStart')



    var dateEnd = document.getElementById('saleDateEnd').value
    var wEnd = document.getElementById('wSaleEnd')



    if (!eregName.test(name)) {
        wName.innerHTML = "Morate da ubacite ime popusta. Može da sadrži razmake, velika i mala slova."
        saleNiz[0] = 1
    } else {
        wName.innerHTML = ""
        saleNiz[0] = 0
    }
    if (!eregProc.test(proc)) {
        wProc.innerHTML = "Niste pravilno uneli popust. Može biti od 0 do 99."
        saleNiz[1] = 1
    } else {
        wProc.innerHTML = ""
        saleNiz[1] = 0
    }
    if (active == "n") {
        wActive.innerHTML = "Morate izabrati da li je poust aktivan."
        saleNiz[2] = 1
    } else {
        wActive.innerHTML = ""
        saleNiz[2] = 0
    }
    if (dateStart == "") {
        wStart.innerHTML = "Morate da ubacite početni datum."
        saleNiz[3] = 1
    } else {
        wStart.innerHTML = ""
        saleNiz[3] = 0
    }
    if (dateEnd == "") {
        wEnd.innerHTML = "Morate da ubacite krajnji datum."
        saleNiz[4] = 1
    } else {
        wEnd.innerHTML = ""
        saleNiz[4] = 0
    }



    if (saleNiz.includes(1)) {
        return false
    } else {
        return true
    }


}


function typeCheck() {

    typeNiz = [1, 1]


    var type = document.getElementById('type').value
    var wType = document.getElementById('wType')
    var eregType = /^[a-zšđčćž]{1,149}$/


    var typeFil = document.getElementById('typeForFilter').value
    var wTypeFil = document.getElementById('wTypeForFilter')
    var eregFil = /^[A-ZŠĐČĆŽ][a-zšđčćž]{1,148}$/



    if (!eregType.test(type)) {
        wType.innerHTML = "Morate ubaciti tip priozvoda. Može biti samo mala slova bez razmaka."
        typeNiz[0] = 1
    } else {
        wType.innerHTML = ""
        typeNiz[0] = 0
    }
    if (!eregFil.test(typeFil)) {
        wTypeFil.innerHTML = "Morate ubaciti nazi tipa koji će se prikazivati na stranici sa proizvodima filterima. Može početi sa velikim slovom, a sma ostala moraju biti mala."
        typeNiz[1] = 1
    } else {
        wTypeFil.innerHTML = ""
        typeNiz[1] = 0
    }

    if (typeNiz.includes(1)) {
        return false
    } else {
        return true
    }


}

function unitsCheck() {

    unitsNiz = [1, 1, 1, 1]


    var prod = document.getElementById('unitsProdId').value
    var wProd = document.getElementById('wUnitsProdId')


    var sizeType = document.getElementById('unitsSizeType').value
    var wSizeType = document.getElementById('wUnitsSizeType')


    var sl = document.getElementById('unitsSizeL').value
    var sn = document.getElementById('unitsSizeN').value
    var so = document.getElementById('unitsSizeO').value
    var s = [sl, sn, so]
    var broj = 0
    var wSize = document.getElementById('wUnitsSize')


    var num = document.getElementById('unitsNumber').value
    var wNum = document.getElementById('wUnitsNumber')
    var eregNum = /^[0-9]{1,11}$/



    if (prod == 0) {
        wProd.innerHTML = "Morate izabrati proizvod"
        unitsNiz[0] = 0
    } else {
        wProd.innerHTML = ""
        unitsNiz[0] = 1
    }
    if (sizeType == 0) {
        wSizeType.innerHTML = "Morate izabrati tip veličine"
        unitsNiz[1] = 1
    } else {
        wSizeType.innerHTML = ""
        unitsNiz[1] = 0
    }
    for (let i in s) {
        if (s[i] != 0) {
            broj++
        }
    }
    if (broj > 1) {
        wSize.innerHTML = "Morate izabrati samo JEDNU OD TRI ponuđenih vrsta."
        unitsNiz[2] = 1
    } else if (broj = 1) {
        wSize.innerHTML = ""
        unitsNiz[2] = 0
    }
    if (!eregNum.test(num)) {
        wNum.innerHTML = "Morate ubaciti CEO broj jedinica proizvoda."
        unitsNiz[3] = 1
    } else {
        wNum.innerHTML = ""
        unitsNiz[3] = 0
    }

    if (unitsNiz.includes(1)) {
        return false
    } else {
        return true
    }

}

function usersCheck() {

    userNiz = []



    var ime = document.getElementById('usersFirstName').value
    var wIme = document.getElementById('wUsersFirstName')
    var eregIme = /^([A-ZĐĆČŽŠ][a-zđćčšž]{1,19}\-{0,1}){1,2}$/


    var prezime = document.getElementById('usersLastName').value
    var wPrezime = document.getElementById('wUsersLastName')
    var eregPrezime = /^([A-ZĐĆČŽŠ][a-zđćčšž]{1,19}\-{0,1}){1,2}$/


    var username = document.getElementById('usersUsername').value
    var wUsername = document.getElementById('wUsersUsername')
    var eregUsername = /^([\_\d a-z A-Z]*){1,29}$/


    var mejl = document.getElementById('usersEmail').value
    var wMejl = document.getElementById('wUsersEmail')
    var eregEmail = /^[a-z][\-\_\.\!\d a-z]*\@[a-z]{2,10}(\.[a-z]{2,3}){1,2}$/


    var pass = document.getElementById('usersPassword').value
    var wPass = document.getElementById('wUsersPassword')
    var eregPass = /^([\@\?\!\$\#\d a-z A-Z]*){8,29}$/


    var uloga = document.getElementById('usersRole').value
    var wUloga = document.getElementById('wUsersRole')


    var act = document.getElementById('usersActive').value
    var wAct = document.getElementById('wUsersActive')



    if (!eregIme.test(ime)) {
        wIme.innerHTML = "Niste pravilno uneli ime. Budite sigurni da je početno slovo veliko, a da su sva ostala mala slova i ako imate dva imena da ih razdvojite - (primer Ana-Marija)."
        userNiz[0] = 1
    } else {
        wIme.innerHTML = ""
        userNiz[0] = 0
    }
    if (!eregPrezime.test(prezime)) {
        wPrezime.innerHTML = "Niste pravilno uneli prezime. Budite sigurni da je početno slovo veliko, a da su sva ostala mala slova i ako imate dva prezimena da ih razdvojite - (primer Perić-Lazić)."
        userNiz[1] = 1
    } else {
        wPrezime.innerHTML = ""
        userNiz[1] = 0
    }
    if (!eregUsername.test(username)) {
        wUsername.innerHTML = "Niste pravilno uneli vaše korisničko ime. Budite sigurni da nema razmaka ili specijalnih karaktera kao što su !    @   #   $   %   ^   &    *   (  )  -  +  =  '  \""
        userNiz[2] = 1
    } else {
        wUsername.innerHTML = ""
        userNiz[2] = 0
    }
    if (!eregEmail.test(mejl)) {
        wMejl.innerHTML = "Niste pravilno uneli vaš email (primer maja@gmail.com)"
        userNiz[3] = 1
    } else {
        wMejl.innerHTML = ""
        userNiz[3] = 0
    }
    if (!eregPass.test(pass)) {
        wPass.innerHTML = "Niste pravilno uneli vašu lozinku. Vaša lozinka MORA imati barem 8 karaktera i NESME sadrzati %   ^   &    *   (  )  -  +  =  '  _  \""
        userNiz[4] = 1
    } else {
        wPass.innerHTML = ""
        userNiz[4] = 0
    }
    if (uloga == 0) {
        wUloga.innerHTML = "Niste izabrali ulogu"
        userNiz[5] = 1
    } else {
        wAct.innerHTML = "Niste izabrali da li je korisnik aktivan"
        userNiz[5] = 0
    }





    if (userNiz.includes(1)) {
        return false
    } else {
        return true
    }
}

function userRoleCheck() {
    roleNiz = [1]
    var uloga = document.getElementById('userRolesRole').value
    var wUloga = document.getElementById('wUserRolesRole')
    var eregUloga = /^[a-zšđčćž \s]{1,30}$/


    if (!eregUloga.test(uloga)) {
        wUloga.innerHTML = "Morate da stavite ulogu. Može da sadrži samo mala slova i razmake."
        roleNiz[0] = 1
    } else {
        wUloga.innerHTML = ""
        roleNiz[0] = 0
    }

    if (roleNiz.includes(1)) {
        return false
    } else {
        return true
    }

}


function thunbnailCheck() {


    thumNiz = [1]

    var thum = document.getElementById('thumProd').value
    var wThum = document.getElementById('wThumProdId')

    if (thum == 0) {
        wThum.innerHTML = "Morate izabrati proizvod"
        thumNiz[0] = 1
    } else {
        wThum.innerHTML = ""
        thumNiz[0] = 0
    }



    if (roleNiz.includes(1)) {
        return false
    } else {
        return true
    }

}


function picCheck() {

    picNiz = [1]


    var pic = document.getElementById('picProd').value
    var wPic = document.getElementById('wPicProdId')
    if (pic == 0) {
        wPic.innerHTML = "Morate izabrati proizvod."
        picNiz[0] = 1
    } else {
        wPic.innerHTML = ""
        picNiz[0] = 0
    }






    if (picNiz.includes(1)) {
        return false
    } else {
        return true
    }

}


function psCheck() {

    psNiz = [1, 1]


    var prod = document.getElementById('prodId').value
    var wProd = document.getElementById('wProdSaleProdId')


    var sale = document.getElementById('saleId').value
    var wSale = document.getElementById('wProdSaleSaleId')


    if (prod == 0) {
        wProd.innerHTML = "Morate izabrati proizvod"
        psNiz[0] = 1
    } else {
        wProd.innerHTML = ""
        psNiz[0] = 0
    }
    if (sale == 0) {
        wSale.innerHTML = "Morate izabrati popust"
        psNiz[1] = 1
    } else {
        wSale.innerHTML = ""
        psNiz[1] = 0
    }





    if (psNiz.includes(1)) {
        return false
    } else {
        return true
    }
}