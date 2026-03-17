//Get the body element
const body = document.body;
//body = document.getElementsByTagName("body");

//---------FOOTER------------------------
//Create a footer element
const footer = document.createElement("footer"); // <footer></footer> //<-created

//Create a new Date object
const today = new Date();
//Get the current year
const thisYear = today.getFullYear();

//create a <p> for copyright
const copyright = document.createElement("p"); // <p></p>

//Set the inner html with the copyright symbol, your name, and year
copyright.innerHTML = `\u00A9 Shonta Pierce ${thisYear}` //set it to copyright and not inner

//Append <p> fo the footer
footer.appendChild(copyright);

//Append footer to body (adding it to the html to connect)
body.appendChild(footer);




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

// ---------------------- PROJECT SECTION --------------------

fetch("https://api.github.com/users/shontechdev/repos")
    .then(function(response) {
        return response.json();
    })
    .then(function(repositories) {
        console.log("Repositories:", repositories);

        const projectSection = document.getElementById("Projects");

//------------------------------Open API Project link -----------------------------------
        const featuredList = document.createElement("ul");
        const featuredItem = document.createElement("li");

        const featuredLink = document.createElement("a");
        featuredLink.href = "https://github.com/ShonTechDev/shonta-pierce-mars-openAPI-project";
        featuredLink.target = "_blank";
        featuredLink.rel = "noopener noreferrer"; //researched tab security
        featuredLink.innerText = "Open API Project (ft. The Art Institute of Chicago)";

        featuredItem.appendChild(featuredLink);
        featuredList.appendChild(featuredItem);

        //Appended the list under Projects Heading
        projectSection.insertBefore(featuredList, projectSection.querySelector("ul"));
// ---------------------------------------------------------------------------------------

        const projectList = projectSection.querySelector("ul");

        for (let i = 0; i < repositories.length; i++) {
            const project = document.createElement("li");

            project.innerText = repositories[i].name;

            projectList.appendChild(project);
        }
    })
    .catch(function(error) {
        console.error("Error fetching repositories:", error);

        const projectSection = document.getElementById("Projects");
        projectSection.innerHTML += "<p>Unable to load projects at this time.</p>";
    });



// ------ MESSAGE SECTION --------
const messageForm = document.querySelector('form[name="leave_message"]');

messageForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log(usersName, usersEmail, usersMessage);

    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");

    const newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a><span>${usersMessage}</span>`;

    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";

    removeButton.addEventListener("click", function() {
        //learning note: using "this" keyword over remove button variable because the remove button variable is outside the function. 
        // It is also better for testing & reduces side effects

        const entry = this.parentNode;
        entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    event.target.reset();
});