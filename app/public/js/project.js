//parse the url for the project name
var parts = (window.location.href).split('=');
var projectName = parts[parts.length - 1];

console.log(projectName);



//loop through the projects.json, if name of project in the object matches the url param, render that project
function getData() {
    var currentURL = window.location.origin;

    $.ajax({
            url: currentURL + "/api/projects",
            method: "GET"
        })
        .then(function (data) {
            console.log(data)

            for (var i = 0; i < data.length; i++) {
                if (data[i].name === projectName) {
                    console.log(data[i]);
                    displayProject(data[i]);
                }
            }

        })
}
getData();


//function to display all the neccessary information
function displayProject(project) {
    var oneProjectWrap = $("<div>");
    oneProjectWrap.addClass("one-project-wrap");

    var titleButtonsWrap = $("<div>");
    titleButtonsWrap.addClass("title-buttons-wrap");

   var h2 = $("<h2>");
    h2.addClass("project-title");
    h2.text(project.name);
    var p = $("<p>");
    p.addClass("team-size");
    p.text("team size: " + project.teamSize)

    var nameTeamWrap = $("<div>");
    nameTeamWrap.addClass("name-team-wrap");
    nameTeamWrap.append(h2);
    nameTeamWrap.append(p);

    var buttonsWrap = $("<div>");
    buttonsWrap.addClass("btns-wrap");
    var buttonVisit = $('<a href="'+ project.visitUrl +'" target="_blank"><button class="project-btn"> visit </button></a>');
    var buttonCode = $('<a href="' +project.codeUrl   +'" target="_blank"><button class="project-btn"> code  </button></a>');

    

    titleButtonsWrap.append(nameTeamWrap);

    buttonsWrap.append(buttonVisit);
    buttonsWrap.append(buttonCode);
    titleButtonsWrap.append(buttonsWrap);
    oneProjectWrap.append(titleButtonsWrap);
    // buttonsWrap.append(buttonVisit);
    // oneProjectWrap.append(buttonsWrap);
    




    // =====PROBLEM SOLUTION SECTION =====
    var problemSolutionWrap = $("<div>");
    problemSolutionWrap.addClass("problem-solution-wrap white-background");


    var problemWrap = $("<div>")
    problemWrap.addClass("problem-wrap");
    problemWrap.append('<p class="title-small orange"> problem </p>');
    problemWrap.append('<p class="text">' + project.problem + '</p>');


    var solutionWrap = $("<div>")
    solutionWrap.addClass("solution-wrap");
    solutionWrap.append('<p class="title-small"> solution </p>');
    solutionWrap.append('<p class="text">' + project.solution + '</p>');

    problemSolutionWrap.append(problemWrap);
    problemSolutionWrap.append(solutionWrap);

    //=======CHALLENGES SECTION===========
    var challengesWrap = $("<div>")
    challengesWrap.addClass("challenges-wrap");
    challengesWrap.append('<p class="title-small"> challenges </p>')
    challengesWrap.append('<p class="text">' + project.challenges + '</p>')

    //=========FUNCTIONALITY CHALLENGES SECTION ==========
    var functionalityWrap = $("<div>")
    functionalityWrap.addClass("functionality-wrap white-background");
    functionalityWrap.append('<p class="title-small tech-title"> functionality/technologies </p>')

    var functionalityTechWrap = $("<div>");
    functionalityTechWrap.addClass("functionality-tech-wrap");

    var functionalityTextWrap = $("<div>")
    functionalityTextWrap.addClass("functionality-text-wrap");
    functionalityTextWrap.append('<p class="func-text text">' + project.functionality + '</p>')

    var stackList = $("<ul>")
    stackList.addClass("tech-wrap");
    for (var b = 0; b < project.stackList.length; b++) {
        stackList.append('<li class="stack-item">' + project.stackList[b] + '</li>');
    }
    functionalityTechWrap.append(functionalityTextWrap);
    functionalityTechWrap.append(stackList);

    functionalityWrap.append(functionalityTechWrap);
    
    // ===== DESIGN CHOICES =====
    var designWrap = $("<div>")
    designWrap.addClass("design-wrap");
    designWrap.append('<p class="title-small"> design choices </p>')
    designWrap.append('<p class="text">' + project.design + '</p>')
   

    // var imageContainer = $("<div>");
    // imageContainer.addClass("image-container");

    var projectImg = $("<img>");
    projectImg.addClass("project-image")

    projectImg.attr("src", project.sketch);
    // imageContainer.append(projectImg);
    designWrap.append(projectImg);

    var paletteImg = $("<img>");
    paletteImg.addClass("project-image")

    paletteImg.attr("src", project.palette);
    // imageContainer.append(projectImg);
    designWrap.append(paletteImg);



      // ===== SCREENSHOTS =====

    //   var screenshotsWrap = $("<div>")
    //   screenshotsWrap.addClass("design-wrap");
    //   screenshotsWrap.append('<p class="title-small"> design choices </p>')
    //   screenshotsWrap.append('<p class="text">' + project.design + '</p>')
     
  
    //   // var imageContainer = $("<div>");
    //   // imageContainer.addClass("image-container");
  
    //   var projectImg = $("<img>");
    //   projectImg.addClass("project-image")
    //   console.log(project.sketch);
    //   projectImg.attr("src", project.screenshots);
    //   // imageContainer.append(projectImg);
    //   screenshotsWrap.append(projectImg);
  


    oneProjectWrap.append(problemSolutionWrap);
    oneProjectWrap.append(challengesWrap);
    oneProjectWrap.append(functionalityWrap);
    oneProjectWrap.append(designWrap);
    $(".project-container").append(oneProjectWrap);

}