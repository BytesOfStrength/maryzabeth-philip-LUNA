// get body element
const body = document.body;

// create footer variable and append to body
// for lesson 12 since footer is now assumed to be part of the index.html document physically I am commenting out line 6 and line 7
// let footer = document.createElement("footer");
// body.appendChild(footer);

// get current date and year
const today = new Date();
const thisYear = today.getFullYear();
// update so variable in DOM is matching getting element from raw HTML
let footer = document.querySelector("footer");

// create new p element for copyright
const copyright = document.createElement("p");

// Set innerHTML with copyright symbol, name,date
copyright.innerHTML = `\u00A9 Maryzabeth Philip ${thisYear}`;

// append new footer with copyright
footer.appendChild(copyright);
footer.style.textAlign = "center";

//====Skills===create skills with array
const skills = ["Javascript", "HTML", "CSS", "Github"];
const skillsSection = document.getElementById("Skills");
const skillsList = skillsSection.querySelector("ul");

// create loop with array for skills and create list with each element
for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}
/* LESSON 12 Stretch goal added toggle to hide message section if no messages entered : */

function toggleMessageSection() {
  const messageSection = document.getElementById("messages");
  const messageList = messageSection.querySelector("ul");
  if (messageList.children.length === 0) {
    messageSection.style.display = "none";
  } else {
    messageSection.style.display = "block";
  }
}
toggleMessageSection();

const messageForm = document.querySelector("form[name=leave_message]");

/*LESSON 12Add event listener to print out on console usersName, email, message when user clicks “submit” button*/

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // event.target is referring to name part of input associated with identification of input
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  // console.log(variable name ):
  console.log("User Name: ", usersName);
  console.log("User Email: ", usersEmail);
  console.log("User Message:", usersMessage);

  const messageSection = document.getElementById("messages");
  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement("li");

  // lesson 12. create anchor tag element for the link to attach to and set its text using textContent attribute and usersName variable created in js file

  /*This is not safe and secure method newMessage.innerHTML = `<a href = "mailto: ${usersEmail}"> ${usersName}</a>
   <span>${usersMessage}</span>`;  but I am going to include it for this assignment . it is better to use create element and textContent 

//   const userLink = document.createElement('a');
//   userLink.textContent = usersName;

//   // set secure link attribute: element.attribute= value (value is what user put into the form);
//   userLink.href= `mailto:${usersEmail}`;

// // create the span for the message text
//   const messageTextSpan = document.createElement("span");
//   messageTextSpan.textContent = usersMessage;
//   // other alternative is that you could also eliminate the messageTextSpan and use append() to newMessage  
//   // newMessage.append(userLink, usersMessage)

  newMessage.appendChild(userLink);
  newMessage.appendChild(messageTextSpan); */

  newMessage.innerHTML = `<a href= "mailto:${usersEmail}">${usersName}</a>:<span>${usersMessage}</span>`;

  // create an element remove button, set innerText to remove.
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";
  removeButton.className = "remove-button";

  // Add an event listener to the removeButton element that handles the "click" event
  removeButton.addEventListener("click", (event) => {
    const entry = removeButton.parentNode;
    entry.remove();

    // toggleMessage function for removed messages
    toggleMessageSection();
  });
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  // toggleMessageSection function for new messages
  toggleMessageSection();

  // clear form using reset method
  messageForm.reset();
});
