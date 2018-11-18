var projectsData = require("../projects/projects");



module.exports = function (app) {


    app.get("/api/projects", function (req, res) {
        res.json(projectsData);
    })


    //post route 
    app.post("/api/projects", function (req, res) {
        projectsData.push(req.body);
        // res.json(false);
    })
}