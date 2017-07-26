<?php

$factory->define(App\Models\Task::class, function (Faker\Generator $faker) {
    return [
        'description' => $faker->text,
        'date' => $faker->dateTime,
        'user_id' => function () {
           return factory(\App\User::class)->create()->id;
        },
    ];
});