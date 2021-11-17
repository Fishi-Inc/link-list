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
    
    if(topic === '' || title === '' || url === '' || description === '') {
        alert('Bitte trage in jedes Feld etwas ein.');
    }



    const data = {
        topic: topic,
        title: title,
        url: url,
        description: description
    };

    const current_url = window.location.href;
    if (current_url.endsWith('/')) {
        current_url = current_url.slice(0, -1);
    }

    const output = current_url + "/?topic=" + data.topic + "&title=" + data.title + "&link=" + data.url + "&desc=" + data.description;
    generator_output.innerHTML = output;
})