<?php

/*
 * used: https://www.programmableweb.com/news/how-to-build-restful-apis-using-php-and-laravel/how-to/2014/08/13
 * used:
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

//return all sections
Route::resource('sections', 'sectionController');

Route::get('sections/{id}', function($id){
    $sections = array(
        1 => 'create',
        2 => 'local changes',
        3 => 'commit history'
    );
    return array($id => $sections[$id]);
}); //end of route section