@extends('layouts.app')
@section('content')
<div
        apiToken="{{ auth()->user()->api_token }}"
        id="app"
>

</div>
@endsection