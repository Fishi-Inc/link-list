const input_topic = document.getElementById('input-topic');
const input_title = document.getElementById('input-title');
const input_url = document.getElementById('input-url');
const input_description = document.getElementById('input_desc');
const input_btn = document.getElementById('input-btn');
const generator_output = document.getElementById('generator-output');

input_btn.addEventListener('click', function () {
    const topic = input_topic.value;
    const title = input_title.value;
    const url = input_url.value;
    const description = input_description.value;

    const current_url = window.location.href;
    if (current_url.endsWith('/')) {
        current_url = current_url.slice(0, -1);
    }
    
    if(topic === '' || title === '' || url === '' || description === '') {
        alert('Bitte trage in jedes Feld etwas ein.');
    }

    if(title.includes('~') && url.includes('~') && description.includes('~')) {
        const data = {
            topic: topic,
            title: title,
            url: url,
            description: description
        };

        create_url_list(current_url, data);
    } else {
        const data = {
            topic: topic,
            title: title,
            url: url,
            description: description
        };

        create_url(current_url, data);
    }
})

function create_url_list(current_url, data) {
    let output = '';
    output = current_url + "/?topic=" + data.topic + "&title=";
    for(let i = 0; i < data.title.length; i++) {
        output += data.title[i] + "~";
        if(i === data.title.length - 1) {
            output = output.slice(0, -1);
        }
    }
    output += "&link=";
    for(let i = 0; i < data.url.length; i++) {
        output += data.url[i] + "~";
        if(i === data.url.length - 1) {
            output = output.slice(0, -1);
        }
    }
    output += "&desc=";
    for(let i = 0; i < data.description.length; i++) {
        output += data.description[i] + "~";
        if(i === data.description.length - 1) {
            output = output.slice(0, -1);
        }
    }

    generator_output.innerHTML = output;
}

function create_url(current_url, data) {
    const output = current_url + "/?topic=" + data.topic + "&title=" + data.title + "&link=" + data.url + "&desc=" + data.description;
    generator_output.innerHTML = output;
}