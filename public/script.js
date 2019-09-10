function populateMainArticle(data) {
    $('#main-article img').attr('src', data.imageUrl);
    $('#main-article h1').text(data.title);
    $('#main-article summary').text(data.subtitle);
    $('#main-article details div').text(data.content);
}

function createFeedItem(data) {
    const elementHtmlString = `
        <div class="card article-card my-3">
            <img class="card-img-top" src="${data.imageUrl}">
            <details class="card-body text-right">
                <summary class="card-text p-2">${data.title}</summary>
                <p>${data.content}</p>
            </details>
        </div>
    `;

    return elementHtmlString;
}

function createFlashItem(data) {
    const elementHtmlString = `
        <li class="flash-item">
            <span class="time text-black-50 text-darken-1">${data.time}</span>
            <h6 class="title text-primary">${data.title}</h6>
            <p class="content">${data.content}</p>
            <hr>
        </li>
    `;

    return elementHtmlString;
}

function createTopicItem(data) {
    const elementHtmlString = `
        <a role="button" href="#${data.value}" class="topic btn py-2">${data.name}</a>
    `;

    return elementHtmlString;
}

function createTopicAnchor(data) {
    return `<div id="${data.value}" class="anchor"></div>`;
}

$(document).ready(async function() {
    try {
        const topics = await fetch('/api/topics').then(res => res.json());
        const feed = await fetch('/api/articles/feed').then(res => res.json());
        const mainArticle = await fetch('/api/articles/main').then(res => res.json());
        const flashes = await fetch('/api/flash').then(res => res.json());

        populateMainArticle(mainArticle);

        for (let flash of flashes) {
            const flashItem = createFlashItem(flash);
            $('#flash-list').append(flashItem);
        }
        
        for (let topic of topics) {
            const topicItem = createTopicItem(topic);
            $('#topics').append(topicItem);
            const topicAnchorItem = createTopicAnchor(topic);
            $('#articles').append(topicAnchorItem);
        }

        for (let article of feed) {
            const feedItem = createFeedItem(article);
            $(`#articles #${article.topic}`).after(feedItem);
        }

        $('#scroll').click(function() {
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });

        $(document).scroll(function() {
            if ($(this).scrollTop() > 150) {
                $('#scroll').css('transform', 'scale(1)');
            } else {
                $('#scroll').css('transform', 'scale(0)');
            }
        })
    } catch(err) {
        console.error(err);
    }
});