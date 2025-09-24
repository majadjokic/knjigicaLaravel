

@extends('layouts.layout')

@section('description') Knjigica, online prodavnica knjiga. Detalji knjige. @endsection
@section('keywords') prodavnica, online kupovina, knjiga, knjige, knjizara @endsection
@section('title') Admin - Izmeni proizvod @endsection



@section('content')
{{--    @if(session()->get('role')==1)--}}
@if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif
    <div class="col-xl-12 p-3">
        <p class="font-weight-bold">Pre nego što počnete da popunjavateformu za izmenu detalja knjige, proverite da li autori za nju već postoje u bazi.</p>
        <select class="form-control col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
            <option>
                Svi pisci iz baze
            </option>
            <option>
                pisac
            </option>
        </select>
        <br/>
        <p class="font-weight-bold">Nema pisca kojeg trežite? Dodajte ga pomoću forme ispod.</p>
        <form action="{{route('dodajAutoraADM')}}" method="POST" name="dodajPisca">
            @csrf
            <input class="form-control col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" type="text" name="pisac" id="pisac">
            <br/>
            <input class="form-control col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" type="submit" name="btnNoviPisac" id="btnNoviPisac">
        </form>
    </div>
    <div class="col-xl-12 p-3">
        <p class="font-weight-bold">Pre nego što počnete da popunjavateformu za izmenu detalja knjige, proverite da li kategorije za nju već postoje u bazi.</p>
        <select class="form-control col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
            <option>
                Sve kategorije iz baze
            </option>
            <option>
                kategorija
            </option>
        </select>
        <br/>
        <p class="font-weight-bold">Nema kategorije koju trežite? Dodajte je pomoću forme ispod.</p>
        <form action="{{route('dodajKategorijuADM')}}" method="POST" name="dodajKategoriju">
            @csrf
            <input class="form-control col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" type="text" name="kategorija" id="kategorija">
            <br/>
            <input class="form-control col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" type="submit" name="btnNovaKategorija" id="btnNovaKategorija">
        </form>
    </div>
    <div class="p-3">
        <p class="font-weight-bold">Možda ćete posle ovih promena trebati da ponovo učitate stranicu kako bi se promene videle.</p>
    </div>
    <div class="p-3">
        {{--prazan prostor--}}
    </div>
    <div class="col-xl-12 p-3">
        <h3>Izmeni proizvod</h3>
        <br/>
        <form action="{{route('updateProd')}}" method="POST" name="adminIzmeniProizvod" enctype="multipart/form-data">
            @csrf
            <input type="hidden" name="prodId" id="prodId" value="{{$proizvodUp->id}}">
            <br/>
            <input class="form-control col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" type="text" name="title" id="title" placeholder="Naslov" value="{{$proizvodUp->title}}">
            <br/>
            <textarea class="form-control col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" name="desc" id="desc" placeholder="Opis">{{$proizvodUp->description}}</textarea>
            <br/>
            <input class="form-control col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" type="text" name="formatA" id="formatA" placeholder="Format" value="{{$proizvodUp->format}}">
            <br/>
            <input class="form-control col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" type="text" name="numPages" id="numPages" placeholder="Broj strana" value="{{$proizvodUp->num_pages}}">
            <br/>
            <input class="form-control col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" type="text" name="letter" id="letter" placeholder="Pismo" value="{{$proizvodUp->letter}}">
            <br/>
            <input class="form-control col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" type="text" name="coverType" id="coverType" placeholder="Tip korica" value="{{$proizvodUp->cover_type}}">
            <br/>
            <input class="form-control col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" type="text" name="published" id="published" placeholder="Izdato" value="{{$proizvodUp->published}}">
            <br/>
            <label for="published">Izdato (datum)</label>
            <br/>
            <br/>
            <p>Trenutni datum izdavanja proizvoda: {{$proizvodUp->published}}</p>
            <div name="published">
                <input class="form-control col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" type="text" name="dan" id="dan" placeholder="Dan(broj)">
                <br/>
                <input class="form-control col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" type="text" name="mesec" id="mesec" placeholder="Mesec(malim slovima)">
                <br/>
                <input class="form-control col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" type="text" name="godina" id="godina" placeholder="Godina(broj)">
                <br/>
            </div>
            <br/>
            <input class="form-control col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" type="text" name="isbn" id="isbn" placeholder="ISBN" value="{{$proizvodUp->isbn}}">
            <br/>
            <input class="form-control col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" type="text" name="translator" id="translator" placeholder="Prevodilac" value="{{$proizvodUp->translator}}">
            <br/>
            <input class="form-control col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" type="text" name="price" id="price" placeholder="Cena" value="{{$proizvodUp->price}}">
            <br/>
            <label for="coverTrenutno">Trenutna naslovna korica</label>
            <br/>
            <input class="form-control col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" type="text" disabled id="coverTrenutno" value="{{$proizvodUp->cover}}">
            <br/>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                    <img class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" src="{{asset('assets/img/proizvodi/'.$proizvodUp->cover)}}">
                </div>
            <br/>
            <input class="form-control col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" type="file" id="cover" name="cover">
            <br/>
            <label class="font-weight-bold" for="authors">Pisac/pisci</label>
            <div name="authors">
                @foreach($authors as $a)
                    @if(in_array($a->id,explode(" ", session()->get('prodAut'))))
                        <div class="d-flex flex-row">
                            <input type="checkbox" name="pisac[]" id="pisac{{$a->id}}" value={{$a->id}} checked>
                            <label for="pisac{{$a->id}}">{{$a->author}}</label>
                        </div>
                    @else
                    <div class="d-flex flex-row">
                        <input type="checkbox" name="pisac[]" id="pisac{{$a->id}}" value={{$a->id}} >
                        <label for="pisac{{$a->id}}">{{$a->author}}</label>
                    </div>
                    @endif
                @endforeach
            </div>
            <br/>
            <label class="font-weight-bold" for="categories">Žanr/žanrovi</label>
            <div name="categories">
                @foreach($categories as $c)
                    @if(in_array($c->id,explode(" ", session()->get('prodCat'))))
                        <div class="d-flex flex-row">
                            <input type="checkbox" name="zanr[]" id="zanr{{$c->id}}" value={{$c->id}} checked>
                            <label for="zanr{{$c->id}}">{{$c->category}}</label>
                        </div>
                    @else
                        <div class="d-flex flex-row">
                            <input type="checkbox" name="zanr[]" id="zanr{{$c->id}}" value={{$c->id}} >
                            <label for="zanr{{$c->id}}">{{$c->category}}</label>
                        </div>
                    @endif
                @endforeach
            </div>

            <br/>
            <input class="form-control col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" type="submit" id="btnAIP" name="btnAIP">
        </form>
    </div>



{{--    @else--}}
{{--        @php--}}
{{--            header("Location: " . URL::to('/'), true, 302);--}}
{{--            exit();--}}
{{--        @endphp--}}
{{--    @endif--}}

@endsection
