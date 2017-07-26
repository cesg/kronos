<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = [
      'description',
      'user_id',
        'date'
    ];

    protected $casts = [
      'date' => 'timestamp'
    ];
}
