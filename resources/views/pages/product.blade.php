
@extends('layouts.layout')

@section('description') Knjigica, online prodavnica knjiga. Detalji knjige. @endsection
@section('keywords') prodavnica, online kupovina, knjiga, knjige, knjizara @endsection
@section('title') Knjigica - Proizvod @endsection



@section('content')
    @if($product->active==1)
    @if(session()->get('role')==1)
    <div class="container-fluid p-3 d-flex align-content-end justify-content-end" name="adminControlles" id="adminControlles">
        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 d-flex justify-content-around">
            <form action="{{route('updateProdForm')}}" method="get" name="upProdCall">
                <input type="hidden" name="proizvod" value="{{$product->id}}">
                <input type="submit" class="btn" name="btnCallUpADM" value="Izmeni proizvod"/>
            </form>

            <form action="{{route('removeProd')}}" name="delProd" method="POST">
                @csrf
                <input type="hidden" name="proizvod" value={{$product->id}}>
                <input type="submit" class="btn" name="btnObrisiADM" value="Obriši proizvod"/>
            </form>
        </div>
    </div>
    @endif
    <div class="d-flex justfy-content-center align-items-center flex-container " id="product">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 d-flex flex-xl-row flex-lg-row flex-md-column flex-sm-column flex-column">
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 row d-flex justify-content-center align-items-center" id="prodImg">
                <img class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" src="{{asset('assets/img/proizvodi/'.$product->cover)}}" alt="{{$product->title." cover"}}">
            </div>
            <div class="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12 d-flex flex-column" id="prodDesc">
                <h2>{{$product->title}}</h2>
                <h3>{{session()->get('individualAut')}}</h3>
                <h4>{{session()->get('individualCat')}}</h4>
                <br/>
                <h3>{{$product->price}} RSD</h3>
                <p>{{$product->description}}</p>
                <ul>
                    <li>Format: {{$product->format}}</li>
                    <li>Broj strana: {{$product->num_pages}}</li>
                    <li>Pismo: {{$product->letter}}</li>
                    <li>Povez: {{$product->cover_type}}</li>
                    <li>Datum izdanja: {{$product->published}}</li>
                    <li>ISBN: {{$product->isbn}}</li>
                    @if($product->translator!=null)
                        <li>Prevodilac: {{$product->translator}}</li>
                    @endif
                </ul>
                <br/>
                <form id="dodajUkorpu" name="dodajUkorpu" action="{{route('dodajUkorpu')}}" method="POST">
                    @csrf
                    <input type="hidden" name="pzkId" value={{$product->id}}>
                    <input type="hidden" name="pzkCena" value={{$product->price}}>
                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                    <select class="form-control" id="kolicina" name="kolicina">
                        <option value=1>1</option>
                        <option value=2>2</option>
                        <option value=3>3</option>
                        <option value=4>4</option>
                        <option value=5>5</option>
                        <option value=6>6</option>
                        <option value=7>7</option>
                        <option value=8>8</option>
                        <option value=9>9</option>
                        <option value=10>10</option>
                    </select>
                </div>
                    <br/>
                <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                    <button type="submit" class="btn bg-dark text-light">Dodaj u korpu</button>
                </div>
                </form>

            </div>
        </div>
    </div>
    @else

        @php
            header("Location: " . URL::to('/products'), true, 302);
            exit();
        @endphp
    @endif



@endsection
