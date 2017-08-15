/*
 * Simple Gallery Application
 */

// import required modules
var express = require('express');
var http = require('http');
var bodyparser = require('body-parser');

var app = express();
var server = http.createServer(app);

app.use(bodyparser.urlencoded({extended:true}));
app.set("view engine", "ejs");

// pre-selected list of images in the gallery
// this will eventually read from a db
var celestial_bodies = [
    { name: "Sun", source: "https://solarsystem.nasa.gov/images/galleries/PIA03149.jpg" },
    { name: "Mercury", source: "https://nssdc.gsfc.nasa.gov/planetary/image/mercury.jpg" },
    { name: "Venus", source: "https://svs.gsfc.nasa.gov/vis/a010000/a010900/a010904/STILL2.jpg" },
    { name: "Earth", source: "https://www.nasa.gov/centers/goddard/images/content/638831main_globe_east_2048.jpg" },
    { name: "Mars", source: "https://www.nasa.gov/sites/default/files/mars20130708-full.jpg" },
    { name: "Jupiter", source: "https://www.jpl.nasa.gov/news/press_kits/juno/images/jupiter/jupiter.jpg" },
    { name: "Saturn", source: "https://www.nasa.gov/sites/default/files/thumbnails/image/pia21046_main.jpg" },
    { name: "Uranus", source: "https://www.jpl.nasa.gov/images/voyager/20160121/PIA18182-16.jpg" },
    { name: "Neptune", source: "https://www.nasa.gov/sites/default/files/thumbnails/imageneptune_full.jpg" },
];

// routes
app.get("/", function(req, res) {
    res.render("home");
});

app.get("/gallery", function(req, res) {
    res.render("gallery", {spaceBodies:celestial_bodies});
});

app.get("/gallery/new", function(req, res) {
    res.render("new.ejs");
});

app.post("/gallery", function(req, res) {
    var new_object = {name: req.body.name, source: req.body.image};
    celestial_bodies.push(new_object);
    res.redirect("/gallery");
});

// default server listening port
server.listen(3000);
console.log("Server process started using port " + server.address().port);

