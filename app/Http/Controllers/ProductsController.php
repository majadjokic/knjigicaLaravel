<?php

namespace App\Http\Controllers;

use App\Models\Products;
use App\Models\Products2;
use App\Models\Products3;
use App\Models\Categories;
use App\Models\Authors;
use App\Models\TitleAuthors;
use App\Models\Visitors;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Collection;
use \Psy\Util\Json;
use App\Models\AuthorProduct;
use App\Models\CategoryProduct;



class ProductsController extends CommonController
{

    //public $data;

    public function index(Request $request){

        session()->put('lastPage','products');

        $page='Proizvodi';
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



        $this->data["categories"]=Categories::all();
        $this->data["authors"]=Authors::all();
        return view('pages.products',$this->data);
    }

    public function showIndividual($id){
        $this->data["product"] = Products::find($id);
        if($this->data["product"]==""||$this->data["product"]==null){
            return redirect()->route('products');
        }
        else{
//            $r=new Products2();
//            $r2=$r->proizvodiTA()->where('title_id',$id);
//            $this->data['authorsIndividual']=$r2;
//            $r3=new Products3();
//            $r4=$r3->proizvodiTC()->where('title_id',$id);
//            $this->data['categoriesIndividual']=$r4;
            $prodInt=intval($id);
            $cpObj=new CategoryProduct();
            $prodCat=$cpObj->categoryForProd($prodInt);
            $apObj=new AuthorProduct();
            $prodAut=$apObj->authorOfProd($prodInt);

            $cat=[];
            $aut=[];
            foreach($prodCat as $c){
                array_push($cat,$c->category_id);

            }
            foreach ($prodAut as $a){
                array_push($aut,$a->author_id);

            }

            $kategorije=DB::table('categories')->whereIn('id',$cat)->get();
            $autori=DB::table('authors')->whereIn('id',$aut)->get();

            $pCat="";
            $pAut="";
            $brCat=count($cat);
            $brAut=count($aut);

            foreach($kategorije as $k){
                if($brCat!=1){
                    $pCat.=$k->category.", ";
                    $brCat--;
                }
                else if($brCat==1){
                    $pCat.=$k->category;
                    $brCat--;
                }

            }
            foreach ($autori as $a){
                if($brAut!=1){
                    $pAut.=$a->author.", ";
                    $brAut--;
                }
                else if($brAut==1){
                    $pAut.=$a->author;
                    $brAut--;
                }

            }

            session()->put('individualCat',$pCat);
            session()->put('individualAut',$pAut);

            $this->data['categories']=Categories::all();
            $this->data['authors']=Authors::all();

            return view('pages.product', $this->data);
        }


    }

    public function productsJson(){
        $proizvodi=$this->data["products"]=Products::where('active',1)->get();
        return Json::encode($proizvodi);
    }

    public function authorsJson(){
        $autori=$this->data["authors"]=Authors::all();
//        select title_id,author_id,author
//from authors a inner join title_author ta on ta.author_id=a.id

        //vrati json
        return Json::encode($autori);
    }

    public function categoriesJson(){
        $kategorije=$this->data["categories"]=Categories::all();


        //vrati json
        return Json::encode($kategorije);
    }

    public function titleAuthorJson(){
        $ta=$this->data["ta"]=TitleAuthors::all();
        return Json::encode($ta);
    }

    public function titleCategoryJson(){
        $tc=$this->data["tc"]=TitleCategories::all();
        return Json::encode($tc);
    }

    public function povezano(){
        $r=new Products2();
        $r2=$r->proizvodiTA();
        //$rr=array();
        //$rr['ta2']=$r2;
        return Json::encode($r2);
    }

    public function povezano2(){
        $r=new Products3();
        $r2=$r->proizvodiTC();
        //$rr=array();
        //$rr['ta2']=$r2;
        return Json::encode($r2);
    }



}
