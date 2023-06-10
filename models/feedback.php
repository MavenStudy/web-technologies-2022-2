<?php
function getAllFeedback($productId) {
    $sql = "SELECT * FROM feedbacks WHERE productId = {$productId} ORDER BY id DESC";
    return getAssocResult($sql);
}

function addFeedback() {
    extract($_POST);
    $sql = "INSERT INTO `feedbacks` (`id`, `name`, `feedback`, `productId`) VALUES (NULL, '{$name}', '{$feedback}', '{$productId}')";

    executeSql($sql);
    header("Location: /feedback/?productId={$productId}");
}

function doFeedbackAction($action) {
    if($action === 'add') {
        addFeedback();
        die();
    }

}


