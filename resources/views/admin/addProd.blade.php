
@extends('layouts.layout')

@section('description') Knjigica, online prodavnica knjiga. Detalji knjige. @endsection
@section('keywords') prodavnica, online kupovina, knjiga, knjige, knjizara @endsection
@section('title') Admin - Dodaj proizvod @endsection



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

        <div class="col-xl-12 p-3 border-bottom border-top border-dark">

        <p class="font-weight-bold">Pre nego što počnete da popunjavateformu za dodavanje knjige, proverite da li autori za nju već postoje u bazi.</p>
        <select class="form-control col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
            <option>
                Svi pisci iz baze
            </option>
            @foreach($authors as $a)
            <option>
                {{$a->author}}
            </option>
            @endforeach
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
    <div class="col-xl-12 p-3  border-bottom border-top border-dark">
        <p class="font-weight-bold">Pre nego što počnete da popunjavateformu za dodavanje knjige, proverite da li kategorije za nju već postoje u bazi.</p>
        <select class="form-control col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
            <option>
                Sve kategorije iz baze
            </option>
            @foreach($categories as $c)
            <option>
                {{$c->category}}
            </option>
            @endforeach
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
    <div class="p-1">
        <p class="font-weight-bold">Možda ćete posle ovih promena trebati da ponovo učitate stranicu kako bi se promene videle.</p>
    </div>

    <div class="col-xl-12 p-3">
        <h3>Dodaj proizvod</h3>
        <br/>
        <form action="{{route('addProd')}}" method="POST" name="adminDodajProizvod" enctype="multipart/form-data">
            @csrf
            <input class="form-control col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" type="text" name="title" id="title" placeholder="Naslov" >
            <br/>
            <textarea class="form-control col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12"  name="desc" id="desc" placeholder="Opis" ></textarea>
            <br/>
            <input class="form-control col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" type="text" name="formatA" id="formatA" placeholder="Format (pr. 13x20 cm)" >
            <br/>
            <input class="form-control col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" type="text" name="numPages" id="numPages" placeholder="Broj strana" >
            <br/>
            <input class="form-control col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" type="text" name="letter" id="letter" placeholder="Pismo" >
            <br/>
            <input class="form-control col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" type="text" name="coverType" id="coverType" placeholder="Tip korica" >
            <br/>
            <label for="published">Izdato (datum)</label>
            <div name="published">
            <input class="form-control col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" type="text" name="dan" id="dan" placeholder="Dan(broj)" >
                <br/>
                <input class="form-control col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" type="text" name="mesec" id="mesec" placeholder="Mesec(malim slovima)" >
                <br/>
                <input class="form-control col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" type="text" name="godina" id="godina" placeholder="Godina(broj)" >
                <br/>
            </div>
            <br/>
            <input class="form-control col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" type="text" name="isbn" id="isbn" placeholder="ISBN (pr. 978-86-521-4404-4)" >
            <br/>
            <input class="form-control col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" type="text" name="translator" id="translator" placeholder="Prevodilac" >
            <br/>
            <input class="form-control col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" type="text" name="price" id="price" placeholder="Cena" >
            <br/>
            <input class="form-control col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" type="file" id="cover" name="cover">
            <br/>
            <label class="font-weight-bold" for="authors">Pisac/pisci</label>
            <div name="authors">
                @foreach($authors as $a)
                    <div class="d-flex flex-row">
                    <input type="checkbox" name="pisac[]" id="pisac{{$a->id}}"
                        value={{$a->id}}><label for="pisac{{$a->id}}">{{$a->author}}</label>
                    </div>
                @endforeach
            </div>
            <br/>
            <label class="font-weight-bold" for="categories">Žanr/žanrovi</label>
            <div name="categories">
                @foreach($categories as $c)
                    <div class="d-flex flex-row">
                        <input type="checkbox" name="zanr[]" id="zanr{{$c->id}}"
                        value={{$c->id}}><label for="zanr{{$c->id}}">{{$c->category}}</label>
                    </div>
                @endforeach
            </div>
            <br/>
            <input class="form-control col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" type="submit" id="btnADP" name="btnADP">
        </form>
    </div>


{{--    @else--}}
{{--        @php--}}
{{--            header("Location: " . URL::to('/'), true, 302);--}}
{{--            exit();--}}
{{--        @endphp--}}
{{--    @endif--}}


@endsection
