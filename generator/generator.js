const input_topic = document.getElementById('input-topic');
const input_btn = document.getElementById('input-btn');
const generator_output = document.getElementById('generator-output');
const add_btn = document.getElementById('add-btn');
const card_container = document.getElementById('card-container');
const btn_copy_link = document.getElementById('btn-copy-link');

input_btn.addEventListener('click', function () {
    const topic = input_topic.value;
    const input_title = document.getElementById('input-title');
    const input_url = document.getElementById('input-url');
    const input_description = document.getElementById('input_desc');
    const generator_card = document.querySelectorAll('.generator-card');

    const title = input_title.innerText;
    const url = input_url.innerText;
    const desc = input_description.innerText;
    description = desc.replace(/\n/g, '&lt;br&gt;');

    const current_url_raw = window.location.href;
    if (current_url_raw.endsWith('/')) {
        current_url = current_url_raw.slice(0, -1);
    } else if(current_url_raw.endsWith('/index.html')) {
        current_url = current_url_raw.slice(0, -11);
    }
    
    if(topic === '' || title === '' || url === '' || description === '') {
        alert('Du solltest in jedes Feld etwas eintragen.');
    }

    console.log(generator_card.length)
    if(generator_card.length === 0) {
        const data = {
            topic: topic,
            title: title,
            url: url,
            description: description
        };

        create_url(current_url, data);
    } else {
        const input_title_class = document.querySelectorAll('.input-title');
        const input_url_class = document.querySelectorAll('.input-url');
        const input_description_class = document.querySelectorAll('.input_desc');

        const titles = [];
        const urls = [];
        const descriptions = [];

        for (let i = 0; i < generator_card.length; i++) {
            const title = input_title_class[i].innerText;
            const url = input_url_class[i].innerText;
            const desc = input_description_class[i].innerText;

            titles.push(title);
            urls.push(url);
            descriptions.push(desc);
        }

        const data = {
            topic: topic,
            title: titles.join('~'),
            url: urls.join('~'),
            description: descriptions.join('~')
        };

        create_url(current_url, data);
    }
})

// function create_url_list(current_url, data) {
//     let output = '';
//     output = current_url + "/?topic=" + data.topic + "&title=";
//     for(let i = 0; i < data.title.length; i++) {
//         output += data.title[i] + "~";
//         if(i === data.title.length - 1) {
//             output = output.slice(0, -1);
//         }
//     }
//     output += "&link=";
//     for(let i = 0; i < data.url.length; i++) {
//         output += data.url[i] + "~";
//         if(i === data.url.length - 1) {
//             output = output.slice(0, -1);
//         }
//     }
//     output += "&desc=";
//     for(let i = 0; i < data.description.length; i++) {
//         output += data.description[i] + "~";
//         if(i === data.description.length - 1) {
//             output = output.slice(0, -1);
//         }
//     }

//     generator_output.innerHTML = output;
// }

function create_url(current_url, data) {
    current_url = current_url.replace('/generator', '/');
    const output = current_url + "?topic=" + data.topic + "&title=" + data.title + "&link=" + data.url + "&desc=" + data.description;
    generator_output.innerHTML = output;
}

add_btn.addEventListener('click', function () {
    const html = `<div class="generator-card">
    <p class="f1 input-field">Titel:</p><input type="text" class="input f1 fc1 input-title">
    <p class="f1 input-field">URL:</p><input type="url" class="input f1 fc1 input-url">
    <p class="f1 input-field">Beschreibung:</p><span contenteditable="true" class="input textarea f1 fc1 input_desc"></span>
    </div>`;
    console.log(html);

    card_container.innerHTML += html;
})

btn_copy_link.addEventListener('click', function () {
    const link = generator_output.innerText;
    navigator.clipboard.writeText(link);

    alert('Link wurde in die Zwischenablage kopiert.');
});