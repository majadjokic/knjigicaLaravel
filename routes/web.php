<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LogInController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\ResetPassController;
use App\Http\Controllers\SignUpController;
//use App\Http\Controllers\ResetPassConfController;


use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class,'index'])->name('home');
Route::get('/products', [ProductsController::class,'index'])->name('products');
Route::get('/productsJson', [ProductsController::class,'productsJson'])->name('productsJson');
Route::get('/authorsJson', [ProductsController::class,'authorsJson'])->name('authorsJson');
Route::get('/categoriesJson', [ProductsController::class,'categoriesJson'])->name('categoriesJson');
Route::get('/taJson', [ProductsController::class,'titleAuthorJson'])->name('taJson');
Route::get('/taJson2', [ProductsController::class,'povezano'])->name('taJson2');
Route::get('/tcJson', [ProductsController::class,'povezano2'])->name('tcJson');
Route::get('/categoriesJson', [ProductsController::class,'titleCategoryJson'])->name('categoriesJson');
Route::get('/products/{id}', [ProductsController::class,'showIndividual'])->where(['id'=>'[0-9]+'])->name('product');


Route::post('/cart/add',[CartController::class,'dodajUkorpu'])->name('dodajUkorpu');
Route::post('cart/remove',[CartController::class,'izbaciIzKorpe'])->name('izbaciIzKorpe');
Route::get('/cart', [CartController::class,'index'])->name('cart');
Route::post('/cart/minus',[CartController::class,'smanjiKolicnu'])->name('smanjiKolicinu');
Route::post('/cart/plus',[CartController::class,'povecajKolicnu'])->name('povecajKolicinu');
Route::post('/cart/checkout',[CartController::class,'bezOvogaNemoze'])->name('cartToCheck');
Route::get('/checkout',[CheckoutController::class,'index'])->name('checkout');
Route::post('/checkout/go',[CheckoutController::class,'index'])->name('checkoutGo');
Route::post('/checkout/check',[CheckoutController::class,'checkout'])->name('checkoutCheck');
Route::get('/checkout/done',[CheckoutController::class,'checkoutDone'])->name('checkoutDone');


Route::get('/contact', [ContactController::class,'index'])->name('contact');
Route::get('/contact/sent', [ContactController::class,'contactSent'])->name('contactSent');
Route::post('/contact/send',[ContactController::class,'send'])->name('send');
Route::get('/author', [AuthorController::class,'index'])->name('author');
Route::get('/dokumentacija', [AuthorController::class,'dokumentacija'])->name('dokumentacija');

//admin
//Route::group(['routeMiddleware'=>['isAdmin']], function(){
    Route::get('/admin', [AdminController::class, 'index'])->middleware('isAdmin')->name('admin');
    Route::get('/admin/addForm', [AdminController::class, 'callAddProduct'])->middleware('isAdmin')->name('addProdForm');
//});
Route::post('/admin/addForm/addCat', [AdminController::class, 'addCat'])->name('dodajKategorijuADM');
Route::post('/admin/addForm/addAuth', [AdminController::class, 'addAuth'])->name('dodajAutoraADM');

Route::get('admin/updateForm', [AdminController::class, 'callUpdateProduct'])->middleware('isAdmin')->name('updateProdForm');

Route::get('admin/addForm/done',[AdminController::class,'doneAddProd'])->middleware('isAdmin')->name('prodAdded');
Route::get('admin/updateForm/done',[AdminController::class,'doneUpProd'])->middleware('isAdmin')->name('prodUpdated');

Route::post('admin/add', [AdminController::class, 'addProduct'])->name('addProd');
Route::post('admin/update', [AdminController::class, 'updateProduct'])->name('updateProd');
Route::post('admin/remove', [AdminController::class, 'removeProduct'])->name('removeProd');


//sign up/log in/log out
//Route::group(['routeMiddleware'=>['isLogedIn']], function(){
    Route::get('/signup', [SignUpController::class,'index'])->middleware('isLogedIn')->name('signup');
    Route::get('/login', [LogInController::class,'index'])->middleware('isLogedIn')->name('login');
//});
Route::post('/signup/go', [SignUpController::class,'signUp'])->name('signupGo');
Route::post('/login/go',[LogInController::class,'logIn'])->name('loginGo');
Route::get('/logout',[LogInController::class,'logout'])->name('logout');


