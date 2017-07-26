<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\Builder;

abstract class ApiController extends Controller
{
    protected $modelo;

    protected function getTransformer()
    {
        return app(class_basename($this->modelo) . "Transformer");
    }

    protected function applyFilters(Builder $builder) {
        $filtros = request($this->modelo->getFillable());
        foreach ($filtros as $key => $valor) {
            if(!$valor) {
                continue;
            }

            $builder->where($key, $valor);
        }
    }

    protected function ok($resource, $includes = [])
    {
        return fractal($resource, $this->getTransformer())
            ->parseIncludes($includes)
            ->respond();
    }
}