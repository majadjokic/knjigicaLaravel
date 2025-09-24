<?php

namespace App\Http\Controllers;

use App\Http\Requests\LogInRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DateTime;
use Illuminate\Support\Facades\DB;

class LogInController extends CommonController
{
    public function index(){
        return view("user.login",$this->data);
    }



    public function logIn(LogInRequest $request){
        $userMailL=$request->userMailL;
        $userPassL=$request->userPassL;
        $log=DB::table('users')->where('email','=',$userMailL)->get();
        $provera="";
        $provera="".$log;
        if($provera=="[]"){
            session()->put('emailWrong','Nema ovog naloga na našem sajtu.');
            return redirect()->route('login');
        }
        else{
            session()->forget('emailWrong');
            foreach($log as $l){
                if($l->u_password!=sha1(md5(hash('haval160,4',$userPassL)))){
                    session()->put('passWrong','Uneli ste pogrešnu šifru.');
                    return redirect()->route('login');
                }
                else{
                    session()->forget('passWrong');
                    session()->put('user',$l->username);
                    session()->put('userId',$l->id);
                    session()->put('role',$l->role_id);
                }
            }
            $page=session()->get('lastPage');

            if(session()->get('role')==1){
                $type_user="admin";
            }
            else{
                $type_user="known";
            }
            $user_name=session()->get('user');
            $activity="Korisnik ".$user_name." se ulogovao.";
            $date=date('d.m.Y.');
            $time=date('H:i:s');
            DB::table('activities')->insert(['type_user'=>$type_user,'user_name'=>$user_name,'activity'=>$activity,'date'=>$date,'time'=>$time]);
            return redirect()->route($page);
        }





    }

    public function logout(){

        $page=session()->get('lastPage');
        if(session()->get('role')==1){
            $type_user="admin";
            $user_name=session()->get('user');
        }
        else{
            $type_user="known";
            $user_name=session()->get('user');
        }

        $activity="Korisnik ".$user_name." se izlogovao.";
        $date=date('d.m.Y.');
        $time=date('H:i:s');
        DB::table('activities')->insert(['type_user'=>$type_user,'user_name'=>$user_name,'activity'=>$activity,'date'=>$date,'time'=>$time]);
        session()->forget('user');
        session()->forget('role');
        return redirect()->route($page);
    }

}
