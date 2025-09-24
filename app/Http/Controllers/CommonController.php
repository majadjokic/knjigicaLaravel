<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use App\Models\MenuUser;
use Illuminate\Http\Request;

class CommonController extends Controller
{
    public $data;

    public function __construct()
    {
        $this->data["menuM"] = Menu::all();
        $this->data["menuU"]=MenuUser::all();
    }

}
