let data = {};

fetch("assets/ha_quotes.json")
    .then(res => res.json())
    .then(json => {
        data = json;
        console.log("JSON loaded:", Object.keys(data).length, "chapters");
        document.querySelector("button").addEventListener("click", generateQuote);
    });

function generateQuote() {
    const keys = Object.keys(data);
    const randomChapter = keys[Math.floor(Math.random() * keys.length)];
    const sentences = data[randomChapter];
    const randomSentence = sentences[Math.floor(Math.random() * sentences.length)];

    document.getElementById("quote").querySelector("p").textContent = randomSentence;
    document.getElementById("chapter").textContent = randomChapter;
}