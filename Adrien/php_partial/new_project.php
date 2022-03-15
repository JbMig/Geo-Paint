<?php
ob_start();

$title = "nouveau projet";

require_once __DIR__ . '/../html_partial/new_project.php';

$content = ob_get_clean();