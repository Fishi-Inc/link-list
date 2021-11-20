window.addEventListener("load", function () {
    const topic_div = document.querySelector("#topic-div");
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    if (!urlParams.has("title") || !urlParams.has("desc") || !urlParams.has("link")) {
        alert("Um einen gültigen Link zu erstellen gehe wie folgt vor:\nGebe hinter der derzietigen URL ein ? ein,\ndann schreibe topic=Thema,\nArgumente werden dann immer mit einem & getrennt\nDu kannst dann ergänzen:\ntitle=Titel\ndesc=Beschreibung und\nlink=https://website.com\n(es ist auch Möglich mehrere Titel, Links und Beschreibungen zu schreiben, diese müssen durch ein ~ getrennt werden.)\n\nBeispiel:\n/?topic=Test&title=test1~test2&link=https://fishi.fish~https://website.de&desc=Test description 1~Test description 2")
        return;
    }

    const topic = urlParams.get('topic');
    const title_raw = urlParams.get('title');
    const desc_raw = urlParams.get('desc');
    const link_raw = urlParams.get('link');

    topic_div.innerHTML = topic_div.innerHTML + " - " + topic;

    if (title_raw.split("~").length > 1) {
        const title = title_raw.split("~");
        const desc = desc_raw.split("~");
        const link = link_raw.split("~");
        array_make_div(title, desc, link);
    } else {
        const title = title_raw;
        const desc = desc_raw;
        const link = link_raw;
        make_div(title, desc, link);
    }
})

function array_make_div(title_list, desc_list, link_list) {
    for ( let i = 0; i < title_list.length; i++) {
        const link_flex = document.querySelector("#link-flex");
        const container = this.document.createElement('div');
        container.classList.add('container-link');
        link_flex.appendChild(container);

        const title_a = this.document.createElement('a');
        title_a.classList.add('h2');
        title_a.classList.add('a');
        title_a.classList.add('fc1');
        title_a.innerHTML = title_list[i];
        title_a.setAttribute('href', link_list[i]);
        title_a.setAttribute('target', '_blank');
        container.appendChild(title_a);

        const desc_p = this.document.createElement('p');
        desc_p.classList.add('f2');
        desc_p.classList.add('fc2');
        desc_p.innerHTML = desc_list[i];
        container.appendChild(desc_p);
    }

    // title_list.forEach(function (title) {
    //     const title_a = this.document.createElement('a');
    //     title_a.classList.add('h2');
    //     title_a.classList.add('a');
    //     title_a.innerHTML = title;
    //     container.appendChild(title_a);
    // });

    // link_list.forEach(function (link) {
    //     title_a.setAttribute('href', link);
    //     title_a.setAttribute('target', '_blank');
    // });
    
    // desc_list.forEach(function (desc) {
    //     const desc_p = this.document.createElement('p');
    //     desc_p.classList.add('f2');
    //     desc_p.innerHTML = desc;
    //     container.appendChild(desc_p);
    // });
}

function make_div(title, desc, link) {
    const link_flex = document.querySelector("#link-flex");
    const container = this.document.createElement('div');
    container.classList.add('container-link');
    link_flex.appendChild(container);
    const title_a = this.document.createElement('a');
    title_a.classList.add('h2');
    title_a.classList.add('a');
    title_a.classList.add('fc1');
    title_a.setAttribute('href', link);
    title_a.setAttribute('target', '_blank');
    title_a.innerHTML = title;
    container.appendChild(title_a);

    const desc_p = this.document.createElement('p');
    desc_p.classList.add('f2');
    desc_p.classList.add('fc2');
    desc_p.innerHTML = desc;
    container.appendChild(desc_p);
}