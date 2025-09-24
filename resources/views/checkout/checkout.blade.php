@extends('layouts.layout')

@section('description') Knjigica, online prodavnica knjiga. Ovde su proizvodi koje ste stavili u korpu. @endsection
@section('keywords') prodavnica, online kupovina, kupi @endsection
@section('title') Knjigica - Kasa @endsection

@section('content')
    @if(session()->has('user')&&session()->has('korpaId'))
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
            @if (session()->has('drzavaWrong'))
                <div class="alert alert-danger">
                    <ul>
                        <li>{{session()->get('drzavaWrong')}}</li>
                    </ul>
                </div>
            @endif
            @if (session()->has('karticaWrong'))
                <div class="alert alert-danger">
                    <ul>
                        <li>{{session()->get('karticaWrong')}}</li>
                    </ul>
                </div>
            @endif
            <form  action="{{route('checkoutCheck')}}" id="checkoutForm" name="checkoutForm" method="post">
                @csrf
                <input type="hidden" name="korpaId" value="{{session()->get('korpaId')}}">
                <input type="hidden" name="ukupnaCena" value="{{$ukupnaCena}}">
                <div class="d-flex flex-column justify-content-center align-items-center flex-column">
                    <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 p-2">
                        <h3>Ukupna cena vaše porudžbine</h3>
                        <h4>{{$ukupnaCena}} RSD</h4>


                    </div>
                    <div class="d-flex flex-column col-xl-4 col-lg-4 col-md-12 col-sm-12 p-2">
                        <p>Način plaćanja</p>
                        <div class="d-flex flex-row align-items-center col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <input type="radio" name="nacinPlacanja" id="npPoPouzecu" value="pouzece">
                            <label for="npPoPouzecu">Po pouzeću</label>
                        </div>
                        <div class="d-flex flex-row align-items-center col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <input type="radio" name="nacinPlacanja" id="npKartica" value="kartica">
                            <label for="npKartica">Kartica</label>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 p-2">
                        <p>Broj kartice (ako placate karticom)</p>
                        <input type="text" class="form-control" name="kartica" id="kartica">
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 p-2">
                        <p>Država</p>
                        <select class="form-control" name="drzava">
                            <option value=0>Drzava</option>
                            @foreach($drzave as $d)
                                <option value={{$d->id}}>{{$d->country}}</option>
                            @endforeach

                        </select>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 p-2">
                        <p>Grad</p>
                        <input type="text" class="form-control" name="grad" id="grad">
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 p-2">
                        <p>Adresa</p>
                        <input type="text" class="form-control" name="adresa" id="adresa">
                    </div>

                    <div class="d-flex justify-content-center">
                        <input class="btn text-light p-2 m-3" type="submit" name="btnCHO" id="btnCHO" value="Završite kupovinu"/>
                    </div>
                    <div class="d-flex justify-content-center">
                        <a class="ljub" href="{{route('cart')}}">Predomislili ste se? Vratite se na korpu.</a>
                    </div>
                </div>
            </form>


        </div>
    @else

        @php
            header("Location: " . URL::to('/'), true, 302);
            exit();
        @endphp
    @endif
@endsection

