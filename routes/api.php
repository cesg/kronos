<?php

use Illuminate\Http\Request;

Route::get('me', function (Request $request) {
    return $request->user();
});

Route::prefix('v1/tasks')
    ->middleware('auth:api')
    ->namespace('Api\V1')
    ->group(function () {
        Route::get('', 'TaskController@index');
        Route::post('', 'TaskController@store');
        Route::patch('{task}', 'TaskController@update');
        Route::patch('{task}', 'TaskController@destroy');
    });