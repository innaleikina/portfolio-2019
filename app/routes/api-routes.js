var projectsData = require("../projects/projects");



module.exports = function (app) {


    app.get("/api/projects", function (req, res) {
        res.json(projectsData);
    })

    
}

