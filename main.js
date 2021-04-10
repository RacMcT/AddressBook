// Use the API: https://randomuser.me/api/ to fetch a user now
// Fetch a new user multiple times and store them in an array
// Then list out all the users in your address book array by name and picture
// Figure out how to fetch multiple users in one fetch request
// Fetch multiple users on window load
// Add a button to each user that when clicked displays the rest of their information like DOB, address and so forth
// Once you have the functionality working, feel free to style and structure your address book with CSS and HTML
// YOU KNOW HOW TO DO ALL OF THIS BY NOW. TRUST YOURSELF!!


// Plan of Action:

// fetch json data from api to populate user posts Array
// console.log array of Users/Posts - check that it is returning correctly
// then push into DOM as an unordered list of users and thier contact information
// fetch multiple users onload
// push these multiple users/posts to the DOM
// add button that onClick populates rest of thier information
// style so it looks nice? - once fully functional?!


let arrayOfPeople

// This function waits for the web page to be loaded, when it does it will run the getPosts() function
window.onload = function () {
  getPeople()
}

// This function makes a fetch request to the URL inside its parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. 
//The res.json will be saved into the variable arrayOfPeople
const getPeople = () => {
  fetch(
    "https://randomuser.me/api/?results=10&inc=name,location,phone,email,dob,picture"
  )
    .then((res) => res.json())
    .then((people) => (arrayOfPeople = people.results))
}

let moreInfo = (id) => {
  let contact = document.getElementById(id)
  if (contact.style.display === "block") {
    contact.style.display = "none"
  } else {
    contact.style.display = "block"
  }
}

// this function works onClick for button to display "posts" from API of random people on screen

let displayPeople = () => {
  let allPosts = document.getElementById("all-posts")
  arrayOfPeople.map((post, i) => {
    const li = document.createElement("li")
    const { name, phone, email, dob, location} = post
    const btn = document.createElement("button") // creates button
    const btnText = document.createTextNode("More Info") // creates button text
    const paragraph = document.createElement("p") // myPara creates an HTML paragraph (<p>)
    paragraph.setAttribute("id", `more-info-${i}`)
    paragraph.style.display = "none"
    li.setAttribute("id", "list")
    btn.setAttribute("id", "btn")
    btn.addEventListener("click", () => {
      moreInfo(paragraph.id)
    })
    const contactInfo = document.createTextNode(
      `Name: ${post.name.first} ${post.name.last}`
    )
    const moreContactInfo = document.createTextNode(
      `Phone: ${phone},
      Email: ${email}, 
      Address: ${location.street.number} ${location.street.name} ${location.city} ${location.state} ${location.postcode} ${location.country}, 
      Birthday: ${dob.date}`
    )
    li.appendChild(contactInfo)
    btn.appendChild(btnText)
    allPosts.append(li)
    allPosts.append(btn)
    paragraph.appendChild(moreContactInfo)
    li.appendChild(paragraph)
  })
}

// this function works onClick for console to display "posts" from API of random people
const consolePeople = () => {
  console.log(arrayOfPeople)
}