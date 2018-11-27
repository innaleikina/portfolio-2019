var path = require("path");
var bodyParser = require("body-parser");
var express = require("express");


module.exports = function (app) {

    app.use(bodyParser.json());
    app.use(express.static('app/public'))
   
   
    app.get("/about", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/about.html"))
    })

       
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })

    app.get("/project/id=:id", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/project.html"))
    })

}