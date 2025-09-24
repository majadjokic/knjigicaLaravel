<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SignUpRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'firstNameS'=>[
                'required',
                'regex:/^([A-ZĐĆČŽŠ][a-zđćčšž]{1,19}\-{0,1}){1,2}$/'
            ],
            'lastNameS'=>[
                'required',
                'regex:/^([A-ZĐĆČŽŠ][a-zđćčšž]{1,19}\-{0,1}){1,2}$/'
            ],
            'userNameS'=>[
                'required',
                'regex:/^([\d\_ a-z A-Z]*){1,29}$/'
            ],
            'userMailS'=>[
                'required',
                'regex:/^[a-z][\-\_\.\!\d a-z]*\@[a-z]{2,10}(\.[a-z]{2,3}){1,2}$/'
            ],
            'userPassS'=>[
                'required',
                'min:8',
                'max:50',
                'regex:/^[\d,\w,\W]*$/'
            ],
            'userPassConfS'=>[
                'required',
                'min:8',
                'max:50'
            ]
        ];
    }

    public function message(){
        return [
            "firstNameS.regex"=>'Niste pravilno uneli vaše ime. Ime mora da počinje velikim slovom sa svim ostalim malim slovima. Ako imate dva imena razdvojite ih sa - između (primer Ana-Marija).',
            "lastNameS.regex"=>'Niste pravilno uneli vaše prezime. Prezime mora da počinje velikim slovom sa svim ostalim malim slovima. Ako imate dva prezimena razdvojite ih sa - između njih (primer Jović-Petrović).',
            "userMailS.regex"=>"Niste pravilno uneli vašu email adresu (primer maja@gmail.com).",
            "userName.regex"=>"Niste pravilno uneli vaš username. Budite sigurni da nema razmake niti  !    @   #   $   %   ^   &    *   (  )  -  +  =  '  _  \"",
            "userPassS.min"=>"Minimalna dužina šifre je 8 karaktera.",
            "userPassS.max"=>"Maksimalna dužina šifre je 50 karaktera.",
            "userPassConfS.min"=>"Minimalna dužina šifre je 8 karaktera.",
            "userPassConfS.max"=>"Maksimalna dužina šifre je 50 karaktera."

        ];
    }
}
