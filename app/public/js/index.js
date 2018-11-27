
    
    // ==============GET PROJECT DATA===========
    function getData() {
        var currentURL = window.location.origin;

        $.ajax({
                url: currentURL + "/api/projects",
                method: "GET"
            })
            .then(function (data) {
                console.log(data)
                displayProjects(data);
            })
    }
    getData();


    // ==============DISPLAY PROJECTS ===========

    function displayProjects(data) {
        for (var i = 0; i < data.length; i++) {
            var projectWrap = $("<div>");
            projectWrap.addClass("grid-element");
            projectWrap.attr('data-name', data[i].name);
           
            var imageContainer = $("<div>");
            imageContainer.addClass("image-container");
       
            var img = $("<img>");
            img.addClass("image")
            img.attr("src", data[i].image);
            imageContainer.append(img);
            $(imageContainer).hide().appendTo(projectWrap).fadeIn(1000);

            //name
            var h3 = $("<h3>");
            h3.addClass("name");
            h3.text(data[i].name);
            projectWrap.append(h3);

            //stack
            var div = $('<div class="stackList">')
            var stackLength = data[i].stackList.length;
            for (var b = 0; b < stackLength; b++) {
                div.append('<p class="stackList-element">' + data[i].stackList[b] + "</p>")
            }
            projectWrap.append(div);


            //appending all
            
            $(projectWrap).appendTo("#grid");


        }

    }


    function redirectToProject(event) {
        event.preventDefault();
        console.log($(this).data("name"));
        window.location.href = "/project/id=" + $(this).data("name");
    }

    $(document).on("click", ".grid-element", redirectToProject);
