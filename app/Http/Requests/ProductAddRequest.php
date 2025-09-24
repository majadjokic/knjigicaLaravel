<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductAddRequest extends FormRequest
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
            "title" => [
                'required',
                'string',
                'min:1',
                'max:200'
                //'regex:/^([A-Z,Š,Đ,Č,Ć,Ž,a-z,š,đ,ž,č,ć]{1,199}[\s,\-]{0,10}){1,10}$/'
//                'regex:/^([A-Z,Š,Đ,Č,Ć,Ž,a-z,š,đ,ž,č,ć]\D,\W,\s){0,199}$/'
               // 'regex:/^[A-Z,Š,Đ,Č,Ć,Ž][a-z,š,đ,ž,č,ć]{1,199}$/'
            ],
            "desc"=>[
                'required',
                'string',
                'max:2000',
                'regex:/^[\d,\w,\W]*$/'
            ],
            "formatA"=>[
                'required',
                'string',
                'max:30',
                'regex:/^[\d]{1,13}(x){1}[\d]{1,13}(\s){1}(cm){1}$/'
            ],
            "numPages"=>[
                'required',
                'numeric',
                'regex:/^[0-9]{1,5}$/'
            ],
            "letter"=>[
                'required',
                'string',
                'max:20',
                'regex:/^[A-Z,Š,Đ,Č,Ć,Ž][a-z,š,đ,ž,č,ć]{1,19}$/'
            ],
            "coverType"=>[
                'required',
                'string',
                'max:20',
                'regex:/^[A-Z,Š,Đ,Č,Ć,Ž][a-z,š,đ,ž,č,ć]{1,19}$/'
            ],
            "dan"=>[
                'required',
                'numeric',
                'max:31',
                'regex:/^[0-9]{2}$/'
            ],
            "mesec"=>[
                'required',
                'string',
                'regex:/^(januar|februar|mart|april|maj|jun|jul|avgust|septembar|oktobar|novembar|decembar)$/'
            ],
            "godina"=>[
                'required',
                'numeric',
                'max:2100',
                'regex:/^(20)[0-9]{2}$/'
            ],
            "isbn"=>[
                'required',
                'string',
                'max:100',
                'regex:/^[0-9]{3}(\-)[0-9]{2}(\-)[0-9]{3}(\-)[0-9]{4}(\-)[0-9]{1}$/'
            ],
            "translator"=>[
                'nullable',
                'max:100',
                'string',
                'regex:/^([A-Z,Š,Đ,Č,Ć,Ž][a-z,š,đ,ž,č,ć]{1,99}[\s,\-]{0,10}){1,10}$/'
            ],
            "price"=>[
                'required',
                'numeric',
                'min:1',
                'max:9999999999'
            ],
            "cover"=>[
                'required',
                'file',
                'max:2084',
                'mimes:jpg,png'
            ],
            "pisac"=>[
                'required',
                'array',
                'min:1',
                'max:5'
            ],
//            "pisac.*"=>[
//                'required'
//            ],
            "zanr"=>[
                'required',
                'array',
                'min:1',
                'max:7'
            ],
//            "zanr.*"=>[
//                'required'
//            ]

        ];
    }

    public function messages(){
        return [
            'required' => 'Polje :attribute je obavezno.',
            "title.regex" => "Polje :attribute mora da započinje velikim slovom i da bude dužine između 1 i 200 karaktera.",
            "desc.regex" => "Polje :attribute mora da bude popunjeno pravilno (bez {} []). Maksimum 2000 karaktera.",
            "format.regex" => "Polje :attribute mora da bude formata 13x21 cm. Maksimum 30 karaktera.",
            "numPages.regex" => "Polje :attribute mora da bude maksimalne dužine 5 karaktera, samo cifre.",
            "letter.regex" => "Polje :attribute mora da započinje velikim slovom i da bude dužine između 1 i 20 karaktera.",
            "coverType.regex" => "Polje :attribute mora da započinje velikim slovom i da bude dužine između 1 i 20 karaktera.",
            "dan.regex" => "Polje :attribute mora da bude maksimalne dužine 2 karaktera, samo cifre.",
            "mesec.regex" => "Polje :attribute mora da započinje malim slovom (maj,januar...).",
            "godina.regex" => "Polje :attribute mora da bude formata 20xx (2022).",
            "isbn.regex" => "Polje :attribute mora da bude formata 978-86-521-4428-0.",
            "translator.regex" => "Polje :attribute mora da započinje velikim slovom i da bude dužine između 1 i 100 karaktera.",
            "price.min"=>"Minimalna cena je 1 dinar.",
            "price.max"=>"Maksimalna cena je 9999999999 dinara.",
            "cover.mimes"=>"Format slike mora da bude ili JPG ili PNG.",
            "pisac.min"=>"Knjiga mora da ima barem jednog autora.",
            "pisac.max"=>"Knjiga ne sme imati više od 5 autora.",
            "zanr.min"=>"Knjiga mora pripadati barem jednom žanru.",
            "zanr.max"=>"Knjiga ne sme pripadati više od 7 žanrova."

        ];
    }
}
//            "price.regex" => "Polje :attribute mora da sadrži maksimum 10 cifara.",
