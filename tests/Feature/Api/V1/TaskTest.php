<?php

namespace Tests\Feature\Api\V1;

use Tests\TestCase;

class TaskTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_create()
    {
        $user = factory(\App\User::class)->create();
        $data = [
          'user_id' => $user->id,
          'description' => 'SOME',
        ];
        $respuesta = $this->json('post', '/api/v1/tasks', $data);
        $respuesta->assertSuccessful();
    }

    public function test_listar()
    {
        factory(\App\Models\Task::class, 2)->create();
        $respuesta = $this->json('get', '/api/v1/tasks');
        $respuesta->assertSuccessful();
        $respuesta->dump();
    }
}
