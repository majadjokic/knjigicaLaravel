<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TitleAuthors extends Model
{
    use HasFactory;
    protected $table='title_author';
    protected $fillable=["title_id","author_id"];

    public function author_id()
    {
        return $this->belongsToMany(Authors::class);
    }
//
//
    public function title_id()
    {
        return $this->belongsToMany(Products::class);
    }
}
