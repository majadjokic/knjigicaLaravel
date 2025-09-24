@extends('layouts.layout')

@section('description') Knjigica, online prodavnica knjiga. Log in. @endsection
@section('keywords') prodavnica, online kupovina, knjiga, knjige, knjizara @endsection
@section('title') Knjigica - Log In @endsection

@section('content')
<div class="container-fluid p-5">
    @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif
        @if (session()->has('emailWrong'))
            <div class="alert alert-danger">
                <ul>
                    <li>{{session()->get('emailWrong')}}</li>
                </ul>
            </div>
        @endif
        @if (session()->has('passWrong'))
            <div class="alert alert-danger">
                <ul>
                    <li>{{session()->get('passWrong')}}</li>
                </ul>
            </div>
        @endif
    <form  action="{{route('loginGo')}}" id="logInForm" name="logInForm" method="post">
        @csrf
        <div class="d-flex flex-column justify-content-center align-items-center flex-column">
            <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 p-2">
                <p>Vaša email adresa</p>
                <input type="text" class="form-control" name="userMailL" id="userMailL">

            </div>
            <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 p-2">
                <p>Vaša šifra</p>
                <input type="password" class="form-control" name="userPassL" id="userPassL">
            </div>
            <div class="d-flex justify-content-center">
                <input class="btn text-light p-2 m-3" type="submit" name="loginL" id="loginL" value="Ulogujte se"/>
            </div>
        </div>
    </form>

    <div class="d-flex justify-content-center p-5">
        <a class="ljub" href="{{route('signup')}}">Nemate nalog? Prijavite se.</a>
    </div>
</div>
@endsection
