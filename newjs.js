

window.onload = console.log("Loading js")



//getting button element from dom and adding event listener to it
document.getElementById("button").addEventListener("click", function(){
  console.log("the button was clicked");


// i want to make a fetch request to the cocktail api

// get data from input element

// get input value from html

let input = document.getElementById("input");
let searchTerm = input.value;
console.log("user input = ", searchTerm);

fetchSearch(searchTerm);

})


function fetchSearch (searchTerm) {
  fetch(`https://cors-anywhere.herokuapp.com/www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchTerm}`)
  .then(function(response){
    return response.json()
  }) .then(function(json){
    console.log("search results:", json);
  })
}

// use map() to map out all the drink items to then append into the html
// use innerHTML or appendchild

// show at least 2 fetch calls
// good css to look nice

// second fetch call to show ingredients? or fetch call to change the robot as the drinks change?















// api = application programming interface
// web api- over http or https-- talk to each other over internet
// usually 2 parts-> resource asking for (path) and verb you're using
// verb is usually "GET", but can also be "POST", "PUT", "DELETE"
// Resource asking for (aka rest endpoint or path or url)- this is where is the request going
// 
// some requests can also send along data with request
//
// what kind of request? get, post, put delete,

// where is this request going? (e.g., google.com)
// is there additional information going along with the request?
// if sending additonal information- that can go into the body of the request or the path
//
// the other side then can respond back: json, html, files, etc
// if getting data back in the response (for web) it is ususally json
//
// 
//
//


