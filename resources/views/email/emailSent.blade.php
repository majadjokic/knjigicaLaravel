@extends('layouts.layout')

@section('description') Knjigica, online prodavnica knjiga.Imate neko pitanje? Kontaktirajte nas. @endsection
@section('keywords') prodavnica, online kupovina, knjiga, knjige, knjizara @endsection
@section('title') Knjigica - Poruka poslata @endsection

@section('content')
    <div class="container-fluid p-5">
       <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 p-5">
           <h1>Vaša poruka je poslata!</h1>
           <h2>Mi se trudimo da odgovorimo na Vaše poruke što pre.</h2>
           <h3>Dok čekate naš odgovor možete da pogledate <a href="{{route('products')}}" class="ljub">naše proizvode.</a></h3>
       </div>
    </div>


@endsection
