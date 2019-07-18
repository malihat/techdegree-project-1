/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


// Array of all the quotes
const quotes = [ {quote: "Man is the only animal that laughs and has a state legislature.", source: "Samuel Butler", tag:"Political-humor"}, 
                {quote: "No one can make you feel inferior without your consent.", source: "Eleanor Roosevelt", citation: " This is My Story", tag:"Inspirational"}, 
                {quote: "A business that makes nothing but money is a poor business.", source: "Henry Ford", tag:"Business" }, 
                {quote: "In the bible it says you have to forgive seventy times seven. I want you all to know, I'm keeping a chart.", source: "Hillary Rodham Clinton", tag: "Religion"}, 
                {quote: "Please think about your legacy, because you're writing it every day.", source:"Gary Vaynerchuck", year: 2018, tag:"Inspirational"} ];

// Randomly changes background color of the quote 
// Code taken from: https://stackoverflow.com/questions/29356866/change-color-of-the-text-on-click-to-random-color-button
document.querySelector(".quote").style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

// Generates random quotes  
function getRandomQuote() {
  var rand = Math.floor(Math.random() * quotes.length-1) + 1;
  return quotes[rand];
}

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
    if (quote.tag !== undefined) {
      htmlString += `<span class="tag">, ${quote.tag} </span>`
    }
    else {
      `<span> </span>`
    }
    htmlString += `</p>`
  
    document.getElementById("quote-box").innerHTML = htmlString;

    // Quote gets a background color that is randomly generated. 
    document.querySelector(".quote").style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

}

// Calls the printQuote function whene the 'Show another quote' button is clicked.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Changes quote after every 20 seconds 
setInterval(function () {
  printQuote();
}, 20000);
