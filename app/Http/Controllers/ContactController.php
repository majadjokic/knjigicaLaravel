<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Visitors;
use \Psy\Util\Json;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMail;

class ContactController extends CommonController
{


    public function index(){

        session()->put('lastPage','contact');

        $page='Kontakt';
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

        return view('pages.contact', $this->data);
    }
    public function send(ContactRequest $request){
        $firstName=$request->firstNameC;
        $lastName=$request->lastNameC;
        $email=$request->emailC;
        $text=$request->textC;

        Mail::to('contact@knjigica.com')->send(new ContactMail($firstName,$lastName,$email,$text));


//        DB::table('contact_email')->insert([
//            'first_name'=>$firstName,'last_name'=>$lastName,
//            'email'=>$email,'text_mail'=>$text,
//            'date'=>date('d.m.Y.'),
//            'time'=>date('H:i:s')
//        ]);



        $activity="Neko nam je poslao mejl. Odgovorite što pre možete.";
        $date=date('d.m.Y.');
        $time=date('H:i:s');
        DB::table('activities')->insert([
            'type_user'=>'unknown','user_name'=>'Nepoznati korisnik',
            'activity'=>$activity,'date'=>$date,'time'=>$time
        ]);
        return redirect()->route('contactSent');
    }

    public function contactSent(){
        return view('email.emailSent',$this->data);
    }

}
