<?php

Route::get('me', function () {
   return auth()->user();
});

Route::get('/', function () {
    return redirect('w');
});

Route::group(['prefix' => 'w'], function () {
    Route::get('/', 'PageController@vue');
    Route::get('/{all?}', 'PageController@vue')->where('all', '[\/\w\.-]*');;
});

Route::get('logout', 'Auth\LoginController@logout');

Route::get('login/github', 'Auth\LoginController@redirectToProvider');
Route::get('login/github/callback', 'Auth\LoginController@handleProviderCallback');