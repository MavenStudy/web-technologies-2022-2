export class Post {
    #el = null
    #post = null
    #getPost = null
    #comments = null
    #getComment = null
    constructor(el, getPost, getComment, comments) {
        this.#el = el;
        this.#comments = comments;
        this.#getPost = getPost;
        this.#getComment = getComment;
    }

    async init () {
        const url = new URL(window.location.href);
        this.#post = +url.searchParams.get('post');
        await this.loadPosts();
        await this.loadComments()

    }

    async loadPosts() {
        try {
            let posts = await this.#getPost(this.#post);
            this.renderPost(posts);
        } catch (err) {
            console.log(err);
        }
    }

    renderPost (posts) {
        this.#el.innerHTML =`
            <p>User id: ${posts.userId}</p>
            <p>Post id: ${posts.id}</p>
            <p>Header: ${posts.title}</p>
            <p>Content: ${posts.body}</p>`
    }

    async loadComments() {
        try {
            let comments = await this.#getComment(this.#post);
            this.renderComments(comments);
        } catch (err) {
            console.log(err);
        }
    }

    renderComments (comments) {
        for (let i in comments) {
            this.#comments.innerHTML +=
                `<div id="comments">
                    <h4>${comments[i].name} (${comments[i].email})</h4>
                    <p>${comments[i].body}</p>
                </div>`
        }
    }
}