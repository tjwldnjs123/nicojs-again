const quotes =[
  {
    quote: "We generate fears while we sit.",
    author: "walt Disney"
  },
  {
    quote: "No great man ever complains of want of opportunity.",
    author: "zioni Disney"
  },
  {
    quote: "Do not accustom yourself to use big words for little matters.",
    author: "jungho Disney"
  },
  {
    quote: " A day without laughter is a day wasted.",
    author: "lala Disney"
  },
  {
    quote: "Patterning your life around other's opinions is nothing more than slavery.",
    author: "whawha"
  },
  {
    quote: "love what you have.",
    author: "mola"
  },
  {
    quote: "We generate fears while we sit.",
    author: "hue"
  },
  {
    quote: " It ain't over till it's over.",
    author: "happy"
  },
  {
    quote: " Life is not fair, get used to it.",
    author: "10cm"
  },
  {
    quote: "Only I can change my life, No one can do it for me.",
    author: "Disney"
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;