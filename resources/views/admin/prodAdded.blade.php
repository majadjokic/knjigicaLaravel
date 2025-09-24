

@extends('layouts.layout')

@section('description') Knjigica, online prodavnica knjiga. Detalji knjige. @endsection
@section('keywords') prodavnica, online kupovina, knjiga, knjige, knjizara @endsection
@section('title') Admin - Dodat proizvod @endsection



@section('content')
{{--    @if(session()->get('role')==1)--}}
        <div class="col-xl-12 p-3">
            <div class="container-fluid p-5">
                <div class="p-5">
                    <h1>Proizvod uspešno dodat!</h1>
                    <br/>
                    <h3><a href="{{route('products')}}" class="ljub">Pogledaj proizvode</a></h3>
                    <br/>
                    <h3><a href="{{route('addProdForm')}}" class="ljub">Dodaj novi proizvod</a></h3>
                    <br/>
                </div>
            </div>
        </div>



{{--    @else--}}
{{--        @php--}}
{{--            header("Location: " . URL::to('/'), true, 302);--}}
{{--            exit();--}}
{{--        @endphp--}}
{{--    @endif--}}

@endsection

