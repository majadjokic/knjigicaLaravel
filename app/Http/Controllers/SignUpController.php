<?php

namespace App\Http\Controllers;

use App\Http\Requests\SignUpRequest;
use Illuminate\Support\Facades\DB;

class SignUpController extends CommonController
{
    public function index(){
        return view("user.signup",$this->data);
    }

    public function signUp(SignUpRequest $request){
        $firstName=$request->firstNameS;
        $lastName=$request->lastNameS;
        $email=$request->userMailS;
        $username=$request->userNameS;
        $pass=$request->userPassS;
        $passConf=$request->userPassConfS;
        if($pass!=$passConf){
            session()->put('passWrong',"Vaše šifre se ne podudaraju.");
        }
        else{
            session()->forget("passWrong");
            DB::table("users")->insert(['first_name'=>$firstName,'last_name'=>$lastName,'username'=>$username,'email'=>$email,'u_password'=>sha1(md5(hash('haval160,4',$pass))),'role'=>2]);
            $type_user="unknown";
            $user_name="Novi korisnik";
            $activity=$user_name." se prijavio.";
            $date=date('d.m.Y.');
            $time=date('H:i:s');
            DB::table('activities')->insert(['type_user'=>$type_user,'user_name'=>$user_name,'activity'=>$activity,'date'=>$date,'time'=>$time]);
            return redirect()->route('login');
        }
    }

}
