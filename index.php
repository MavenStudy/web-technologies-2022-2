//1
<?php
$a = rand(-10, 10);
$b = rand(-10, 10);

if ($a >= 0 && $b >= 0) {
    $result = $a - $b;
    echo "Разность чисел: " . $result;
} elseif ($a < 0 && $b < 0) {
    $result = $a * $b;
    echo "Произведение чисел: " . $result;
} else {
    $result = $a + $b;
    echo "Сумма чисел: " . $result;
}
?>
//2
<?php

$a = rand(0, 15);
echo "<br><br>";

echo "От а до 15: ";
while ($a <= 15) {
    switch ($a) {
        default:
            echo $a . " ";
            $a++;
            break;
    }
}
?>
//3
<?php
function plus($a, $b) {
    return $a + $b;
}

function minus($a, $b) {
    return $a - $b;
}

function multiply($a, $b) {
    return $a * $b;
}

function divide($a, $b) {
    if ($b != 0) {
        return $a / $b;
    } else {
        return "Нельзя делить на 0";
    }
}
$a = rand(0, 9);
$b = rand(0, 9);
echo "<br><br>";
echo "Сложение " . plus($a, $b) . "<br>";
echo "Вычитание: " . minus($a, $b) . "<br>";
echo "Умножение: " . multiply($a, $b) . "<br>";
echo "Деление: " . divide($a, $b) . "<br>";

?>
//4
<?php
function mathOperation($arg1, $arg2, $operation) {

    $operationName = '';
    switch ($operation) {
        case 1:
            $operationName = 'Сложение';
            $result = plus($arg1, $arg2);
            break;
        case 2:
            $operationName = 'Вычитание';
            $result = minus($arg1, $arg2);
            break;
        case 3:
            $operationName = 'Умножение';
            $result = multiply($arg1, $arg2);
            break;
        case 4:
            $operationName = 'Деление';
            $result = divide($arg1, $arg2);
            break;
        default:
            return 'Неизвестная операция';

     return $operationName . ": " . $result;
    }
    return $operationName . ": " . $result;
}

$arg1 = rand(0, 9);
$arg2 = rand(0, 9);
$operation = rand(0, 4);

echo "<br><br>";
echo mathOperation($arg1, $arg2, $operation) ;

?>
//5
<?php
echo "<br><br>";

$date =  date('Y');
$content = file_get_contents('index.html');
$content = str_replace("{{ date }}", $date, $content);

require('date.php');
echo $date;
echo $content;
?>
//6
<?php
echo "<br><br>";
function power($val, $pow) {
    if ($pow == 0) {
        return 1;
    }
    return $val * power($val, $pow - 1);
}
$val = rand(1, 9);
$pow = rand(0, 3);
echo "Число $val в степени $pow: " . power($val, $pow);
?>
