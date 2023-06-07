import {Catalog} from "./src/components/catalog.js";

const renderPostItem = (item) => {
    return `<a  href="post.html?post=${item.id}" class="post-card">
        <p class="post-card__title">${item.title}</p>
        <p class="post-card__body">${item.body}</p>
    </a>`;
}

const getPostItems = async ({ limit, page }) => {
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
    const total = +res.headers.get('x-total-count');
    const posts = await res.json();
    return { posts, total };
}

const init = async () => {
    const catalog = document.getElementById('catalog');
    await new Catalog(catalog, {
        renderCard: renderPostItem,
        getPosts: getPostItems
    }).init();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
}
else {
    await init();
}
