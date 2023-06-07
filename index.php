<?php
//4-5
function logRequest() {
    $logDir = 'logs';
    $logFile = $logDir . '/log.txt';
    $logCounterFile = $logDir . '/log_counter.txt';
    $requestTime = date('Y-m-d H:i:s');
    $logData = "Request time: $requestTime" . PHP_EOL;

    $logCounter = intval(file_get_contents($logCounterFile));
    $logCounter++;

    if ($logCounter > 1 && $logCounter % 10 == 1) {

        $previousLogCounter = floor($logCounter / 10);
        $previousLogFileName = $logDir . '/logs' . $previousLogCounter . '.txt';

        $previousLog = file_get_contents($logFile);

        file_put_contents($previousLogFileName, $previousLog);

        file_put_contents($logFile, $logData);
    } else {
        file_put_contents($logFile, $logData, FILE_APPEND);
    }

    file_put_contents($logCounterFile, $logCounter);
}

logRequest();
//1-2
define('DIR_IMG', './gallery_img', false);

function renderTemplate($page, $arrImg = [], $arrHtml = []) {
    ob_start();
    include $page . ".php";
    return ob_get_clean();
}


function renderArr() {
    $arr = [];
    $scanDir = scandir(DIR_IMG);
    for ($i = 0; $i < count($scanDir); $i++) {
        if (strlen($scanDir[$i]) > 2) {
            $scanDirImg = scanDir(DIR_IMG . "/" . $scanDir[$i]);
            for ($j = 0; $j < count($scanDirImg); $j++) {
                if (strlen($scanDirImg[$j]) > 2) {
                    $arr[$i - 2][$j - 2] = DIR_IMG . "/" . $scanDir[$i] . "/" . $scanDirImg[$j];
                }
            }
        }
    }

    return $arr;
}

$arrImg = renderArr();

$gallery = renderTemplate('gallery', $arrImg);

$arrHtml = array($gallery);

echo renderTemplate('main', $arrImg, $arrHtml);
//3
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_FILES['image'])) {
        $file = $_FILES['image'];

        $allowedTypes = ['image/jpeg', 'image/png'];
        if (!in_array($file['type'], $allowedTypes)) {
            echo 'Разрешены только файлы JPEG и PNG.';
            exit;
        }

        $maxSize = 5 * 1024 * 1024;
        if ($file['size'] > $maxSize) {
            echo 'Файл слишком большой. Максимальный размер: 5 МБ.';
            exit;
        }

        $uploadPath = DIR_IMG . '/big/' . $file['name'];

        $thumbnailPath = DIR_IMG . '/small/' . $file['name'];

        if (move_uploaded_file($file['tmp_name'], $uploadPath)) {
            copy($uploadPath, $thumbnailPath);

        } else {
            echo 'Ошибка при загрузке файла.';
        }
    } else {
        echo 'Файл не найден.';
    }
}

