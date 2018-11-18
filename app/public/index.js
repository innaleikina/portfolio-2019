console.log("hello world!")

var allProjects = new Array();
    
function loadQuestions() {
    $.getJSON('./projects/projects.json', function (data) {
        allProjects = data;
    }).error(function(){
            console.log('error: json not loaded');
        }).then(console.log(allProjects[0].name));
    }

loadQuestions();