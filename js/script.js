/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

// Array of all the quotes
const quotes = [ {quote: "Without music, life would be a mistake.", source: "Friedrich Nietzsche"}, 
                {quote: "No one can make you feel inferior without your consent.", source: "Eleanor Roosevelt", citation: " This is My Story"}, 
                {quote: "I have not failed. I've just found 10,000 ways that won't work.", source: "Thomas A. Edison" }, 
                {quote: "So many books, so little time.", source: "Oscar Wilde"}, 
                {quote: "Please think about your legacy, because you're writing it every day.", source:"Gary Vaynerchuck", year: 2018} ];
console.log(quotes);


/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/
// Generates random quotes  
function getRandomQuote() {
  var rand = Math.floor(Math.random() * quotes.length-1) + 1;
  return quotes[rand];
}

/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

// Prints the quote with the values in quote's array
function printQuote() {
  var quote = getRandomQuote();
  var htmlString = ''; 
  htmlString = `<p class='quote'> ${quote.quote} </p> <p class='source'> ${quote.source}` ;
    if (quote.citation !== undefined) {
      htmlString += `<span class='citation'> ${quote.citation} </span>`;
    } else {
      htmlString += `<span> </span> `
    }
    if (quote.year !== undefined) {
      htmlString += `<span class='year'> ${quote.year} </span>`;
    } 
    else {
      htmlString += `<span> </span>`;
    }
    htmlString += `</p>`
  
    document.getElementById("quote-box").innerHTML = htmlString;
    // Code taken from: https://stackoverflow.com/questions/29356866/change-color-of-the-text-on-click-to-random-color-button
    // Quote gets a background color that is randomly generated 
    document.querySelector(".quote").style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

}

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
setInterval(function () {
  printQuote();
  // document.getElementsByClassName('quote').style.color =  '#' + Math.floor(Math.random() * 16777215).toString(16);
}, 5000);

// Remember to delete the comments that came with this file, and replace them with your own code comments.