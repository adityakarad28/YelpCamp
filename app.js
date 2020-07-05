var express                 = require("express"),
    app                     = express(),
    bodyParser              = require("body-parser"),
    mongoose                = require("mongoose"),
    Campground              = require("./models/campground.js"),
    seedDB                  = require("./seeds"),
    Comment                 = require("./models/comment.js"),
    passport                = require("passport"),
    LocalStrategy           = require("passport-local"),
    passportLocalMongoose   = require("passport-local-mongoose"),
    User                    = require("./models/user"),
    methodOverride          = require("method-override"),
    flash                   = require("connect-flash");
// Requiring Routes
var commentRoutes           = require("./routes/comments"),
    campgroundRoutes        = require("./routes/campgrounds"),
    indexRoutes             = require("./routes/index");

//seedDB(); seed the database
mongoose.connect("mongodb://localhost/yelp_camp_v8");
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"))
app.use(require("express-session")({
    secret:"Mogya wins the Cutest dog competition",
    resave: false,
    saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(function(req,res,next){
    res.locals.currentUser=req.user;
    next();
});

app.use("/",indexRoutes);
app.use("/campgrounds",campgroundRoutes);
app.use("/campgrounds/:id/comments",commentRoutes);


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The YelpCamp Server Has Started!");
});