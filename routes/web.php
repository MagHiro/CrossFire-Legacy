<?php
use Illuminate\Support\Facades\Route;
Route::view('/{path?}', 'reactapp')
    ->where('path', '.*');