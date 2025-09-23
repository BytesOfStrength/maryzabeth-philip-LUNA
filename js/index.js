// get body element
const body = document.body;

// create footer variable and append to body
let footer = document.createElement("footer");
body.appendChild(footer);

// get current date and year
const today = new Date();
const thisYear = today.getFullYear();

footer = document.querySelector("footer");

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
