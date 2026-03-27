<?php

use App\Controllers\UserController;
use App\Modules\Blog\Controllers\BlogPostController;

/*
|--------------------------
|  API Routes
|--------------------------
*/
$router->get('/api/users', [UserController::class, 'index']); //create an instance of controller and call the index method
$router->post('/api/users', [UserController::class, 'store']);
$router->get('/api/users/{id}', [UserController::class, 'show']);

$router->get('/api/v1/admin/blog', [BlogPostController::class, 'index']);
$router->post('/api/v1/admin/blog', [BlogPostController::class, 'store']);
$router->put('/api/v1/admin/blog/{id}', [BlogPostController::class, 'edit']);
$router->patch('/api/v1/admin/blog/updateviews', [BlogPostController::class, 'updateViews']);
$router->delete('/api/v1/admin/blog/{id}', [BlogPostController::class, 'delete']);

?>
