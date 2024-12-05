load();
resize();

async function load() {
    const posts = [
        `/Blog/Filler.html`,
        `/Blog/Test1.html`,
        `/Blog/Test2.html`
    ];
    for (const post of posts) {
        const response = await fetch(post, {method: 'GET'});
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        var post_div = document.createElement('div');
        post_div.classList.add("post");
        post_div.innerHTML = `
        <h1 class="postTitle">${doc.getElementsByName("title")[0].content}</h1>

        <p class="postDescription">${doc.getElementsByName("description")[0].content}</p>
        <p class="postDate">${doc.getElementsByName("date")[0].content}</p>
        `;
        document.getElementById("posts").appendChild(post_div);
    }
}

function resize() {
    var width = document.getElementById("posts").clientWidth;
    var cols =  Math.max(Math.floor(width/250), 1);
    var posts = document.getElementsByClassName("post")
    for (const post in posts) {
        console.log(post)
        console.log(Math.floor(width/cols) + "px")
        post.style.width = Math.floor(width/cols) + "px";
    }
}