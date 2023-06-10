<h2>Каталог</h2>

<div>
    <?php foreach ($catalog as $item): ?>
        <div>
            <h2><?=$item['name']?></h2>
            <img src="/img/<?=$item['img']?>" alt="<?=$item['img']?>" width="250" onclick="location.href='feedback/?productId=<?=$item['id']?>'">
            <br>
            Цена: <?=$item['price']?><br>
            <button>Купить</button>
            <hr>
        </div>
    <?php endforeach; ?>
</div>

