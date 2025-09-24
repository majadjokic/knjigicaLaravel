<?php

namespace App\Http\Controllers;

use App\Http\Requests\CheckoutRequest;
use App\Models\CartsWithListProduct;
use App\Models\Carts;
use App\Models\Countries;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DateTime;
use Illuminate\Support\Facades\DB;

class CheckoutController extends CommonController
{
    public function index(){
        $us=session()->get('userId');
        $korpaId=session()->get('korpaId');
        $r=new CartsWithListProduct();
        $this->data['drzave']=Countries::all();
        $this->data['cart']=$r->cart();
        $rr=$r->cart();
        $ukupnaCena=0;
        foreach($rr as $k){
            if($k->cart_id==$korpaId){
                $ukupnaCena+=$k->prod_price*$k->num_of_prod;
            }
        }
        $this->data['ukupnaCena']=$ukupnaCena;
        $this->data['us']=$us;
        $this->data['korpaId']=$korpaId;
        return view('checkout.checkout', $this->data);
    }

    public function checkout(CheckoutRequest $request){
        $nacinPlacanja=$request->nacinPlacanja;
        $kartica=$request->kartica;
        $drzava=$request->drzava;
        $grad=$request->grad;
        $adresa=$request->adresa;
        $ukupnaCena=$request->ukupnaCena;
        $korpaId=$request->session()->get('korpaId');
        if($drzava==0){
            session()->forget('checkoutDone');
            session()->put('drzavaWrong','Izaberite državu.');
            return redirect()->route('checkout');
        }
        else if($nacinPlacanja=='kartica'&&$kartica==""){
            session()->forget('checkoutDone');
            session()->put('karticaWrong','Niste uneli karticu.');
            return redirect()->route('checkout');
        }
        else{
            try{
                \DB::beginTransaction();
            session()->forget('drzavaWrong');
            session()->forget('karticaWrong');
            DB::table('payments')->insert(['cart_id'=>$korpaId,'price'=>$ukupnaCena,'payment_method'=>$nacinPlacanja,'card'=>$kartica]);
            $idPayDB=DB::table('payments')->select('id')->where('cart_id','=',$korpaId)->get();
            foreach($idPayDB as $ip){
                $idPay=$ip->id;
            }
            $this->data['podatak']=$idPay;

                DB::table('orders')->insert(['cart_id'=>$korpaId,'address'=>$adresa,'city'=>$grad,'country_id'=>$drzava,'payment_id'=>$idPay]);
                DB::table('carts')->where('id','=',$korpaId)->update(['is_checked_out'=>1]);

                $user_name=session()->get('user');
                $type_user=session()->get('role');
                session()->put('checkoutDone',true);
                $activity=$user_name." je obavio kupovinu.";
                $date=date('d.m.Y.');
                $time=date('H:i:s');
                DB::table('activities')->insert(['type_user'=>$type_user,'user_name'=>$user_name,'activity'=>$activity,'date'=>$date,'time'=>$time]);
                \DB::commit();
            }
            catch(\Exception $e){
                \DB::rollBack();
                session()->forget('checkoutDone');
                return redirect()->back()->with("error", $e->getMessage());
            }
            return redirect()->route('checkoutDone');

        }
    }

    public function checkoutDone(){
        return view('checkout.checkoutDone',$this->data);
    }
}
