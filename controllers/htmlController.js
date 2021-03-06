// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const express = require('express');
const router = express.Router();
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

router.get("/", function(req, res) {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect("/destinations");
  } 
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

router.get("/login", function(req, res) {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect("/destinations");
  }
  res.sendFile(path.join(__dirname, "../public/login.html"));
});

router.get("/signup", function(req, res) {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect("/destination");
  }
  res.sendFile(path.join(__dirname, "../public/signup.html"));
});

// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
router.get("/members", isAuthenticated, function(req, res) {
  res.sendFile(path.join(__dirname, "../public/members.html"));
});

router.get("/destinations", isAuthenticated, function(req, res){
  res.sendFile(path.join(__dirname, "../public/destination.html"))
});
router.get("/activities", isAuthenticated, function(req, res){
  res.sendFile(path.join(__dirname, "../public/activities.html"))
});


module.exports = router;
