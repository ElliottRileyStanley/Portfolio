window.onload = load()



async function load() {
    const posts = [
        `Blog/Filler.html`,
        `Blog/Test1.html`,
        `Blog/Test2.html`
    ];
    for (const post of posts) {
        console.log(post)
        const response = await fetch(post, {method: 'GET'});
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        console.log(doc.documentElement.innerHTML);
        console.log("")
    }
}