<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
//use Illuminate\Database\Eloquent\Relations\HasMany;

class Authors extends Model
{
    use HasFactory;
    protected $table='authors';
    protected $fillable=["author"];

    public function titles()
    {
        return $this->hasMany(TitleAuthors::class);
    }


}
