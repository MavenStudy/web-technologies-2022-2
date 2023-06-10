document.addEventListener('DOMContentLoaded', function () {
    const arrows = document.querySelectorAll('.list-item__arrow');

    arrows.forEach(function (arrow) {
        arrow.addEventListener('click', function () {
            const parent = this.parentNode.parentNode;
            const items = parent.querySelector('.list-item__items');
            parent.classList.toggle('list-item_open');
            if (items) {
                items.classList.toggle('list-item__items_open');
            }
        });
    });
});
