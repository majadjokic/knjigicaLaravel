<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class CategoryProduct extends Model
{
    public function categoryForProd($prod){
        return DB::table('title_category')->where('title_id','=',$prod)->get();
    }
}
