<?php
// La partie à partir du premier / dans l'url
$uri = $_SERVER['REQUEST_URI'];

if ($uri == '/entrer.php') {
    if (!isset($_SESSION['user'])) {
        header('Location: /login');
        exit;
    } else {
        header('Location: /projet');
        exit;
    }
}
switch ($uri) {
    case '/login':
        require_once __DIR__ . '/php_partial/login.php';
        break;
    case '/sign_in':
        require_once __DIR__ . '/php_partial/sign_in.php';
        break;
    case '/projet':
        require_once __DIR__ . '/php_partial/projet.php';
        break;
    case "/new_project":
        require_once __DIR__ . '/php_partial/new_project.php';
        break;
    case "/load_project":
        require_once __DIR__ . '/php_partial/load_project.php';
        break;
    default:
        http_response_code(404);
        $content = file_get_contents(__DIR__ . '/html_partial/alerts/404.php');
}
require_once __DIR__ . '/html_partial/bases_html.php';
?>
