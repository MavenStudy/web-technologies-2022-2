<?php
define('TEMPLATES_DIR', 'template/');
define('LAYOUTS_DIR', 'layouts/');

$page = 'index';
if (isset($_GET['page'])) {
    $page = $_GET['page'];
}
$params = [];

switch ($page) {
    case 'index':
        $params['title'] = 'Главная';
        $params['menu'] = getMenu();
        break;
    case 'catalog':
        $params['title'] = 'Каталог';
        $params['catalog'] = getCatalog();
        $params['menu'] = getMenu();
        break;
    case 'about':
        $params['title'] = 'О нас';
        $params['phone'] = '+7 777 777 77 77';
        $params['menu'] = getMenu();
        break;
    case 'apicatalog':
        echo json_encode(getCatalog(), JSON_UNESCAPED_UNICODE);
        die();
    default:
        echo "404";
        die();
}

function getCatalog()
{
    return [
        [
            'name' => 'Пицца',
            'price' => 250,
            'image' => 'pizza.jpg'
        ],
        [
            'name' => 'Чай',
            'price' => 25,
            'image' => 'tea.jpg'
        ],
        [
            'name' => 'Яблоко',
            'price' => 50,
            'image' => 'apple.jpg'
        ],
    ];
}

function getMenu() {
    return [
        [
            'title' => 'Главная',
            'link' => '',
            'submenu' => [
                [
                    'title' => 'Подменю',
                    'link' => 'test.php',
                ],
            ],

        ],
        [
            'title' => 'Каталог',
            'link' => 'catalog',
            'submenu' => [
                [
                    'title' => 'Подменю',
                    'link' => 'test.php',
                ],
            ],
        ],
        [
            'title' => 'О нас',
            'link' => 'about',
            'submenu' => [
                [
                    'title' => 'Подменю',
                    'link' => 'test.php',
                ],
            ],
        ],
    ];
}
function renderTemplate($page, $params = []) {

    extract($params);

    ob_start();
    include TEMPLATES_DIR . $page . ".php";
    return ob_get_clean();
}

echo renderTemplate(LAYOUTS_DIR . 'main', [
    'title' => $params['title'],
    'menu' => renderTemplate('menu', $params),
    'content' => renderTemplate($page, $params)
]);

