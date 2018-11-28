function displayAbout() {

    //=======ABOUT AND IMAGE OF ME==========
    var aboutWrap = $("<div>");
    aboutWrap.addClass("white-background about-wrap ");

    var textWrap = $("<div>");
    textWrap.addClass("text-wrap");
    var about = $('<p class="title-small about-title"> about </p>');


    var text = $('<p class="text"> I am a very passionate front end designer and developer. I  love working on new challenges, be they development or design related. It’s an amazing feeling to find an elegant and working solution. I work great in teams and am always striving to learn something new.  </p>');
    text.addClass("about-text");
    textWrap.append(about);
    textWrap.append(text);

    var img = $("<img>");
    img.addClass("about-image");
    img.attr("src", "../images/1.jpg");

    aboutWrap.append(textWrap);
    aboutWrap.append(img);


    //=======SKILLS AND EDUCATION==========
    var skillsEduWrap = $("<div>");
    skillsEduWrap.addClass("skills-edu-wrap");

    var skillsEduTitle = $('<p class="title-small skills-title"> skills/education </p>');
    skillsEduWrap.append(skillsEduTitle);

    var skillsList = $("<ul>");
    skillsList.addClass("skills-list");

    var skillsList2 = $("<ul>");
    skillsList2.addClass("skills-list2");

    var skillsArr = ["- HTML", "- CSS", "- JavaScript", "- jQuery", "- MySQL", "- MongoDB", "- Express", "- React", "- Node"]
    var skillsArr2 = ["- Adobe Xd", "- Framer", "- Wireframing", "- User Experience", "- Graphic Design"];


    function displayList(list, arr) {
        for (var i = 0; i < arr.length; i++) {
            list.append('<li class="text">' + arr[i] + '</li>');

            skillsEduWrap.append(list);
        }
    }

    displayList(skillsList, skillsArr);
    displayList(skillsList2, skillsArr2);




    $("#about").append(aboutWrap);
    $("#about").append(skillsEduWrap);
}

displayAbout();