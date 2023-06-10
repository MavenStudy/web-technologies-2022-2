<?php
define('ROOT', dirname(__DIR__));
define('IMG_BIG', $_SERVER['DOCUMENT_ROOT'] . "/gallery_img/big/");
define('IMG_SMALL', $_SERVER['DOCUMENT_ROOT'] . "/gallery_img/small/");
define('TEMPLATE_DIR', ROOT . '/template/');
define('LAYOUTS_DIR', 'layouts/');

define('HOST', 'localhost:3306');
define('USER', 'root');
define('PASS', '');
define('DB', 'lesson20');

include ROOT . "/engine/functions.php";
include ROOT . "/engine/db.php";
include ROOT . "/engine/gallery.php";
include ROOT . "/engine/news.php";
include ROOT . "/engine/catalog.php";
include ROOT . "/engine/folders.php";