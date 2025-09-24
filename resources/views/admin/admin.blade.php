@extends('layouts.layout')

@section('description') Knjigica, online prodavnica knjiga. Admin @endsection
@section('keywords') admin @endsection
@section('title') Knjigica - Admin @endsection

@section('content')

{{--@if(session()->get('role')==1)--}}
<div class="col-xl-12 p-3">

</div>
    <div class="col-xl-12" name="helpAdmin">
        <p class="font-weight-bold">Dobrodošli na admin stranicu!</p>
        <p>Na ovoj stranici se vidi detaljan pregled aktivnost admina i običnih korisnika (poznatih i nepoznatih).</p>
        <p>Tražite funkcije izmene/dodavanja/brisanja proizvoda?</p>
        <ul>
            <li>Dodavanje proizvoda se nalazi na vrhu stranice <a class="ljub" href="{{route('products')}}">proizvodi</a></li>
            <li>Izmena/brisanje proizvoda se nalazi na vrhu stranice za prikaz pojedinog proizvoda (do nje se dolazi izborom nekog proizvoda sa stranice <a class="ljub" href="{{route('products')}}">proizvodi</a>)</li>
        </ul>
    </div>
    <div class="col-xl-12 d-flex flex-column p-3">
        <div class="col-xl-12" name="visitedPages">
            <h3>Broj poseta svakoj stranici danas</h3>
            <div class="col-xl-12">
                <table class="table table-dark table-striped" name="posete">
                    <thead>
                    <tr>
                        <th scope="col">Stranica</th>
                        <th scope="col">Broj poseta</th>
                        <th scope="col">Datum</th>
                    </tr>
                    </thead>
                    <tbody>
{{--                    ovde upis podataka iz baze--}}
                    @foreach($visit as $v)
                        @if($v->date==date('d.m.Y.'))
                    <tr>
                        <td>{{$v->page}}</td>
                        <td>{{$v->number}}</td>
                        <td>{{$v->date}}</td>
                    </tr>
                    @endif
                    @endforeach

                    </tbody>
                </table>
            </div>
        </div>
        <div class="row col-xl-12 d-flex flex-column" name="userActivity">
            <h3>Aktivnost korisnika</h3>
            <div class="col-xl-12" name="unknownUsers">
                <h4>Neregistrovali/neulogovani korisnici (kontakt, novi korisnici...)</h4>
                <table class="table table-dark table-striped" name="aktivnostiNepoznati">
                    <thead>
                    <tr>
                        <th scope="col">Korisnik</th>
                        <th scope="col">Aktivnost</th>
                        <th scope="col">Datum</th>
                        <th scope="col">Vreme</th>
                    </tr>
                    </thead>
                    <tbody>
                    {{--                    ovde upis podataka iz baze--}}
                    @foreach($act as $a)
                        @if($a->type_user=="unknown")
                            <tr>
                                <td>{{$a->user_name}}</td>
                                <td>{{$a->activity}}</td>
                                <td>{{$a->date}}</td>
                                <td>{{$a->time}}</td>

                            </tr>
                        @endif
                    @endforeach
                    </tbody>
                </table>
            </div>
            <div class="col-xl-12" name="knownUsers">
                <h4>Ulogovani korisnici (logovanje, kupovina, kontakt...)</h4>
                <table class="table table-dark table-striped" name="aktivnostiPoznati">
                    <thead>
                    <tr>
                        <th scope="col">Korisnik</th>
                        <th scope="col">Aktivnost</th>
                        <th scope="col">Datum</th>
                        <th scope="col">Vreme</th>
                    </tr>
                    </thead>
                    <tbody>
                    {{--                    ovde upis podataka iz baze--}}
                    @foreach($act as $a)
                        @if($a->type_user=="known")
                            <tr>
                                <td>{{$a->user_name}}</td>
                                <td>{{$a->activity}}</td>
                                <td>{{$a->date}}</td>
                                <td>{{$a->time}}</td>

                            </tr>
                        @endif
                    @endforeach
                    </tbody>
                </table>
            </div>
        </div>
        <div class="col-xl-12" name="AdminActivity">
            <h3>Aktivnost admina(logovanje, manipulacija proizvoda...)</h3>
            <table class="table table-dark table-striped" name="aktivnostiAdmin">
                <thead>
                <tr>
                    <th scope="col">Korisnik</th>
                    <th scope="col">Aktivnost</th>
                    <th scope="col">Datum</th>
                    <th scope="col">Vreme</th>
                </tr>
                </thead>
                <tbody>
                {{--                    ovde upis podataka iz baze--}}
                @foreach($act as $a)
                    @if($a->type_user=="admin")
                        <tr>
                            <td>{{$a->user_name}}</td>
                            <td>{{$a->activity}}</td>
                            <td>{{$a->date}}</td>
                            <td>{{$a->time}}</td>

                        </tr>
                    @endif
                @endforeach
                </tbody>
            </table>
        </div>

    </div>

{{--@else--}}
{{--    @php--}}
{{--        header("Location: " . URL::to('/'), true, 302);--}}
{{--        exit();--}}
{{--    @endphp--}}
{{--    @endif--}}


@endsection
