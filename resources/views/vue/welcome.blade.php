@extends('layouts.app')
@section('content')
    <div
            user='{{ auth()->check() ? auth()->user() : '{}' }}'
            id="app"
    >

    </div>
@endsection