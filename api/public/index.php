<?php
require_once __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/../routes/router.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->load();

$router = new Router();

$router->addRoute('GET', '/', function() {
    include("../src/controllers/action_send_email.php");
});

$router->run();


