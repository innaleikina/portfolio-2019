function displayAbout(){

    //=======ABOUT AND IMAGE OF ME==========
    var aboutWrap = $("<div>");
    aboutWrap.addClass("white-background about-wrap ");

    var textWrap = $("<div>");
    textWrap.addClass("text-wrap");
    var about = $('<p class="title-small about-title"> about </p>');
    

    var text = $('<p class="text"> I am a very passionate front end designer and developer. I  love working on new challenges, be they development or design related. It’s an amazing feeling to find an leegant and working solution. I work great in teams and am always striving to learn something new.  </p>');
    text.addClass("about-text");
    textWrap.append(about);
    textWrap.append(text);

    var img = $("<img>");
    img.addClass("about-image");
    img.attr("src", "../images/1.jpg");

    aboutWrap.append(textWrap);
    aboutWrap.append(img);


//=======SKILLS AND EDUCATION==========


    $("#about").append(aboutWrap);
}

displayAbout();