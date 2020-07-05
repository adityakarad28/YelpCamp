var express     =   require("express");
var router      =   express.Router();
var passport    =   require("passport");
var User        =   require("../models/user");
// Index
router.get("/", function(req, res){
    res.render("campgrounds/landing");
});
// Sign up
router.get("/register",function(req, res) {
    res.render("register") ;
})
//SIgn Up Post Route
router.post("/register",function(req, res) {
    var newUser= new User({username: req.body.username});
    User.register(newUser,req.body.password,function(err, user){
        if(err)
        {
            console.log(err);
            return res.render('register');
        }
        passport.authenticate("local")(req, res, function(){
           res.redirect("/campgrounds");
        });
    });
});
// Login
router.get("/login",function(req, res) {
    res.render("login");
});
// Login Post Route
router.post("/login", passport.authenticate("local", {
    successRedirect: "/campgrounds",
    failureRedirect: "/login"
}) ,function(req, res){
});
// Logout
router.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
});
//Middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}
module.exports=router