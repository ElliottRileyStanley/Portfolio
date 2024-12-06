window.onload = async function() {
    await load();
    resize();
}

window.onresize = resize;

async function load() {
    var posts = [
        `/Blog/Filler.html`,
        `/Blog/ImageConverter.html`,
        `/Blog/Anagram.html`
    ];
    for (const post of posts) {
        const response = await fetch(post, {method: 'GET'});
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        var post_div = document.createElement('div');
        post_div.classList.add("post");
        post_div.innerHTML = `
        <a href="${post}" class="postLink">
        <h1 class="postTitle">${doc.getElementsByName("title")[0].content}<img class="postLanguage" src="${doc.getElementsByName("language")[0].content}"></h1>
        <p class="postDescription">${doc.getElementsByName("description")[0].content}</p>
        <p class="postDate">${doc.getElementsByName("date")[0].content}</p>
        </a>
        `;
        document.getElementById("posts").appendChild(post_div);
    }
}

async function resize() {
    var width = document.getElementById("posts").clientWidth;
    console.log(width)
    var cols =  Math.max(Math.floor(width/260), 1);
    var posts = document.querySelectorAll(".post")
    for (const post of posts) {
        console.log(post)
        console.log()
        post.style.width = Math.floor(width/cols) - 13 + "px"
    }
}