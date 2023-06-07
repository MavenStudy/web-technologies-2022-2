
<?php foreach ($menu as $item): ?>
    <?php if (isset($item['link'])): ?>
        <a href="/engine/?page=<?= $item['link'] ?>"><?= $item['title'] ?></a>
    <?php else: ?>
        <a href="/engine/"><?= $item['title'] ?></a>
    <?php endif; ?>

    <?php if (isset($item['submenu'])): ?>
        <ul>
            <?php foreach ($item['submenu'] as $submenuItem): ?>
                <li>
                    <a href="/engine/?page=<?= $submenuItem['link'] ?>"><?= $submenuItem['title'] ?></a>
                </li>
            <?php endforeach; ?>
        </ul>
    <?php endif; ?>
<?php endforeach; ?>