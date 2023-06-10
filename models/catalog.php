<?php

function getCatalog() {
    return getAssocResult("SELECT * FROM `catalog`");

}

function getOne($id) {
    return getAssocResult("SELECT * FROM `catalog` WHERE id = {$id}")[0];
}