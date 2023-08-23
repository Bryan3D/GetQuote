const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newTwitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');



let apiQuotes = [];

// Show Loading

// Loading Spinner Shown
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
  }
  
  // Remove Loading Spinner
  function complete() {
    if (!loader.hidden) {
      quoteContainer.hidden = false;
      loader.hidden = true;
    }
  }




// Show New Quote


function newQuote() {
    loading();

    // Pick a random quote from localQuotes array
    // const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];

    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

    // Set author text
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }

    // Set quote text
    quoteText.textContent = quote.text;

    // Check Quote length to determine styling
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }

     complete();
}


// function newQuote() {
//     // loading();
     
//     // Pick a random quote from apiQuotes array
//     const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
//     console.log(quote);
//     // authorText.textContent = quote.author;
//     // quoteText.textContent = quote.text;
//     // Check if Author field is blank and replace it with 'Unknown'
//     if (!quote.author) {
//         authorText.textContent = 'Unknown';
//     } else {
//         authorText.textContent = quote.author;
//     }   
//     // Check Quote length to determine styling  
//     if (quote.text.length > 120) {
//         quoteText.classList.add('long-quote');
//     } else {
//         quoteText.classList.remove('long-quote');
//     }
// //    set quote, hide loader

//     quoteText.textContent = quote.text;
//     // complete();

// }


// Get Quotes From fetch API


async function getQuotes() {

   

const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
try{

    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();

}catch(error){

    alert('Whoops, no quote', error);

//  Catch Error Here

}

}


// Tweet Quote

function tweetQuote() {
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl, '_blank');

}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
newTwitterBtn.addEventListener('click', tweetQuote);



// on load

getQuotes();










