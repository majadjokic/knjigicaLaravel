<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illumiate\Support\Collection;

class Products2 extends Model
{
    use HasFactory;
    public function proizvodiTA(){
        return $rez=DB::table('title_author')->
        select('title_author.*','products.title','authors.author')->
        join('products','products.id','=','title_author.title_id')->
        join('authors','authors.id','=','title_author.author_id')->
        orderBy('title_author.title_id')->get();
    }
}
