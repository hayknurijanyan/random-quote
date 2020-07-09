
const button = document.getElementById('button');
const quote = document.getElementById('quote');
const author = document.getElementById('author');
button.innerHTML = 'Press';
author.innerHTML = '';
quote.innerHTML = 'Press to start :)';
button.addEventListener('click',randomQuote)


async function randomQuote() {
    const response = await fetch ('https://thesimpsonsquoteapi.glitch.me/quotes')
    let data = await response.json();
    let m =  [...data][0];
    author.innerHTML = m.character;
    quote.innerHTML = `"${m.quote}"`;
    
}
