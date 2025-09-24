<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CategoryRequest extends FormRequest
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
            "kategorija" => [
                'required',
                'max:100',
                'regex:/^([A-Z,Š,Đ,Č,Ć,Ž,a-z,š,đ,ž,č,ć]{1,99}[\s,\-]{0,10}){1,10}$/'
            ]
        ];
    }

    public function messages(){
        return [
            'required' => 'Polje :attribute je obavezno.',
            "kategorija.regex" => "Polje :attribute mora da započinje velikim slovom i da bude dužine između 1 i 100 karaktera.",

        ];
    }
}
