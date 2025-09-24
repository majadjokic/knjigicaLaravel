@extends('layouts.layout')

@section('description') Knjigica, online prodavnica knjiga. Ovde su proizvodi koje ste stavili u korpu. @endsection
@section('keywords') prodavnica, online kupovina, kupi @endsection
@section('title') Knjigica - Kasa @endsection

@section('content')
    @if(session()->has('user')&&session()->has('checkoutDone'))
        <div class="container-fluid d-flex flex-column justify-content-cener align-items-center p-5">
            <h1>Hvala puno!</h1>
            <h3>Vaša porudžbina je sačuvana.</h3>
        <br>
            <h4><a class="ljub" href="{{route('products')}}">Vrati me na proizvode</a></h4>
        <br></div>
        </div>
    @else

        @php
            header("Location: " . URL::to('/'), true, 302);
            exit();
        @endphp
    @endif
@endsection
