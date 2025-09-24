<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illumiate\Support\Collection;

class CartsWithListProduct extends Model
{
    use HasFactory;
    public function cart(){
        return $rez=DB::table('cart_lists')->join('products','products.id','=','cart_lists.prod_id')->join('carts','carts.id','=','cart_lists.cart_id')->get();
    }
}
