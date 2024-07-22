let availableKeywords = [
    'How to learn HTML',
    'What is CSS',
    'How to learn Javascript',
    'How to became web developer',
    'Youtube',
    'Amazon',
    'How to became freelancer',
    'Login form using html and css',
    'whatsapp web',
    'greekforgeeks',
    'code with herry',
    'instagram',
    'Google chrome',
    'w3schools',


];
const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");
inputBox.onkeyup = function() {
    let result = [];
    let input = inputBox.value;
    if (input.length) {
        result = availableKeywords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);
}

function display(result) {
    const content = result.map((list) => {
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });
    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list) {
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';

}