<?php

function getFolders() {
    return getAssocResult("SELECT id, name, parentId FROM `folders`");
}