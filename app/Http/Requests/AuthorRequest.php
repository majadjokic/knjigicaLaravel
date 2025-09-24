<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class AuthorRequest extends FormRequest
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
            "pisac" => [
                'required',
                'max:200',
                'regex:/^([A-Z,Š,Đ,Č,Ć,Ž][a-z,š,đ,ž,č,ć]{1,199}[\s,\-]{0,10}){1,10}$/'
            ]
        ];
    }

    public function messages(){
        return [
            'required' => 'Polje :attribute je obavezno.',
            "pisac.regex" => "Polje :attribute mora da započinje velikim slovom i da bude dužine između 1 i 200 karaktera.",

        ];
    }
}
