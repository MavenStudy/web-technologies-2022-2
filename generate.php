<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Menu</title>
</head>
<body>

<?php

$menu = [
    'Пункт 1',
    'Пункт 2',
    'Пункт 3'=>
            ['Подпункт 1',
             'Подпункт 2',
             'Подпункт 3'],
    'Пункт 4'
];

function generateMenuHTML($menuItems)
{
    $menuHTML = '<ul>';

    foreach ($menuItems as $key => $menuItem) {
        if (is_array($menuItem)) {
            $menuHTML .= '<li>' . $key;
            $menuHTML .= generateMenuHTML($menuItem);
            $menuHTML .= '</li>';
        } else {
            $menuHTML .= '<li>' . $menuItem . '</li>';
        }
    }

    $menuHTML .= '</ul>';

    return $menuHTML;
}

$menuHTML = generateMenuHTML($menu);

echo $menuHTML;
?>

</body>
</html>