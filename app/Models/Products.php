<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;
    protected $table='products';
    protected $fillable=["title","description","editional","price","cover"];

    public function authors()
    {
        return $this->hasMany(TitleAuthors::class);
    }

    public function categories()
    {
        return $this->hasMany(Categories::class);
    }

}


