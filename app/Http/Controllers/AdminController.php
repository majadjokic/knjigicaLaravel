<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthorRequest;
use App\Http\Requests\CategoryRequest;
use App\Http\Requests\ProductAddRequest;
use App\Http\Requests\ProductUpRequest;
use App\Models\Products;
use App\Models\Products2;
use App\Models\Products3;
use App\Models\Categories;
use App\Models\Authors;
use App\Models\AuthorProduct;
use App\Models\CategoryProduct;
use App\Models\Activities;
use App\Models\TitleAuthors;
use App\Models\Visitors;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Collection;
use Symfony\Component\Console\Input\Input;
use Exception;
use Illuminate\Support\Facades\File;


class AdminController extends CommonController
{
    public $data;

    public function index(){
            $this->data["visit"]=Visitors::all();
            $this->data["act"]=Activities::all();
            return view('admin.admin', $this->data);
    }

    public function doneAddProd(){

        return view('admin.prodAdded',$this->data);
    }

    public function doneUpProd(){

        return view('admin.prodUpdated',$this->data);
    }

    public function callAddProduct(){
        //dodavanje proizvoda
        $this->data["categories"]=Categories::all();
        $this->data["authors"]=Authors::all();
        //pozvati view za dodaju proizvoda
        return view('admin.addProd',$this->data);
    }

    public function addProduct(ProductAddRequest $request){
        try{
            DB::beginTransaction();

            $lastId=DB::table('products')->max('id');
            $poslednjiId=$lastId +1;

            $title=$request->title;
            $desc=$request->desc;
            $format=$request->formatA;
            $numPages=$request->numPages;
            $letter=$request->letter;
            $coverType=$request->coverType;
            $dan=$request->dan;
            $mesec=$request->mesec;
            $godina=$request->godina;
            $date=$dan.". ".$mesec." ".$godina.".";
            $isbn=$request->isbn;
            $translator=$request->translator;
            $price=$request->price;
            $coverName=$poslednjiId.'.'.$request->cover->extension();
            $request->cover->move(public_path('assets/img/proizvodi'),$coverName);

            //kako za sliku i kolekciju checkboxova?????

            //sliku ovde
            DB::table('products')->insertGetId(
                ['title'=>$title,'description'=>$desc,'format'=>$format,
                'num_pages'=>$numPages,'letter'=>$letter, 'cover'=>$coverName,
                'cover_type'=>$coverType,
                'published'=>$date,'isbn'=>$isbn,'translator'=>$translator,'price'=>$price,
                    'active'=>1
                ]);


            //autori i zanrovi u posebnim for petljama

            //title_author
            foreach($request->pisac as $p){
                DB::table('title_author')->insert([
                    'title_id'=>$poslednjiId,
                    'author_id'=>$p
                ]);
            }



            //title_category
            foreach($request->zanr as $z){
                DB::table('title_category')->insert([
                    'title_id'=>$poslednjiId,
                    'category_id'=>$z
                ]);
            }


            //dodavanje u aktivnosti admina
            $prod=$title;
            $type_user="admin";
            $user_name=session()->get('user');
            $activity=$user_name." je dodao/la proizvod: ".$prod.".";
            $date=date('d.m.Y.');
            $time=date('H:i:s');
            DB::table('activities')->insert(['type_user'=>$type_user,'user_name'=>$user_name,'activity'=>$activity,'date'=>$date,'time'=>$time]);
            DB::commit();
        }
        catch(Exception $e){
            DB::rollBack();
            return redirect()->back()->with("error", $e->getMessage());
        }
        return redirect()->route('prodAdded');


    }

    public function removeProduct(Request $request){

        $prod=$request->proizvod;
        $this->data['podatak']=$prod;
        DB::table('products')->where('id','=',$prod)->update(['active'=>0]);
        $prodDB=DB::table('products')->where('id',$prod)->get();
        $prodName="";
        foreach($prodDB as $pd){
            $prodName=$pd->title;
        }

        $type_user="admin";
        $user_name=session()->get('user');
        $activity=$user_name." je obrisao/la proizvod: ".$prodName.".";
        $date=date('d.m.Y.');
        $time=date('H:i:s');
        DB::table('activities')->insert(['type_user'=>$type_user,'user_name'=>$user_name,'activity'=>$activity,'date'=>$date,'time'=>$time]);

        return redirect()->route('products');
    }

    public function callUpdateProduct(Request $request){
        //izmena proizvoda
        $prod=$request->proizvod;
        $this->data["categories"]=Categories::all();
        $prodInt=intval($prod);
        $cpObj=new CategoryProduct();
        $prodCat=$cpObj->categoryForProd($prodInt);
        $apObj=new AuthorProduct();
        $prodAut=$apObj->authorOfProd($prodInt);

        $cat="";
        $aut="";
        foreach($prodCat as $c){
            $cat.=$c->category_id." ";
        }
        foreach ($prodAut as $a){
            $aut.=$a->author_id." ";
        }



        session()->put('prodCat',$cat);
        session()->put('prodAut',$aut);

        $this->data['proizvodKat']=$prodCat;
        $this->data['proizvodAut']=$prodAut;
        $this->data["authors"]=Authors::all();
        $this->data['proizvodUp']=Products::where('id','=',$prod)->first();
        //uzmi podatke o proizvodu iz baze

        //pozvati view za izmenu podataka

        //u view prikasati podatke

        return view('admin.updateProd',$this->data);
    }

    public function updateProduct(ProductUpRequest $request){
        try{
            \DB::beginTransaction();

            $prodId=$request->prodId;
            $title=$request->title;
            $desc=$request->desc;
            $format=$request->formatA;
            $numPages=$request->numPages;
            $letter=$request->letter;
            $coverType=$request->coverType;
            $dan=$request->dan;
            $mesec=$request->mesec;
            $godina=$request->godina;
            $date=$dan.". ".$mesec." ".$godina.".";
            $isbn=$request->isbn;
            $translator=$request->translator;
            $price=$request->price;
            $vreme=time();
            if($request->cover!=null){
                $coverName=$vreme."_".$prodId.'.'.$request->cover->extension();
                $request->cover->move(public_path('assets/img/proizvodi'),$coverName);
            }


            if($request->cover!=null) {
                DB::table('products')->where('id', $prodId)->update([
                    'title' => $title, 'description' => $desc,
                    'format' => $format, 'num_pages' => $numPages,
                    'letter' => $letter, 'cover_type' => $coverType,
                    'cover'=>$coverName,
                    'published' => $date, 'isbn' => $isbn,
                    'translator' => $translator,
                    'price' => $price
                ]);
            }
            else{
                DB::table('products')->where('id', $prodId)->update([
                    'title' => $title, 'description' => $desc,
                    'format' => $format, 'num_pages' => $numPages,
                    'letter' => $letter, 'cover_type' => $coverType,
                    'published' => $date, 'isbn' => $isbn,
                    'translator' => $translator,
                    'price' => $price
                ]);
            }

            DB::table('title_category')->where('title_id','=',$prodId)->delete();
            DB::table('title_author')->where('title_id','=',$prodId)->delete();

            //title_author
            foreach($request->pisac as $p){
                DB::table('title_author')->insert([
                    'title_id'=>$prodId,
                    'author_id'=>$p
                ]);
            }



            //title_category
            foreach($request->zanr as $z){
                DB::table('title_category')->insert([
                    'title_id'=>$prodId,
                    'category_id'=>$z
                ]);
            }


            $prod=$title;
            $type_user="admin";
            $user_name=session()->get('user');
            $activity=$user_name." je izmenio/la proizvod: ".$prod.".";
            $date=date('d.m.Y.');
            $time=date('H:i:s');
            DB::table('activities')->insert(['type_user'=>$type_user,'user_name'=>$user_name,'activity'=>$activity,'date'=>$date,'time'=>$time]);
            \DB::commit();
        }
        catch(\Exception $e){
            \DB::rollBack();
            return redirect()->back()->with("error", $e->getMessage());
        }
        return redirect()->route('prodUpdated');
    }

    public function addCat(CategoryRequest $request){
        try{
            \DB::beginTransaction();
            $cat=$request->kategorija;
            DB::table('categories')->insert(['category'=>$cat]);


            $type_user="admin";
            $user_name=session()->get('user');
            $activity=$user_name." je dodao/la kategoriju: ".$cat.".";
            $date=date('d.m.Y.');
            $time=date('H:i:s');
            DB::table('activities')->insert(['type_user'=>$type_user,'user_name'=>$user_name,'activity'=>$activity,'date'=>$date,'time'=>$time]);
            \DB::commit();
        }
        catch(\Exception $e){
            \DB::rollBack();
            return redirect()->back()->with("error", $e->getMessage());
        }
        return redirect()->route('addProdForm');
    }

    public function addAuth(AuthorRequest $request){
        try{
            \DB::beginTransaction();
            $aut=$request->pisac;
            DB::table('authors')->insert(['author'=>$aut]);


            $type_user="admin";
            $user_name=session()->get('user');
            $activity=$user_name." je dodao/la pisca: ".$aut.".";
            $date=date('d.m.Y.');
            $time=date('H:i:s');
            DB::table('activities')->insert(['type_user'=>$type_user,'user_name'=>$user_name,'activity'=>$activity,'date'=>$date,'time'=>$time]);
            \DB::commit();
        }
        catch(\Exception $e){
            \DB::rollBack();
            return redirect()->back()->with("error", $e->getMessage());
        }

        return redirect()->route('addProdForm');


    }
}
