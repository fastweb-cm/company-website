<?php

use App\Controllers\UserController;
/*
|--------------------------
|  API Routes
|--------------------------
*/
$router->get('/api/users', [UserController::class, 'index']); //create an instance of controller and call the index method
$router->post('/api/users', [UserController::class, 'store']);
$router->get('/api/users/{id}', [UserController::class, 'show']);

?>