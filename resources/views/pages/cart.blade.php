@extends('layouts.layout')

@section('description') Knjigica, online prodavnica knjiga. Ovde su proizvodi koje ste stavili u korpu. @endsection
@section('keywords') prodavnica, online kupovina, kupi @endsection
@section('title') Knjigica - Korpa @endsection

@section('content')
    @if(session()->has('user'))
    <div class="container-fluid p-5">

        <div class="row" id="korpaRed">

            <div class="table-responsive" id="tabelaCart">
                <table class="table table-dark table-bordered table-hover">
                    <thead>
                    <tr>
                        <th width="50">
                            Proizvod
                        </th>
                        <th width="50">
                            Slika
                        </th>
                        <th width="50">
                            Cena (jednog komada)
                        </th>
                        <th width="200">
                            Količina
                        </th>
                        <th width="200">
                            Izbacite proizvod
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        @foreach($cart as $c)
                            @if($c->user_id==$us&&$c->cart_date==date('d.m.Y.')&&$c->is_checked_out==0)
                                <tr>
                                    <td>{{$c->title}}</td>
                                    <td><div width="100"><img class="col-12" src="assets/img/proizvodi/{{$c->cover}}" alt="{{$c->title}}"></div></td>
                                    <td>{{$c->prod_price}}</td>
                                    <td><div class="d-flex flex-row justify-content-around" width="200">
                                            <form action="{{route('smanjiKolicinu')}}" method="POST" name="minusKol">
                                                @csrf
                                                <input type="hidden" name="minusProd" value={{$c->prod_id}}>
                                                <input type="hidden" name="minusCart" value={{$c->cart_id}}>
                                                <input type="hidden" name="minusNum" value={{$c->num_of_prod}}>
                                                <input class="btn text-light" type="submit" name="btnMinus" value="<">
                                            </form>
                                                {{$c->num_of_prod}}
                                            <form action="{{route('povecajKolicinu')}}" method="POST" name="plusKol">
                                                @csrf
                                                <input type="hidden" name="plusProd" value={{$c->prod_id}}>
                                                <input type="hidden" name="plusCart" value={{$c->cart_id}}>
                                                <input type="hidden" name="plusNum" value={{$c->num_of_prod}}>
                                                <input class="btn text-light" type="submit" name="btnPlus" value=">">
                                            </form>
                                        </div>
                                    </td>
                                    <td>
                                        <form action="{{route('izbaciIzKorpe')}}" method="POST" name="izbaci">
                                            @csrf
                                            <input type="hidden" name="izbaciProd" value={{$c->prod_id}}>
                                            <input type="hidden" name="izbaciCart" value={{$c->cart_id}}>
                                            <input class="btn text-light" type="submit" name="btnIzbaci" value="Izbaci">
                                        </form>
                                    </td>
                                </tr>
                            @endif

                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
        <div id="ukupnaCenaDiv" class="row pl-5 pr-5 d-flex justify-content-end align-items-center">

        </div>

        <div id="checkOutDiv" class="row p-5 d-flex justify-content-end align-items-center">
            @foreach($cartIn as $ci)
                @if($ci->user_id==$us&&$ci->cart_date==date('d.m.Y.')&&$ci->is_checked_out==0)
                <form action="{{route('cartToCheck')}}" method="POST" name="izbaci">
                                @csrf
                                <input type="hidden" name="cartToCheckID" value={{$ci->id}}>

                                <input class="btn text-light" type="submit" name="btnCartToCheck" value="Kasa">
                            </form>


                @endif

            @endforeach

        </div>
    </div>
    @else

        <div class="container-fluid d-flex flex-column justify-content-center align-items-center p-5">
                <h2>Ako želite da vidite korpu ili dodate nešto u nju morate da se ulogujete.</h2>
                <a class="btn" href="{{route('login')}}">Log in</a>

        </div>
    @endif
@endsection
