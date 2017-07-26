<?php

namespace App\Http\Transformers;


use App\Models\Task;
use League\Fractal\TransformerAbstract;

class TaskTransformer extends TransformerAbstract
{
    public function transform(Task $task)
    {
        return [
          'id' => $task->id,
          'description' => $task->description,
          'user_id' => $task->user_id,
          'date' => $task->date
        ];
    }
}