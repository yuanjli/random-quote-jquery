
// var quote1 = [  "Nobody ever figures out what life is all about, and it does not matter. Explore the world. Nearly everything is really interesting if you go into it deeply enough. Richard Feynman" ]

// var quote2 = 
// [ "Physics is like sex: sure, it may give some practical results, but that's not why we do it. Richard Feynman" ]

// var quote3 = [ "You have no responsibility to live up to what other people think you ought to accomplish. I have no responsibility to be like they expect me to be. It's their mistake, not my failing.― Richard Feynman, Surely You are Joking, Mr. Feynman: Adventures of a Curious Character "]


// var quote4 = [  "I learned very early the difference between knowing the name of something and knowing something. - Richard Feynman"]

// var quote5 = [ " I... a universe of atoms, an atom in the universe. ― Richard Feynman " ]

// var quote6 = [ " The first principle is that you must not fool yourself and you are the easiest person to fool. ― Richard Feynman"]

// var arrayQuotes = [quote1, quote2, quote3, quote4, quote5, quote6]



// $('button').on('click', function(){
// 	$('p').text(arrayQuotes[Math.floor(Math.random() * 6)]);
// })


//https://talaikis.com/random_quotes_api/



console.log("quote.js is working");
/*
// the ajax method of getthing the quote: 

$("#getquote").click(function(){
	console.log("button gets clicked");

	$.ajax({
	url: "https://talaikis.com/api/quotes/random/",
	method:  "GET"


	}).done(function(response){
		console.log("success", response);
		$("#title").text(response.author + "on" + response.cat);
		$("#result").text("\"" + response.quote + "\"");
		$


	}).fail(function(err){
		console.log("Error", err);
	});
});

*/

// using the get method instead of the Ajax: 
$(".getquote").click(function(){
	console.log("button gets clicked");
	$.get("https://talaikis.com/api/quotes/random/")
	.done(function(response){
		console.log("success", response);
		$("#title").text(response.author + "on" + response.cat);
		$("#result").text("\"" + response.quote + "\"");
		$("#result").css("font-style", "italic");
	})
	.fail(function(err){		// the dot can be on the next line, your preference. 
		console.log("Error", err);
	});
});


























