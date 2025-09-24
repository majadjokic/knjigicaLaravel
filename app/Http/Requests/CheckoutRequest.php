<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CheckoutRequest extends FormRequest
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
            'nacinPlacanja'=>[
              'required'
            ],
            'kartica'=>[
                'nullable',
                'max:19',
                'regex:/^([0-9]{4}\-){3}[0-9]{4}$/'
            ],
            'drzava'=>[
                'required'
            ],
            'grad'=>[
                'required',
                'max:30',
                'regex:/^[A-ZĐĆČŽŠ][\s\d\' a-zđćčšž A-ZĐĆČŽŠ]*$/'
            ],
            'adresa'=>[
                'required',
                'max:200',
                'regex:/^[\s\d\'\,\.\- a-zđćčšž A-ZĐĆČŽŠ]*$/'
            ]
        ];
    }

    public function messages()
    {
        return [
            'required'=>"Polje :attribute je obavezno.",
            'kartica.regex'=>"Plje kartica treba da bude formata 0000-0000-0000-0000",
            'grad.regex'=>"Pogrešno ste uneli grad. Mora da bude veliko početno slovo.",
            'grad.max'=>"Ime grada nesme biti duže od 30 karaktera.",
            'adresa.regex'=>"Pogrešno ste uneli adresu.",
            'adresa.max'=>"Adresa nesme biti duža od 200 karaktera."
        ];
    }
}
