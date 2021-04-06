// Use the API: https://randomuser.me/api/ to fetch a user now
// Fetch a new user multiple times and store them in an array
// Then list out all the users in your address book array by name and picture
// Figure out how to fetch multiple users in one fetch request
// Fetch multiple users on window load
// Add a button to each user that when clicked displays the rest of their information like DOB, address and so forth
// Once you have the functionality working, feel free to style and structure your address book with CSS and HTML
// YOU KNOW HOW TO DO ALL OF THIS BY NOW. TRUST YOURSELF!!


// Plan of Action:

// fetch json data from api to populate user Array
// console.log array of Users - check that it is returning correctly
// then push into DOM as an unordered list of users and thier contact information
// fetch multiple users onload
// push these multiple users to the DOM
// add button that onClick populates rest of thier information
// style so it looks nice? - once fully functional?!


const fetch = require('node-fetch');

let getUser = () =>{
fetch('https://randomuser.me/api/') 
  .then((response) => response.json())
  .then((json) => userArr = json)
}

const addLog = ()=> {
  console.log(userArr)
}

 let userArr = [];
  userArr.push(user);
  

    // getUser()
    // addLog()