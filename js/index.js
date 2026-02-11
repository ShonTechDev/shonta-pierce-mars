//Get the body element
const body = document.body;
//body = document.getElementsByTagName("body");

//---------FOOTER------------------------
//Create a footer element
const footer = document.createElement("footer"); // <footer></footer> //<-created

//Append footer to body (adding it to the html to connect)
body.appendChild(footer);

//Create a new Date object
const today = new Date();
//Get the current year
const thisYear = today.getFullYear();

//create a <p> for copyright
const copyright = document.createElement("p"); // <p></p>

//Set the inner html with the copyright symbol, your name, and year
copyright.innerHTML = `©️Shonta Pierce ${thisYear}` //set it to copyright and not inner

//Append <p> fo the footer
footer.appendChild(copyright);

//Center the footer
footer.style.textAlign = "center";
footer.style.fontSize = "0.75rem";


// ------ SKILLS SECTION --------
// An array of my technical skills
const skills = ["JavaScript", "HTML", "CSS", "Git"];

//Select the Skills section by ID
const skillsSection = document.getElementById("Skills");

//Select the <ul> inside the skills section
const skillsList = skillsSection.querySelector("ul");

//Loop through the skills array
for (let i = 0; i < skills.length; i++) {
    //Create a new <li> element
    const skill = document.createElement("li");
    //Set the inner text of the li element
    skill.innerText = skills[i];
    //Append the newly created element to the existing list
    skillsList.appendChild(skill);
}