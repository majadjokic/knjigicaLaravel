<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class AuthorProduct extends Model
{
    public function authorOfProd($prod){
        return DB::table('title_author')->where('title_id','=',$prod)->get();
    }

}
