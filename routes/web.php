<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;


Route::get('/', [PostController::class,'index'])->name('/');
Route::resource('posts',PostController::class)->except('index');