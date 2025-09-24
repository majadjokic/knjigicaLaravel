@extends('layouts.layout')

@section('description') Knjigica, online prodavnica knjiga. Pogledajte naš izbor knjiga. @endsection
@section('keywords') prodavnica, online kupovina, knjiga, knjaige, knjizara @endsection
@section('title') Knjigica - Proizvodi @endsection

@section('content')
    @if(session()->get('role')==1)
    <div class="container-fluid p-3 d-flex align-content-end justify-content-end" name="adminControlles" id="adminControlles">
        <a class="btn" href="{{route('addProdForm')}}">Dodaj proizvod</a>
    </div>
    @endif
    <div class="d-flex flex-xl-row flex-lg-row flex-md-row flex-sm-column flex-column">
        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12 p-3">

            <form id="sortFilter" name="sortFilter" class="mt-5" method="GET" action="#">
                <div class="mb-3">
                <p class="font-weight-bold">Pretraži naslove</p>
                <input type="text" id="search" name="search" class="form-control" placeholder="Pretraži" value="{{request()->search ?? ''}}">
                </div>
                    <div class="d-flex flex-column">
                    <div>
                        <p class="font-weight-bold">Žanrovi</p>
                        <div class="d-flex justify-content-center flex-column align-items-start pl-4 mb-3" id="filteriZan">
                            @foreach($categories as $c)
                                <div><input class="form-check-input category" type="checkbox" name="categories[]" id="category{{ $c->id }}"  value={{ $c->id }} />

                                    <label class="form-check-label" for="{{$c->id}}">
                                        {{$c->category}}
                                    </label></div>
                            @endforeach

                        </div>
                    </div>


                    <div class="mb-3">
                        <p class="font-weight-bold">Po nazivu</p>
                        <select id="poNazivu" name="sortName" class="form-control">
                            <option value="0">Default</option>
                            <option value="az" @if(request()->sortName && request()->sortName == 'az') selected @endif>A-Z</option>
                            <option value="za" @if(request()->sortName && request()->sortNAme == 'za') selected @endif>Z-A</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <p class="font-weight-bold">Po ceni</p>
                        <select id="poCeni" name="sortPrice" class="form-control">
                            <option value="0">Default</option>
                            <option value="asc" @if(request()->sortPrice && request()->sortPrice == 'asc') selected @endif>Najniža-Najviša</option>
                            <option value="desc"@if(request()->sortPrice && request()->sortPrice == 'desc') selected @endif>Najviša-Najniža</option>
                        </select>
                    </div>
                    <button type="button" id="ukloni" class="mt-5 btn col-xl-6">Ukloni filtere</button>

                </div>

            </form>
        </div>
        <div  class="col-xl-9 col-lg-9 col-md-8 col-sm-12 col-12 p-3 row d-flex">

            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 p-3 row d-flex" id="products">

            </div>
        </div>
    </div>


{{--    ovde se poziva js sa ajax+json--}}

@endsection
