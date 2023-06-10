<div>
    <h3>Вы выбрали: <?= $catalog['name'] ?></h3>
    <img src="/img/<?=$catalog['img']?>" alt="" width="250"><br>
    <h3>Подробная информация: <?= $catalog['description'] ?></h3>
    <h2>Отзывы</h2>
    <form action="/feedback/add/" method="post">
        Оставьте отзыв: <br>
        <input type="text" name="name" placeholder="Ваше имя"><br>
        <input type="text" name="feedback" placeholder="Ваш отзыв"><br>
        <input type="number" name="productId" hidden value="<?= $_GET['productId'] ?>"><br>
        <input type="submit" value="Добавить">
    </form>

    <div class="feedback">
        <?php foreach ($feedbacks as $value): ?>
            <div class="feedback-card">
                <span class="author"><?=$value['name']?>: </span>
                <span class="text"><?= $value['feedback'] ?></span>
        <?php endforeach; ?>
    </div>
</div>


