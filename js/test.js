//test
console.log("test.js is running");

$.ajax({
	url: "https://www.reddit.com/search.json",
	method: "GET",
	data: {
		q: "kittens + Puppies"

	} 
}).done(function(response){
	console.log("success", response);
	response.data.children.forEach(function(post){
		console.log(post.data.title);
	})
	// You can always print it in the console:
	console.log("Today is an interesting day")

}).fail(function(err){
	console.log("error", err);
});



