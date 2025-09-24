<?php

namespace App\Http\Controllers;

use App\Models\Visitors;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Psy\Util\Json;

class AuthorController extends CommonController
{
    public function index(){
        session()->put('lastPage','author');

        $page='Autor';
        $v=Visitors::where([['page','=',$page],['date','=',date('d.m.Y.')]])->get();
        $provera="";
        $provera=Json::encode($v);
        foreach($v as $vvv){
            $vb=$vvv->number;
        }
        if($provera=='[]'){
            DB::table('visitors')->insert(['page'=>$page,'number'=>1,'date'=>date('d.m.Y.')]);
        }
        else{
            $broj=$vb+1;
            DB::table('visitors')->where([['page','=',$page],['date','=',date('d.m.Y.')]])->update(['number'=>$broj]);
        }

        return view('pages.author', $this->data);
    }



}
