                                  // /******************************************
                                  //        Treehouse FSJS Techdegree:
                                  //     project 1 - A Random Quote Generator
                                  // ******************************************/

// *** I am going for "Exceeds Expectations", if my code doesn't meet the requirement I would like to fail and do it again. ***

// Array of all the quotes, tag and source. At least one has citation and year. 
const quotes = [ 
                  {
                    quote: "Man is the only animal that laughs and has a state legislature.", 
                    source: "Samuel Butler", 
                    tag:"Political-humor"
                  }, 
                  {
                    quote: "Differences of habit and language are nothing at all if our aims are identical and our hearts are open.",
                    source: "J.K. Rowling",
                    citation: "Harry Potter and the Goblet of Fire",
                    year: 2000,
                    tag: "Inspirational-love"
                  },
                  {
                    quote: "No one can make you feel inferior without your consent.", 
                    source: "Eleanor Roosevelt", 
                    citation: " This is My Story", 
                    tag:"Inspirational"
                  }, 
                  {
                    quote: "A business that makes nothing but money is a poor business.", 
                    source: "Henry Ford", 
                    tag:"Business" 
                  }, 
                  {
                    quote: "Please think about your legacy, because you're writing it every day.", 
                    source:"Gary Vaynerchuck", 
                    year: 2018, 
                    tag:"Inspirational"
                  } 
                ];

// Randomly changes background color of the quote 
// Code taken from: https://stackoverflow.com/questions/29356866/change-color-of-the-text-on-click-to-random-color-button
document.querySelector("body").style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

// Generates random quotes  
function getRandomQuote() {
  var rand = Math.floor(Math.random() * quotes.length-1) + 1;
  // returns randomly generated quote.
  return quotes[rand];
}

// Prints the quote with the values in quote's array
function printQuote() {
  var quote = getRandomQuote();
  var htmlString = ''; 
  htmlString = `<p class='quote'> ${quote.quote} </p> <p class='source'> ${quote.source}` ;
  // Checks if citation is present in the object
    if (quote.citation !== undefined) {
      htmlString += `<span class='citation'> ${quote.citation} </span>`;
    } else {
      htmlString += `<span> </span> `
    }
    // Checks if year is present in the object
    if (quote.year !== undefined) {
      htmlString += `<span class='year'> ${quote.year} </span>`;
    } 
    else {
      htmlString += `<span> </span>`;
    }
    // Checks if tag is present in the object
    if (quote.tag !== undefined) {
      htmlString += `<span class="tag">, ${quote.tag} </span>`
    }
    else {
      `<span> </span>`
    }
    htmlString += `</p>`
  
    // Adds the entire string so that it could be displayed 
    document.getElementById("quote-box").innerHTML = htmlString;

    // Quote gets a background color that is randomly generated. 
    document.querySelector("body").style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  
}

// Calls the printQuote function when the 'Show another quote' button is clicked.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Prints quote when the page is loaded first time
printQuote();

// Prints a different quote after every 15 seconds 
setInterval(printQuote, 15000);
