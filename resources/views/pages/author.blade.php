@extends('layouts.layout')

@section('description') Knjigica, online prodavnica knjiga. Upoznajte autora. @endsection
@section('keywords') prodavnica, online kupovina, knjizara, autor @endsection
@section('title') Knjigica - Autor @endsection

@section('content')


    <div class="container-fluid d-flex flex-xl-row flex-lg-row flex-md-row flex-sm-row flex-column p-5">
        <div class="container col-xl-7 col-lg-6 col-md-6 col-sm-6 col-12">
            <p>Zdravo! Ja sam Maja Đokić, Web programer iz Srbije. Trenutno sam student Visoke ICT škole. Vešta sam sa HTML-om 5, CSS-om 3, XML-om, XSL-om, Sass-om, dinamičkim dizajnom, SEO potimizacijom, JavaScript-om, jQuery-em i PHP-om.</p>
            <p>Ako želite da vidite više mojih projekata ovde je <a target="_blank" href="https://maja-djokic-portfolio.netlify.app/" class="ljub">moj portfolio</a>.</p>

            <a target="_blank" href="{{asset('./assets/dokumentacijaKnjigica.pdf')}}" class="btn purple text-light" >Dokumentacija ovog sajta</a>








        </div>
        <div class="container col-xl-5 col-lg-6 col-md-6 col-sm-6 col-12 d-flex justify-content-center align-items-center">
            <img src="{{asset('assets/img/autor.webp')}}" alt="Author" class="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-10" />
        </div>
    </div>
@endsection
