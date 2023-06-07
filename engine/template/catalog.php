<h2>Каталог</h2>

<div>
    <?php foreach ($catalog as $item): ?>
        <div>
            <h2><?=$item['name']?></h2>
            <img src="/engine/img/<?=$item['image']?>" alt="" width="250">
            <br>
            <span>Цена: <?=$item['price']?></span>
            <button>Купить</button>
            <hr>
        </div>
    <?php endforeach; ?>

</div>
