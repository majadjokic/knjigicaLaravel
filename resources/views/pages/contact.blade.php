@extends('layouts.layout')

@section('description') Knjigica, online prodavnica knjiga.Imate neko pitanje? Kontaktirajte nas. @endsection
@section('keywords') prodavnica, online kupovina, knjiga, knjige, knjizara @endsection
@section('title') Knjigica - Kontakt @endsection

@section('content')

    @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif


    <div class="p-5">
        <form action="{{route('send')}}" id="contactForm" method="POST">
            @csrf
            <div class="row d-flex flex-xl-row">
                <div class="mb-3 col-xl-4">
                    <label for="conFName" class="form-label">Ime</label>
                    <input type="text" class="form-control" id="conFName" name="firstNameC">

                </div>
                <div class="mb-3 col-xl-4">
                    <label for="conLName" class="form-label">Prezime</label>
                    <input type="text" class="form-control" id="conLName" name="lastNameC">

                </div>
                <div class="mb-3 col-xl-4">
                    <label for="conEmail" class="form-label">Vaša email adresa</label>
                    <input type="email" class="form-control" id="conEmail" name="emailC">

                </div>

            </div>
            <div class="row">
                <div class="mb-3 col-xl-12">
                    <label for="conEmailText" class="form-label">Tekst poruke</label>
                    <textarea id="conEmailText" rows="10" class="form-control" name="textC"></textarea>
                </div>
            </div>
            <button type="submit" class="btn" id="conButton" name="submitC">Pošalji</button>
        </form>
    </div>


@endsection
