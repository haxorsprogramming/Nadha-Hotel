<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class PageCon extends Controller
{
    public function login()
    {
        return view('page.loginPage');
    }
    
}