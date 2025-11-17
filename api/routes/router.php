<?php

class Router {
    private $routes = [];

    public function addRoute($method, $path, $callback) {
        $this->routes[] = [
            'method' => $method,
            'path' => $this->formatPath($path),
            'callback' => $callback
        ];
    }

    public function run() {
        $requestedMethod = $_SERVER['REQUEST_METHOD'];
        $requestedPath = $this->formatPath(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));

        foreach ($this->routes as $route) {
            if ($this->matchRoute($route, $requestedMethod, $requestedPath)) {
                call_user_func($route['callback'], $this->getParams($route['path'], $requestedPath));
                return;
            }
        }

        // Handle 404 Not Found
        http_response_code(404);
        echo "404 Not Found";
    }

    private function formatPath($path) {
        return rtrim($path, '/');
    }

    private function matchRoute($route, $method, $path) {
        $path = $this->formatPath($path);
        $route['path'] = $this->formatPath($route['path']);
        
        if ($route['method'] !== $method) {
            return false;
        }

        $routeParts = explode('/', $route['path']);
        $pathParts = explode('/', $path);

        if (count($routeParts) !== count($pathParts)) {
            return false;
        }

        for ($i = 0; $i < count($routeParts); $i++) {
            if ($routeParts[$i] !== $pathParts[$i] && strpos($routeParts[$i], ':') === false) {
                return false;
            }
        }

        return true;
    }

    private function getParams($routePath, $requestedPath) {
        $params = [];
        $routeParts = explode('/', $routePath);
        $pathParts = explode('/', $requestedPath);

        for ($i = 0; $i < count($routeParts); $i++) {
            if (strpos($routeParts[$i], ':') !== false) {
                $paramName = substr($routeParts[$i], 1);
                $params[$paramName] = $pathParts[$i];
            }
        }

        return $params;
    }
}
