<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LogInRequest extends FormRequest
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
            'userMailL'=>[
                'required',
                'max:60',
                'regex:/^[a-z A-Z][\-\_\.\!\d a-z A-Z]*\@[a-z]{2,10}(\.[a-z]{2,3}){1,2}$/'
            ],
            'userPassL'=>[
                'required',
                'min:8',
                'max:50',
                'regex:/^[\d,\w,\W]*$/'
            ]
        ];
    }

    public function messages(){
        return [
            'required' => 'Polje :attribute je obavezno.',
            "userMailL.regex" => "Polje :attribute mora da bude po formatu maja@gmail.com",
            "userPassL.min"=>"Minimalna dužina lozinke je 8 karaktera.",
            "userPassL.max"=>"Maksimalna dužina lozinke je 50 karaktera."

        ];
    }
}
