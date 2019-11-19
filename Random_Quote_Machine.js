/*An object referring to a quote with author*/
function RandomQuote(quote,author) {
  this.quote=quote;
  this.author=author;
}

var tweetQuote=function() {
  $('.twitter-share-button').attr('href',"https://www.twitter.com/intent/tweet?text=" + encodeURIComponent($("#quote-card").text()));
};

/*array of Random Quote objects*/
var randomQuotes = [
  new RandomQuote("You have enemies? Good. That means you've stood up for something, sometime in your life.", "Winston Churchill"),
   new RandomQuote("Efforts and Courage are not enough without purpose and direction.","John F. Kennedy"),
  new RandomQuote("Freedom is not worth having if it does not include the freedom to make mistakes.","Mahatma Gandhi"),
   new RandomQuote("Success is the sum of small efforts, repeated day in and day out.", "unknown"),
  new RandomQuote("Possibilities do not add up. They multiply.","Paul Romer"),
  new RandomQuote("Success consists of going from failure to failure without loss of enthusiasm", "Wilton Churchill"),
  new RandomQuote("Be nice to yourself. It is hard to be happy when someone is mean to you all the time","Christine Arylo"),
  new RandomQuote("A man cannot be comfortable without his own approval.","Mark Twain"),
  new RandomQuote("Always do right. This will gratify some people and astonish the rest.", "Mark Twain"),
  new RandomQuote("It is the mark of an educated mind to be able to entertain a thought without accepting it.","Aristotle"),
  new RandomQuote("Poverty is the parent of revolution and crime.","Aristotle"),
  new RandomQuote("A flatterer is a friend who is your inferior, or pretends to be so.","Aristotle"),
  new RandomQuote("A friend is a second self.","Aristotle"),
  new RandomQuote("Be careful about reading health books. You may die of a misprint.","Mark Twain"),
  new RandomQuote("All paid jobs absorb and degrade the mind.","Aristotle"),
  new RandomQuote("Men live in a fantasy world. I know this because I am one, and I actually receive my mail there.","Scott Adams"),
  new RandomQuote("Before God we are all equally wise - and equally foolish.","Albert Einstein"),
  new RandomQuote("Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep.","Scott Adams"),
  new RandomQuote("Courage is resistance to fear, mastery of fear - not absence of fear.","Mark Twain"),
  new RandomQuote("Better be wise by the misfortunes of others than by your own.","Aesop"),
  new RandomQuote("We hang the petty thieves and appoint the great ones to public office.","Aesop"),
  new RandomQuote("I never teach my pupils. I only attempt to provide the conditions in which they can learn.","Albert Einstein"),
  new RandomQuote("Honesty is the first chapter of the book of wisdom.","Thomas Jefferson"),
  new RandomQuote("People often grudge others what they cannot enjoy themselves.","Aesop"),
  new RandomQuote("I never think of the future - it comes soon enough.","Albert Einstein"),
  new RandomQuote("It is easy to be brave from a safe distance.","Aesop"),
  new RandomQuote("Men are not prisoners of fate, but only prisoners of their own minds.","Franklin D. Roosevelt"),
  new RandomQuote("Great minds discuss ideas; Average minds discuss events; Small minds discuss people.","Eleanor Roosevelt"),
  new RandomQuote("The shoe that fits one person pinches another; there is no recipe for living that suits all cases.","Carl Jung"),
  new RandomQuote("Do not bite at the bait of pleasure till you know there is no hook beneath it.","Thomas Jefferson"),
  new RandomQuote("No man is good enough to govern another man without that other's consent.","Abraham Lincoln"),
  new RandomQuote("No man has a good enough memory to make a successful liar.","Abraham Lincoln")
];

var randomQuotation = function(){
  var currentQuote = randomQuotes[Math.floor(Math.random()*31 + 1)];
  return '"' + currentQuote.quote + '"' + "<br>" + "<br>" + "-" + currentQuote.author;
};

var anotherQuote = function(){
  $("#quote-card").html(randomQuotation());
  $("#quote-card").slideDown("slow");
}
$(document).ready(function() {
$("button").click(function(){
    $("#quote-card").slideUp("slow");
    setTimeout(anotherQuote,1500);
    
  });
});