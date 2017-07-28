<?php

use Illuminate\Http\Request;

Route::group(['prefix'=> 'tasks'], function () {
    Route::get('', 'TaskController@index');
    Route::post('', 'TaskController@store');
    Route::patch('{task}', 'TaskController@update');
    Route::delete('{task}', 'TaskController@destroy');
});
