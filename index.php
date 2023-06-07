<?php
//1
$number = 0;

do {
    if ($number === 0) {
        echo $number . ' - это ноль.';
    } elseif ($number % 2 === 0) {
        echo $number . ' - чётное число.';
    } else {
        echo $number . ' - нечётное число.';
    }
    echo '<br>';
    $number++;
} while ($number <= 10);

echo '<br>';

//2 и 6
$regions = array(
    'Московская область' => array('Москва', 'Зеленоград', 'Клин'),
    'Ленинградская область' => array('Санкт-Петербург', 'Всеволожск', 'Павловск', 'Кронштадт'),
    'Рязанская область' => array('Рязань', 'Касимов', 'Скопин', 'Сасово')
);

$regionsKeys = array_keys($regions);
$regionsCount = count($regions);

for ($i = 0; $i < $regionsCount; $i++) {
    $region = $regionsKeys[$i];
    $cities = $regions[$region];

    echo $region . ':<br>';

    $citiesCount = count($cities);
    for ($j = 0; $j < $citiesCount; $j++) {
        echo $cities[$j];
        if ($j < $citiesCount - 1) {
            echo ', ';
        }


    }
    for ($k = 0; $k < $citiesCount; $k++) {
        $city = $cities[$k];
        if (mb_substr($city, 0, 1) === 'К') {
            echo '<br> На К: ' . $city;
        }

    }

    echo '<br><br>';
}
//3
function transliterate($string) {
    $translitArray = array(
        'а' => 'a',
        'б' => 'b',
        'в' => 'v',
        'г' => 'g',
        'д' => 'd',
        'е' => 'e',
        'ё' => 'yo',
        'ж' => 'zh',
        'з' => 'z',
        'и' => 'i',
        'й' => 'y',
        'к' => 'k',
        'л' => 'l',
        'м' => 'm',
        'н' => 'n',
        'о' => 'o',
        'п' => 'p',
        'р' => 'r',
        'с' => 's',
        'т' => 't',
        'у' => 'u',
        'ф' => 'f',
        'х' => 'h',
        'ц' => 'ts',
        'ч' => 'ch',
        'ш' => 'sh',
        'щ' => 'sch',
        'ъ' => '',
        'ы' => 'y',
        'ь' => '',
        'э' => 'e',
        'ю' => 'yu',
        'я' => 'ya'
    );

    $transliteratedString = '';
    $string = mb_strtolower($string);
    $stringLength = mb_strlen($string);

    for ($i = 0; $i < $stringLength; $i++) {
        $char = mb_substr($string, $i, 1);
        $transliteratedString .= $translitArray[$char] ?? $char;
    }

    return $transliteratedString;
}

$inputString = 'Лекция';
$transliteratedString = transliterate($inputString);
echo $transliteratedString;

//4
require ("generate.php");

require ("engine/index.php");

