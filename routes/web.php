<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    sleep(2);
    return inertia('Home',['name' => 'Fajar']);
});

Route::get('/', [PostController::class,'index']);
Route::resource('posts',PostController::class)->except('index');