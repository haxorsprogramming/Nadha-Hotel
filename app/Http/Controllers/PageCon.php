<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Room;

class PageCon extends Controller
{
    public function login()
    {
        $room = Room::where('nama_room','Deluxe Moon') -> get();
        return view('page.loginPage', ['room' => $room]);
    }
    
}