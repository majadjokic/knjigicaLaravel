<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illumiate\Support\Collection;

class Products3 extends Model
{
    use HasFactory;
    public function proizvodiTC(){
        return $rez=DB::table('title_category')->select('title_category.*','products.title','categories.category')->join('products','products.id','=','title_category.title_id')->join('categories','categories.id','=','title_category.category_id')->orderBy('title_category.title_id')->get();
    }
}
