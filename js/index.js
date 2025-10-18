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

/*Add event listener to print out on console usersName, email, message when user clicks “submit” button*/

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

  // create edit button to edit user's message
  const editButton = document.createElement("button");
  editButton.innerText = "edit";
  editButton.className = "edit-btn";
  editButton.type = "button";

  // add event listener
  /*add click event listener to edit the message*/
  editButton.addEventListener("click", function () {
    // find the message portion
    const messageSpan = newMessage.querySelector("span");
    // prompt user for new message
    const newText = prompt("Edit your Message: ", messageSpan.innerText);
    // update message
    if (newText !== null) {
      messageSpan.innerText = newText;
    }
  });

  newMessage.appendChild(editButton);

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

//changes added for LESSON -13
// =====ADDED FOR LESSON 13=========
// using fetch to use its default method of GET to get author's github repos

fetch("https://api.github.com/users/BytesOfStrength/repos")
  // GET the response(fetch has built in GET method)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Request Failed");
    }

    //Parse response as JSON don't use JSON.Parse
    return response.json();
  })
  // Get data as in the repositories and add to html doc
  .then((data) => {
    const repositories = data;
    console.log("Github respositories array = ", repositories);
    const projectSection = document.getElementById("Projects");
    const projectList = projectSection.querySelector("ul");
// clear content of project list 
    projectList.innerHTML ="";
// create for loop to iterate over Github repositories Array
    for (let i = 0; i < repositories.length; i++) {
      let repo = repositories[i];
      console.log(repo.name);
      let project = document.createElement("li");
      const repoLink=document.createElement("a");
      repoLink.href = repo.html_url;
      repoLink.target = "_blank";
      repoLink.rel = "noopener noreferrer";
      project.className = "repo-item";
      repoLink.textContent=repo.name;
      project.className = "repo-item";
      // project.innerText = repo.name;\
      // need to include forked debugging assignment 
      // if (!repo.fork) { 
      project.appendChild(repoLink);
      projectList.appendChild(project);
          
    }
  })
  // chain catch() to handle errors
  .catch((error) => {
    console.error("Error", error);
    const projectSection = document.getElementById("Projects");

// display friendly error message to user if fetch fails for server error
    const errorMessage=document.createElement("p");
    errorMessage.innerHTML="Error loading projects. Please refer to console.";
    errorMessage.className="error-message";
    projectSection.appendChild(errorMessage);
    
  });

  // get email span element 
  const emailSpan = document.getElementById("email-contact");

  // check for element 

  if (emailSpan) {
    const confusedText = emailSpan.textContent;
    const realEmail = confusedText.replace(' (at) ', '@')
    .replace(' (dot) ', ".");

    const mailtoLink = document.createElement("a");

    mailtoLink.href = "mailto:" + realEmail;
    mailtoLink.textContent = "Email Me";
    emailSpan.textContent =" ";
    emailSpan.appendChild(mailtoLink);
  }
  

