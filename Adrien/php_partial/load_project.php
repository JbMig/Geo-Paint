<?php
ob_start();
$title = $_SESSION["projet"]["project_name"];

require_once __DIR__ . '/../html_partial/load_project.php';

$content = ob_get_clean();