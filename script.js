$(document).ready(async function() {
    try {
        const response = await fetch('/meta.json');
        const meta = await response.json();

        $('#main-article img').attr('src', meta.main.imageUrl);
        $('#main-article h1').text(meta.main.title);
        $('#main-article summary').text(meta.main.subtitle);
        $('#main-article details div').text(meta.main.article);
    } catch(err) {
        console.error(err);
    }
});