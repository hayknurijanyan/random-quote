
const button = document.getElementById('button');
const quote = document.getElementById('quote');
const author = document.getElementById('author');
button.innerHTML = 'Press';
author.innerHTML = '';
quote.innerHTML = 'Press to start :)';
button.addEventListener('click',randomQuote)

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

async function randomQuote() {
    const response = await fetch ('https://type.fit/api/quotes')
    let data = await response.json();
     let m =  [...data][getRandomInt(1642)];
    console.log(m)
    m.author === null ? author.innerHTML = "Unknown Writer" : author.innerHTML = m.author;
    quote.innerHTML = `"${m.text}"`;
    
}
