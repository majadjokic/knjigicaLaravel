@extends('layouts.layout')

@section('description') Knjigica, online prodavnica knjiga. Sign up. @endsection
@section('keywords') prodavnica, online kupovina, sign up @endsection
@section('title') Knjigica - Sign up @endsection

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
        @if (session()->has('passWrong'))
            <div class="alert alert-danger">
                <ul>
                    <li>{{session()->get('passWrong')}}</li>
                </ul>
            </div>
        @endif
    <form action="{{route('signupGo')}}" id="signUpForm" name="singUpForm" method="post">
        @csrf
        <div class="d-flex flex-column justify-content-around">
            <div class="row">
                <div class="container col-xl-4 col-lg-4 col-md-12 col-sm-12 p-2">
                    <p>Ime</p>
                    <input type="text" class="form-control" name="firstNameS" id="firstNameS">

                </div>
                <div class="container col-xl-4 col-lg-4 col-md-12 col-sm-12 p-2">
                    <p>Prezime</p>
                    <input type="text" class="form-control" name="lastNameS" id="lastNameS">

                </div>
                <div class="container col-xl-4 col-lg-4 col-md-12 col-sm-12 p-2">
                    <p>Vaš username</p>
                    <input class="form-control" type="text" name="userNameS" id="userNameS" >

                </div>
            </div>
            <div class="row">
                <div class="container col-xl-4 col-lg-4 col-md-12 col-sm-12 p-2">
                    <p>Vaša email adresa</p>
                    <input class="form-control" type="email" name="userMailS" id="userMailS" >

                </div>
                <div class="container col-xl-4 col-lg-4 col-md-12 col-sm-12 p-2">
                    <p>Vaša lozinka</p>
                    <input class="form-control" type="password" name="userPassS" id="userPassS">

                </div>
                <div class="container col-xl-4 col-lg-4 col-md-12 col-sm-12 p-2">
                    <p>Potvrdite vašu lozinku</p>
                    <input class="form-control" type="password" name="userPassConfS" id="userPassConfS">

                </div>
            </div>


            <div class="row d-flex justify-content-center p-2">
                <input class="btn text-light p-2 m-3" type="submit" name="signupS" id="signupS" value="Sign up">
            </div>
        </div>
    </form>
    <div class="row d-flex justify-content-center">
        <a class="ljub" href="{{route("login")}}">Već imate nalog? Ulogujte se!</a>
    </div>
</div>



@endsection
