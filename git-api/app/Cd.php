<?php
/**
 * Created by PhpStorm.
 * User: kellyannmcnamara
 * Date: 2017-05-18
 * Time: 8:31 AM
 */

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cd extends Model
{
    //place the table name from the database
    protected $table = "cds";

    //override primaryKey in the table
    protected $primaryKey = "id";

    //timestamp - change if your table doesn't have a timestamp because by default it looks for a timestamp
    public $timestamps = false;

    //allow mass assignment
    //fillable takes an array of what fields you want to mass assign
    protected $fillable = ['titel', 'interpret', 'jahr'];
}