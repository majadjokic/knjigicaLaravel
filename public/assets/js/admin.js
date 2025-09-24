$(document).ready(function() {

    var adm = [
        ["products", "admProducts", proizvodi],
        ["product pictures", "admPictures", slike],
        ["thumbnail", "admThumbnail", thumbnail],
        ["care bleaching", "admCareBleaching", careBleaching],
        ["care drycleaning", "admCareDrycleaning", careDrycleaning],
        ["care drying", "admCareDrying", careDrying],
        ["care ironing", "admCareIroning", careIroning],
        ["care washing", "admCareWashing", careWashing],
        ["collections", "admColections", kolekcije],
        ["size types", "admSizeTypes", velicine],
        ["sizes letters", "admSizesLetters", velicineSlova],
        ["sizes numbers", "admSizesNumbers", velicineBrojevi],
        ["sizes one size", "admSisezOneSize", velicineOneSize],
        ["product sale", "admProductSale", proizvodSnizenje],
        ["sales", "admSales", snizenja],
        ["product types", "admTypes", tipovi],
        ["product units", "admUnits", jedinice],
        ["users", "admUsers", korisnici],
        ["user roles", "admUserRoles", uloge],
        ["user activations", "admactivations", aktivacije],
        ["keys for change pass", "admPassKeys", kljucevi],
        ["orders", "admOrders", porudzbine],
        ["order lists", "admOrderLists", porudzbineListe],
        ["countries", "admCountries", drzave],
        ["main menu", "admMainMenu", meniGlavni],
        ["user menu", "admUserMenu", meniKorisnik],
        ["home link", "admHomeLink", homeLink],
        ["rating", "admRating", ocene]

    ];

    $('.btnadmin').click(function() {
        var data = $(this).data("adminaction")
        for (let a of adm) {
            for (let br = 0; br < adm.length; br++) {
                if (data == a[0]) {
                    dohvatiPodatke(a[1], a[2])
                }
            }
        }
    })
});



function dohvatiPodatke(file, callback) {
    $.ajax({
        url: "models/admin/" + file + ".php",
        method: "POST",
        success: function(response) {
            callback(response.result);
        },
        error: function(err) {
            console.log(err.responseText);
        }
    });
}




function proizvodi(adm) {
    var prikazi = document.getElementById('adminTableShow');
    var ispis = `
    <h2>products</h2>
                    <div class="table-responsive" >
    <table class="table table-dark table-responsive table-bordered table-hover">
    <thead>
        <tr>
        <th>
                id
            </th>
            <th>
                name
            </th>
            <th>
                price
            </th>
            <th>
                description
            </th>
            <th>
                mat
            </th>
            <th>
                coll_id
            </th>
            <th>
                type_id
            </th>
            <th>
                size_type
            </th>
            <th>
                care_washing
            </th>
            <th>
                care_bleaching
            </th>
            <th>
                care_drying
            </th>
            <th>
                care_ironing
            </th>
            <th>
                care_drycleaning
            </th>
            <th>
                active
            </th>
        </tr>
    </thead>
    <tbody>`;
    for (let p of adm) {
        ispis += `<tr>
        <td>
            
                ${p.id}
        </td>
        <td>
            
                ${p.name}
        </td>
        <td>
            
                ${p.price}
        </td>
        <td>
            
                ${p.description}
        </td>
        <td>
            
                ${p.mat}
        </td>
        <td>
            
                ${p.coll_id}
        </td>
        <td>
            
                ${p.type_id}
        </td>
        <td>
            
                ${p.size_type}
        </td>
        <td>
            
                ${p.care_washing}
        </td>
        <td>
            
                ${p.care_bleaching}
        </td>
        <td>
            
                ${p.care_drying}
        </td>
        <td>
            
                ${p.care_ironing}
        </td>
        <td>
            
                ${p.care_drycleaning}
        </td>
        <td>
            
                ${p.active}
        </td>
        
        
</tr>`;
    }

    ispis += `</tbody>
    </table>
    </div>`;


    prikazi.innerHTML = ispis;
}

function slike(adm) {

    var prikazi = document.getElementById('adminTableShow');
    var ispis = `
    <h2>pictures</h2>
                    <div class="table-responsive" >
    <table class="table table-dark table-bordered table-hover">
    <thead>
        <tr>
        <th>
                id
            </th>
            <th>
                prod_id
            </th>
            <th>
                src
            </th>
        </tr>
    </thead>
    <tbody>`;
    for (let p of adm) {
        ispis += `<tr>
        <td>
            
                ${p.id}
        </td>
        <td>
            
                ${p.prod_id}
        </td>
        <td>
            
                ${p.src}
        </td>
</tr>`;
    }

    ispis += `</tbody>
    </table>
    </div>`;



    prikazi.innerHTML = ispis;
}

function tipovi(adm) {
    var prikazi = document.getElementById('adminTableShow');
    var ispis = `
    <h2>types</h2>
                    <div class="table-responsive">
    <table class="table table-dark table-bordered table-hover">
    <thead>
        <tr>
        <th>
                id
            </th>
            <th>
                type
            </th>
            <th>
                for_filter
            </th>
            
        </tr>
    </thead>
    <tbody>`;
    for (let p of adm) {
        ispis += `<tr>
        <td>
            
                ${p.id}
        </td>
        <td>
            
                ${p.type}
        </td>
        <td>
            
                ${p.for_filter}
        </td>
        
        
</tr>`;
    }

    ispis += `</tbody>
    </table>
    </div>`;



    prikazi.innerHTML = ispis;
}

function jedinice(adm) {

    var prikazi = document.getElementById('adminTableShow');
    var ispis = `
    <h2>units</h2>
                    <div class="table-responsive">
    <table class="table table-dark table-bordered table-hover">
    <thead>
        <tr>
        <th>
                id
            </th>
            <th>
                prod_id
            </th>
            <th>
                size_type
            </th>
            <th>
                num_of_units
            </th>
            <th>
                num_of_soled
            </th>
            <th>
                num_of_available
            </th>
            <th>
                num_of_shipped
            </th>
            
        </tr>
    </thead>
    <tbody>`;
    for (let p of adm) {
        ispis += `<tr>
        <td>
            
                ${p.id}
        </td>
        <td>
            
                ${p.prod_id}
        </td>
        <td>
            
                ${p.size_type}
        </td>
        <td>
            
                ${p.num_of_units}
        </td>
        <td>
            
                ${p.num_of_sold}
        </td>
        <td>
            
                ${p.num_of_available}
        </td>
        <td>
            
                ${p.num_of_shipped}
        </td>
        
        
</tr>`;
    }

    ispis += `</tbody>
    </table>
    </div>`;



    prikazi.innerHTML = ispis;
}

function korisnici(adm) {

    var prikazi = document.getElementById('adminTableShow');
    var ispis = `
    <h2>users</h2>
                    <div class="table-responsive">
    <table class="table table-dark table-bordered table-hover">
    <thead>
        <tr>
        <th>
                id
            </th>
            <th>
                first_name
            </th>
            <th>
                last_name
            </th>
            <th>
                username
            </th>
            <th>
                email
            </th>
            <th>
                u_password
            </th>
            <th>
                role_id
            </th>
            <th>
                is_active
            </th>
            
        </tr>
    </thead>
    <tbody>`;
    for (let p of adm) {
        ispis += `<tr>
        <td>
            
                ${p.id}
        </td>
        <td>
            
                ${p.first_name}
        </td>
        <td>
            
                ${p.last_name}
        </td>
        <td>
            
                ${p.username}
        </td>
        <td>
            
                ${p.email}
        </td>
        <td>
            
                ${p.u_password}
        </td>
        <td>
            
                ${p.role_id}
        </td>
        <td>
            
                ${p.is_active}
        </td>
        
        
        
</tr>`;
    }

    ispis += `</tbody>
    </table>
    </div>`;



    prikazi.innerHTML = ispis;
}

function uloge(adm) {

    var prikazi = document.getElementById('adminTableShow');
    var ispis = `
    <h2>user_roles</h2>
                    <div class="table-responsive">
    <table class="table table-dark table-bordered table-hover">
    <thead>
        <tr>
        <th>
                id
            </th>
            <th>
                role
            </th>
            
        </tr>
    </thead>
    <tbody>`;
    for (let p of adm) {
        ispis += `<tr>
        <td>
            
                ${p.id}
        </td>
        <td>
            
                ${p.role}
        </td>
        
        
</tr>`;
    }

    ispis += `</tbody>
    </table>
    </div>`;


    prikazi.innerHTML = ispis;
}

function aktivacije(adm) {

    var prikazi = document.getElementById('adminTableShow');
    var ispis = `
    <h2>to_activate</h2>
                    <div class="table-responsive">
    <table class="table table-dark table-bordered table-hover">
    <thead>
        <tr>
        <th>
            id
            </th>
            <th>
            first_name
            </th>
            <th>
            last_name
            </th>
            <th>
            username
            </th>
            <th>
            email
            </th>
            <th>
            u_password
            </th>
            <th>
            role_id
            </th>
            <th>
            is_active
            </th>
            <th>
            verification_key
            </th>
            <th>
            date_of_request
            </th>
            <th>
            date_of_activation
            </th>

            
        </tr>
    </thead>
    <tbody>`;
    for (let p of adm) {
        ispis += `<tr>
        <td>
            ${p.id}
            </td>
            <td>
            ${p.firs_name}
            </td>
            <td>
            ${p.last_name}
            </td>
            <td>
            ${p.username}
            </td>
            <td>
            ${p.email}
            </td>
            <td>
            ${p.u_password}
            </td>
            <td>
            ${p.role_id}
            </td>
            <td>
            ${p.is_active}
            </td>
            <td>
            ${p.verification_key}
            </td>
            <td>
            ${p.date_of_request}
            </td>
            <td>
            ${p.date_of_activation}
            </td>

        
        
</tr>`;
    }

    ispis += `</tbody>
    </table>
    </div>`;


    prikazi.innerHTML = ispis;
}

function kljucevi(adm) {

    var prikazi = document.getElementById('adminTableShow');
    var ispis = `
    <h2>keys_for_change_pass</h2>
                    <div class="table-responsive">
    <table class="table table-dark table-bordered table-hover">
    <thead>
        <tr>
        <th>
        id
            </th>
            <th>
                user_id
            </th>
            <th>
            user_email
            </th>
            <th>
            key_change_pass
            </th>
            

            
        </tr>
    </thead>
    <tbody>`;
    for (let p of adm) {
        ispis += `<tr>
        <td>
            
                ${p.id}
        </td>
        <td>
            ${p.user_id}
        </td>
        <td>
            ${p.user_email}
        </td>
        <td>
            ${p.key_change_pass}
        </td>

        
        
</tr>`;
    }

    ispis += `</tbody>
    </table>
    </div>`;

    prikazi.innerHTML = ispis;
}

function porudzbine(adm) {

    var prikazi = document.getElementById('adminTableShow');
    var ispis = `
    <h2>orders</h2>
                    <div class="table-responsive">
    <table class="table table-dark table-bordered table-hover">
    <thead>
        <tr>
        <th>
        id
            </th>
            <th>
            user_id
            </th>
            <th>
            order_date
            </th>
            <th>
            user_address
            </th>
            <th>
            city
            </th>
            <th>
            country_id
            </th>

            
        </tr>
    </thead>
    <tbody>`;
    for (let p of adm) {
        ispis += `<tr>
        <td>
            
                ${p.id}
        </td>
        <td>
            ${p.user_id}
        </td>
        <td>
            ${p.order_date}
        </td>
        <td>
            ${p.user_address}
        </td>
        <td>
            ${p.city}
        </td>
        <td>
            ${p.country_id}
        </td>
        
</tr>`;
    }

    ispis += `</tbody>
    </table>
    </div>`;



    prikazi.innerHTML = ispis;
}

function porudzbineListe(adm) {

    var prikazi = document.getElementById('adminTableShow');
    var ispis = `
    <h2>order_lists</h2>
                    <div class="table-responsive">
    <table class="table table-dark table-bordered table-hover">
    <thead>
        <tr>
        <th>
        id
            </th>
            <th>
            order_id
            </th>
            <th>
            product_id
            </th>
            <th>
            prod_size
            </th>
            <th>
            num_of_products
            </th>
            

            
        </tr>
    </thead>
    <tbody>`;
    for (let p of adm) {
        ispis += `<tr>
        <td>
            
                ${p.id}
        </td>
        <td>
            ${p.order_id}
        </td>
        <td>
            ${p.prod_id}
        </td>
        <td>
            ${p.prod_size}
        </td>
        <td>
            ${p.num_prod}
        </td>
        
        
</tr>`;
    }

    ispis += `</tbody>
    </table>
    </div>`;


    prikazi.innerHTML = ispis;
}

function drzave(adm) {
    var prikazi = document.getElementById('adminTableShow');
    var ispis = `
    <h2>countries</h2>
                    <div class="table-responsive">
    <table class="table table-dark table-bordered table-hover">
    <thead>
        <tr>
        <th>
        id
            </th>
            <th>
            country
            </th>
            

            
        </tr>
    </thead>
    <tbody>`;
    for (let p of adm) {
        ispis += `<tr>
        <td>
            
                ${p.id}
        </td>
        <td>
            ${p.country}
        </td>
        
        
        
</tr>`;
    }

    ispis += `</tbody>
    </table>
    </div>`;


    prikazi.innerHTML = ispis;
}

function meniGlavni(adm) {
    var prikazi = document.getElementById('adminTableShow');
    var ispis = `
    <h2>menu_main</h2>
                    <div class="table-responsive">
    <table class="table table-dark table-bordered table-hover">
    <thead>
        <tr>
        <th>
        id
            </th>
            <th>
            href
            </th>
            <th>
            name
            </th>
            

            
        </tr>
    </thead>
    <tbody>`;
    for (let p of adm) {
        ispis += `<tr>
        <td>
            
                ${p.id}
        </td>
        <td>
            ${p.href}
        </td>
        <td>
            ${p.name}
        </td>
        
        
        
        
</tr>`;
    }

    ispis += `</tbody>
    </table>
    </div>`;


    prikazi.innerHTML = ispis;
}

function meniKorisnik(adm) {
    var prikazi = document.getElementById('adminTableShow');
    var ispis = `
    <h2>menu_user</h2>
                    <div class="table-responsive">
    <table class="table table-dark table-bordered table-hover">
    <thead>
        <tr>
        <th>
        id
            </th>
            <th>
            href
            </th>
            <th>
            name
            </th>

            
        </tr>
    </thead>
    <tbody>`;
    for (let p of adm) {
        ispis += `<tr>
        <td>
            
                ${p.id}
        </td>
        <td>
            ${p.href}
        </td>
        <td>
            ${p.name}
        </td>
        
        
        
</tr>`;
    }

    ispis += `</tbody>
    </table>
    </div>`;


    prikazi.innerHTML = ispis;
}


function ocene(adm) {
    var prikazi = document.getElementById('adminTableShow');
    var ispis = `
    <h2>raiting</h2>
                    <div class="table-responsive">
    <table class="table table-dark table-bordered table-hover">
    <thead>
        <tr>
        <th>
        id
            </th>
            <th>
           user_id
            </th>
            <th>
            rating
            </th>
            <th>
            date
            </th>

            
        </tr>
    </thead>
    <tbody>`;
    for (let p of adm) {
        ispis += `<tr>
        <td>
            
                ${p.id}
        </td>
        <td>
            ${p.user_id}
        </td>
        <td>
            ${p.rating}
        </td>
        <td>
            ${p.date}
        </td>
        
        
</tr>`;
    }

    ispis += `</tbody>
    </table>
    </div>`;


    prikazi.innerHTML = ispis;
}

function homeLink(adm) {
    var prikazi = document.getElementById('adminTableShow');
    var ispis = `
    <h2>home_link</h2>
                    <div class="table-responsive">
    <table class="table table-dark table-bordered table-hover">
    <thead>
        <tr>
        <th>
        id
            </th>
            <th>
           description
            </th>
            <th>
            href
            </th>
            <th>
            name
            </th>
            <th>
            start_date
            </th>
            <th>
            end_date
            </th>

            
        </tr>
    </thead>
    <tbody>`;
    for (let p of adm) {
        ispis += `<tr>
        <td>
            
                ${p.id}
        </td>
        <td>
            ${p.description}
        </td>
        <td>
            ${p.href}
        </td>
        <td>
            ${p.name}
        </td>
        <td>
            ${p.start_date}
        </td>
        <td>
            ${p.end_date}
        </td>
        
        
</tr>`;
    }

    ispis += `</tbody>
    </table>
    </div>`;


    prikazi.innerHTML = ispis;
}

function thumbnail(adm) {
    var prikazi = document.getElementById('adminTableShow');
    var ispis = `
    <h2>thumbnail</h2>
                    <div class="table-responsive">
    <table class="table table-dark table-bordered table-hover">
    <thead>
        <tr>
        <th>
        id
            </th>
            <th>
           prod_id
            </th>
            <th>
            src
            </th>
            

            
        </tr>
    </thead>
    <tbody>`;
    for (let p of adm) {
        ispis += `<tr>
        <td>
            
                ${p.id}
        </td>
        <td>
            ${p.prod_id}
        </td>
        <td>
            ${p.src}
        </td>
        
        
</tr>`;
    }

    ispis += `</tbody>
    </table>
    </div>`;


    prikazi.innerHTML = ispis;
}

function careBleaching(adm) {
    var prikazi = document.getElementById('adminTableShow');
    var ispis = `
    <h2>care_bleaching</h2>
                    <div class="table-responsive">
    <table class="table table-dark table-bordered table-hover">
    <thead>
        <tr>
        <th>
        id
            </th>
            <th>
           bleaching
            </th>
            <th>
            src
            </th>
            

            
        </tr>
    </thead>
    <tbody>`;
    for (let p of adm) {
        ispis += `<tr>
        <td>
            
                ${p.id}
        </td>
        <td>
            ${p.bleaching}
        </td>
        <td>
            ${p.src}
        </td>
        
        
        
</tr>`;
    }

    ispis += `</tbody>
    </table>
    </div>`;


    prikazi.innerHTML = ispis;
}

function careDrycleaning(adm) {
    var prikazi = document.getElementById('adminTableShow');
    var ispis = `
    <h2>care_drycleaning</h2>
                    <div class="table-responsive">
    <table class="table table-dark table-bordered table-hover">
    <thead>
        <tr>
        <th>
        id
            </th>
            <th>
           drycleaning
            </th>
            <th>
            src
            </th>
            

            
        </tr>
    </thead>
    <tbody>`;
    for (let p of adm) {
        ispis += `<tr>
        <td>
            
                ${p.id}
        </td>
        <td>
            ${p.drycleaning}
        </td>
        <td>
            ${p.src}
        </td>
        
        
        
</tr>`;
    }

    ispis += `</tbody>
    </table>
    </div>`;


    prikazi.innerHTML = ispis;
}

function careDrying(adm) {
    var prikazi = document.getElementById('adminTableShow');
    var ispis = `
    <h2>care_drying</h2>
                    <div class="table-responsive">
    <table class="table table-dark table-bordered table-hover">
    <thead>
        <tr>
        <th>
        id
            </th>
            <th>
           drying
            </th>
            <th>
            src
            </th>
            

            
        </tr>
    </thead>
    <tbody>`;
    for (let p of adm) {
        ispis += `<tr>
        <td>
            
                ${p.id}
        </td>
        <td>
            ${p.drying}
        </td>
        <td>
            ${p.src}
        </td>
        
        
        
</tr>`;
    }

    ispis += `</tbody>
    </table>
    </div>`;


    prikazi.innerHTML = ispis;
}

function careIroning(adm) {
    var prikazi = document.getElementById('adminTableShow');
    var ispis = `
    <h2>care_ironing</h2>
                    <div class="table-responsive">
    <table class="table table-dark table-bordered table-hover">
    <thead>
        <tr>
        <th>
        id
            </th>
            <th>
           ironing
            </th>
            <th>
            src
            </th>
            

            
        </tr>
    </thead>
    <tbody>`;
    for (let p of adm) {
        ispis += `<tr>
        <td>
            
                ${p.id}
        </td>
        <td>
            ${p.ironing}
        </td>
        <td>
            ${p.src}
        </td>
        
        
        
</tr>`;
    }

    ispis += `</tbody>
    </table>
    </div>`;


    prikazi.innerHTML = ispis;
}

function careWashing(adm) {
    var prikazi = document.getElementById('adminTableShow');
    var ispis = `
    <h2>care_washing</h2>
                    <div class="table-responsive">
    <table class="table table-dark table-bordered table-hover">
    <thead>
        <tr>
        <th>
        id
            </th>
            <th>
           washing
            </th>
            <th>
            src
            </th>
            

            
        </tr>
    </thead>
    <tbody>`;
    for (let p of adm) {
        ispis += `<tr>
        <td>
            
                ${p.id}
        </td>
        <td>
            ${p.washing}
        </td>
        <td>
            ${p.src}
        </td>
        
        
        
</tr>`;
    }

    ispis += `</tbody>
    </table>
    </div>`;


    prikazi.innerHTML = ispis;
}

function kolekcije(adm) {
    var prikazi = document.getElementById('adminTableShow');
    var ispis = `
    <h2>collections</h2>
                    <div class="table-responsive">
    <table class="table table-dark table-bordered table-hover">
    <thead>
        <tr>
        <th>
        id
            </th>
            <th>
           collection
            </th>
            <th>
            date_of_coll
            </th>
            

            
        </tr>
    </thead>
    <tbody>`;
    for (let p of adm) {
        ispis += `<tr>
        <td>
            
                ${p.id}
        </td>
        <td>
            ${p.collection}
        </td>
        <td>
            ${p.date_of_coll}
        </td>
        
        
        
</tr>`;
    }

    ispis += `</tbody>
    </table>
    </div>`;


    prikazi.innerHTML = ispis;
}


function velicine(adm) {
    var prikazi = document.getElementById('adminTableShow');
    var ispis = `
    <h2>size_types</h2>
                    <div class="table-responsive">
    <table class="table table-dark table-bordered table-hover">
    <thead>
        <tr>
        <th>
        id
            </th>
            <th>
           size_type
            </th>
            
            

            
        </tr>
    </thead>
    <tbody>`;
    for (let p of adm) {
        ispis += `<tr>
        <td>
            
                ${p.id}
        </td>
        <td>
            ${p.size_type}
        </td>
        
        
        
</tr>`;
    }

    ispis += `</tbody>
    </table>
    </div>`;


    prikazi.innerHTML = ispis;
}

function velicineSlova(adm) {
    var prikazi = document.getElementById('adminTableShow');
    var ispis = `
    <h2>sizes_letters</h2>
                    <div class="table-responsive">
    <table class="table table-dark table-bordered table-hover">
    <thead>
        <tr>
        <th>
        id
            </th>
            <th>
           size
            </th>
            
            

            
        </tr>
    </thead>
    <tbody>`;
    for (let p of adm) {
        ispis += `<tr>
        <td>
            
                ${p.id}
        </td>
        <td>
            ${p.size}
        </td>
        
        
        
</tr>`;
    }

    ispis += `</tbody>
    </table>
    </div>`;


    prikazi.innerHTML = ispis;
}

function velicineBrojevi(adm) {
    var prikazi = document.getElementById('adminTableShow');
    var ispis = `
    <h2>sizes_numbers</h2>
                    <div class="table-responsive">
    <table class="table table-dark table-bordered table-hover">
    <thead>
        <tr>
        <th>
        id
            </th>
            <th>
           size
            </th>
            
            

            
        </tr>
    </thead>
    <tbody>`;
    for (let p of adm) {
        ispis += `<tr>
        <td>
            
                ${p.id}
        </td>
        <td>
            ${p.size}
        </td>
        
        
        
</tr>`;
    }

    ispis += `</tbody>
    </table>
    </div>`;


    prikazi.innerHTML = ispis;
}

function velicineOneSize(adm) {
    var prikazi = document.getElementById('adminTableShow');
    var ispis = `
    <h2>sizes_one_size</h2>
                    <div class="table-responsive">
    <table class="table table-dark table-bordered table-hover">
    <thead>
        <tr>
        <th>
        id
            </th>
            <th>
           size
            </th>
            
            

            
        </tr>
    </thead>
    <tbody>`;
    for (let p of adm) {
        ispis += `<tr>
        <td>
            
                ${p.id}
        </td>
        <td>
            ${p.size}
        </td>
        
        
        
</tr>`;
    }

    ispis += `</tbody>
    </table>
    </div>`;


    prikazi.innerHTML = ispis;
}

function proizvodSnizenje(adm) {
    var prikazi = document.getElementById('adminTableShow');
    var ispis = `
    <h2>product_sale</h2>
                    <div class="table-responsive">
    <table class="table table-dark table-bordered table-hover">
    <thead>
        <tr>
        <th>
        id
            </th>
            <th>
           prod_id
            </th>
            <th>
            sale_id
            </th>
            
            

            
        </tr>
    </thead>
    <tbody>`;
    for (let p of adm) {
        ispis += `<tr>
        <td>
            
                ${p.id}
        </td>
        <td>
            ${p.prod_id}
        </td>
        <td>
            ${p.sale_id}
        </td>
        
        
        
</tr>`;
    }

    ispis += `</tbody>
    </table>
    </div>`;


    prikazi.innerHTML = ispis;
}

function snizenja(adm) {
    var prikazi = document.getElementById('adminTableShow');
    var ispis = `
    <h2>sales</h2>
                    <div class="table-responsive">
    <table class="table table-dark table-bordered table-hover">
    <thead>
        <tr>
        <th>
        id
            </th>
            <th>
           sale_name
            </th>
            <th>
            sale_procent
            </th>
            <th>
            sale_active
            </th>
            <th>
            start_date
            </th>
            <th>
            end_date
            </th>
            
            

            
        </tr>
    </thead>
    <tbody>`;
    for (let p of adm) {
        ispis += `<tr>
        <td>
            
                ${p.id}
        </td>
        <td>
            ${p.sale_name}
        </td>
        <td>
            ${p.sale_procent}
        </td>
        <td>
            
                ${p.sale_active}
        </td>
        <td>
            ${p.start_date}
        </td>
        <td>
            ${p.end_date}
        </td>
        
        
        
</tr>`;
    }

    ispis += `</tbody>
    </table>
    </div>`;


    prikazi.innerHTML = ispis;
}

function racuni(adm) {
    var prikazi = document.getElementById('adminTableShow');
    var ispis = `
    <h2>bill</h2>
                    <div class="table-responsive">
    <table class="table table-dark table-bordered table-hover">
    <thead>
        <tr>
        <th>
        id
            </th>
            <th>
           order_id
            </th>
            <th>
            total
            </th>
            <th>
            card
            </th>
            
            
            

            
        </tr>
    </thead>
    <tbody>`;
    for (let p of adm) {
        ispis += `<tr>
        <td>
            
                ${p.id}
        </td>
        <td>
            ${p.order_id}
        </td>
        <td>
            ${p.total}
        </td>
        <td>
            
                ${p.card}
        </td>
        
        
        
        
</tr>`;
    }

    ispis += `</tbody>
    </table>
    </div>`;


    prikazi.innerHTML = ispis;
}