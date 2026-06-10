const output = document.getElementById('output');
const input = document.getElementById('repl-input');
const inputRow = document.getElementById('input-row');
let data = {};

fetch("ha_quotes.json")
.then(res => res.json())
.then(json => {
    data = json;
    console.log("JSON loaded:", Object.keys(data).length, "chapters");
    document.querySelector("button").addEventListener("click", generateQuote);
});

function addLine(text) {
  const div = document.createElement('div');
  div.className = 'line';
  div.textContent = text;
  output.appendChild(div);
}

function moveCursorToInput() {
  input.scrollIntoView({ block: 'nearest' });
}

input.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    input.value = '';
    const keys = Object.keys(data);
    const randomChapter = keys[Math.floor(Math.random() * keys.length)];
    const sentences = data[randomChapter];
    const randomSentence = sentences[Math.floor(Math.random() * sentences.length)];
    addLine(randomSentence);
    moveCursorToInput();
  }
});

document.querySelector('.terminal-wrap').addEventListener('click', () => input.focus());
input.focus();