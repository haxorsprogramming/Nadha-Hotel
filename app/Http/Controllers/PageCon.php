<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Room;
 
class PageCon extends Controller
{
    public function home()
    {
        return view('home.home');
    }

    public function login()
    {
        return view('login.login');
    }
    
}