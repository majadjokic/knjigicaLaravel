<?php

namespace App\Http\Controllers;

use App\Models\CartsWithListProduct;
use App\Models\Carts;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DateTime;
use Illuminate\Support\Facades\DB;

class CartController extends CommonController
{

    public function index(){
        $us=session()->get('userId');
        session()->put('lastPage','cart');
        $r=new CartsWithListProduct();
        $this->data['cart']=$r->cart();
        $this->data['cartIn']=Carts::where([['user_id',$us],['cart_date',date('d.m.Y.')]])->get();
        $this->data['us1']=gettype($us);
        $this->data['us']=$us;
        return view('pages.cart', $this->data);
    }

    public function dodajUkorpu(Request $request){
        //ovo se nalazi na product
        if(!session()->has('user')){
            return redirect()->route('login');
        }
        else{
            $userId=session()->get('userId');
            $cart=DB::table('carts')->where([['user_id','=',$userId],['is_checked_out','=',0]])->get();
            $provera="".$cart;
            if($provera=='[]'){
                DB::table('carts')->insert(['user_id'=>$userId,'cart_date'=>date('d.m.Y.'),'is_checked_out'=>0]);
                $cart2=DB::table('carts')->where([['user_id','=',$userId],['is_checked_out','=',0]])->get();
                foreach($cart2 as $c2){
                    $cartId=$c2->id;
                }
                DB::table('cart_lists')->insert(['cart_id'=>$cartId,'prod_id'=>$request->pzkId,'prod_price'=>$request->pzkCena,'num_of_prod'=>$request->kolicina]);
                return redirect()->route('cart');
            }
            else if($provera!='[]'){

                foreach($cart as $c){
                    $cartId=$c->id;
                }
                $inCart=DB::table('cart_lists')->where('cart_id','=',$cartId)->get();
                $prodId=[];
                foreach($inCart as $ic){
                    array_push($prodId,$ic->prod_id);
                }
                if(in_array($request->pzkId,$prodId)){
                    $brojDB=DB::table('cart_lists')->select('num_of_prod')->where('cart_id','=',$cartId)->get();
                    foreach($brojDB as $bdb){
                        $bb=$bdb->num_of_prod;
                    }
                    $broj=$bb+$request->kolicina;
                    DB::table('cart_lists')->where('cart_id','=',$cartId)->update(['num_of_prod'=>$broj]);
                    return redirect()->route('cart');
                }
                else{
                    DB::table('cart_lists')->insert(['cart_id'=>$cartId,'prod_id'=>$request->pzkId,'prod_price'=>$request->pzkCena,'num_of_prod'=>$request->kolicina]);
                    return redirect()->route('cart');
                }

            }

        }
    }

    public function smanjiKolicnu(Request $request){
        $prod=$request->minusProd;
        $cart=$request->minusCart;
        $broj=$request->minusNum;
        if($broj>1){
            $noviBroj=$broj-1;
            DB::table('cart_lists')->where([['cart_id','=',$cart],['prod_id','=',$prod]])->update(['num_of_prod'=>$noviBroj]);
            return redirect()->route('cart');
        }
        else{
            return redirect()->route('cart');
        }

    }

    public function povecajKolicnu(Request $request){
        $prod=$request->plusProd;
        $cart=$request->plusCart;
        $broj=$request->plusNum;
        if($broj<100){
            $noviBroj=$broj+1;
            DB::table('cart_lists')->where([['cart_id','=',$cart],['prod_id','=',$prod]])->update(['num_of_prod'=>$noviBroj]);
            return redirect()->route('cart');
        }
        else{
            return redirect()->route('cart');
        }
    }

    public function izbaciIzKorpe(Request $request){
        $prod=$request->izbaciProd;
        $cart=$request->izbaciCart;
        DB::table('cart_lists')->where([['cart_id','=',$cart],['prod_id','=',$prod]])->delete();
        return redirect()->route('cart');
    }

    public function bezOvogaNemoze(Request $request){
        $cart=$request->cartToCheckID;
        session()->put('korpaId',$cart);
        return redirect()->route('checkout');
    }

}
