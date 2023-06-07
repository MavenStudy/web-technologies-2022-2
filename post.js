import {Post} from "./src/components/post.js"

const getPost = async (postId) => {
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    return await res.json();
}

const getComments = async (postId) => {
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    return await res.json();
}

const init = async () => {
    const post = document.getElementById('post-card');
    const comments = document.getElementById('comments');
    let posts = new Post(post, getPost, getComments, comments);
    await posts.init();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
}
else {
    await init();
}
