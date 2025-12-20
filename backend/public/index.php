<?php 
declare(strict_types=1); // enable strict type checking
date_default_timezone_set("Africa/Douala");

require __DIR__ . '/../vendor/autoload.php'; // autoload dependencies

use Dotenv\Dotenv;
use App\Core\Router;

// Load environment (.env)
$dotenv = Dotenv::createImmutable(__DIR__ . '/../'); 
$dotenv->load();

//load app config
$config = require __DIR__ . '/../config/app.php';

//initialize router with config
$router = new Router($config);

//register routes
require_once __DIR__ . '/../app/Routes/api.php';

//run
$router->dispatch();

?>