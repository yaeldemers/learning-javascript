const colors = [ 
    "#093145",
    "#107896",
    "#C2571A",
    "#F26D21",
    "9A26176",
    "#CD594A",
    "#045A00",
    "#479344",
    "#7E0F7A",
    "#970095",
    "#7482A8",
    "#4B6F4F",
    "#7B0000",
];

//quotes found via: https://gist.github.com/awran5/355643af99164a61ae0f95c84206d151
const quotes = [
    ["Be yourself; everyone else is already taken.",
    "Oscar Wilde"],
    ["To live is the rarest thing in the world. Most people exist, that is all.",
     "Oscar Wilde"],
    ["Be the change that you wish to see in the world.",
    "Mahatma Gandhi"],
    ["Live as if you were to die tomorrow. Learn as if you were to live forever.",
    "Mahatma Gandhi"],
    ["No one can make you feel inferior without your consent.",
    "Eleanor Roosevelt"],
    ["Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    "Eleanor Roosevelt"],
    ["Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate; only love can do that.",
    "Martin Luther King"],
    ["Our lives begin to end the day we become silent about things that matter.",
    "Martin Luther King"],
    ["Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
    "Albert Einstein"],
    ["Life isn't about finding yourself. Life is about creating yourself.",
    "George Bernard Shaw"],
]

const mainArea = document.querySelector("#quote")

let currentQuote = "";
let currentAuthor = "";
let randomQuote = "";
let randomQolor = "";

function getQuote() {
    randomQuote = Math.floor(Math.random() * quotes.length);
    randomColor = Math.floor(Math.random() * colors.length);

    currentQuote = quotes[randomQuote][0];
    currentAuthor = "- " + quotes[randomQuote][1];

    const markup=`<blockquote id="quote-text">${currentQuote}</blockquote 
    <p id="author">${currentAuthor}</p>`

    mainArea.innerHTML = markup;

    document.body.style.background=colors[randomColor];
    document.querySelector("h1").style.color=colors[randomColor];
    document.querySelector("#quote_btn").style.background=colors[randomColor];
    //document.querySelector("#quote_text").style.borderLeft.color=colors[randomColor];
    document.querySelector("#quote-text").style.borderLeft= `3px solid ${colors[randomColor]}`;


}

const quotesButton = document.querySelector("#quote_btn");
quotesButton.addEventListener("click", getQuote);
getQuote();