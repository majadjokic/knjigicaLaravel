@extends('layouts.layout')

@section('description') Dobrodošli u Stich Heart, online prodavnicu odeće i aksesoara. @endsection
@section('keywords') prodavnica, online kupovina, knjiga, knjige, knjizara @endsection
@section('title') Knjigica - Početna @endsection

@section('content')
    <div id="bgImg" class="p-5 d-flex justify-content-center align-content-center">
        <div class="p-5 d-flex justify-content-center align-content-center flex-column">
            <div class="p-5 dajBoju">
                <div id="dinamickiHome">

                    <div class="col-12 d-flex justify-content-center">
                        <h3 id="opis">Knjigica - online knjižara</h3>
                    </div>
                    <div class="col-12 p-2 d-flex justify-content-center align-content-center">
                        <a class="btn" href="{{route("products")}}">Pogledajte našu ponudu</a>
                    </div>

                </div>
            </div>

        </div>
    </div>
@endsection
