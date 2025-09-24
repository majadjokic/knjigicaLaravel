<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'firstNameC'=>[
                'required',
                'regex:/^([A-ZĐĆČŽŠ][a-zđćčšž]{1,19}\-{0,1}){1,2}$/'
            ],
            'lastNameC'=>[
                'required',
                'regex:/^([A-ZĐĆČŽŠ][a-zđćčšž]{1,19}\-{0,1}){1,2}$/'
            ],
            'emailC'=>[
                'required',
                'regex:/^[a-z][\-\_\.\!\d a-z]*\@[a-z]{2,10}(\.[a-z]{2,3}){1,2}$/'
            ],
            'textC'=>[
                'required',
                'max:3000'
            ]


        ];
    }

    public function message(){
        return [
            "firstNameC.regex"=>'Niste pravilno uneli vaše ime. Ime mora da počinje velikim slovom sa svim ostalim malim slovima. Ako imate dva imena razdvojite ih sa - između (primer Ana-Marija).',
            "lastNameC.regex"=>'Niste pravilno uneli vaše prezime. Prezime mora da počinje velikim slovom sa svim ostalim malim slovima. Ako imate dva prezimena razdvojite ih sa - između njih (primer Jović-Petrović).',
            "emailC.regex"=>"Niste pravilno uneli vašu email adresu (primer maja@gmail.com).",
            "textC.max"=>"Tekst mejla nesme biti duži od 3000 karaktera."
        ];
    }
}
