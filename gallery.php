<link rel="stylesheet" href="style.css">
<div id="main">
    <div class="post_title"><h2 style="margin-left: 20px">Моя галерея</h2></div>
    <div class="gallery">
        <?php
        foreach ($arrImg[0] as $index => $href) {
            $src = $arrImg[1][$index];
            ?>
            <a rel="gallery" class="photo" href="<?= $href ?>">
                <img src="<?= $src ?>" width="150" height="100" alt="img" />
            </a>
            <?php
        }
        ?>
    </div>
</div>
<form method="POST" enctype="multipart/form-data">
    <input type="file" name="image" accept="image/jpeg, image/png" required>
    <input type="submit" value="Загрузить">
</form>