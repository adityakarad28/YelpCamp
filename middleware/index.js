//All middleware goes here
var     middlewareObj   =   {};
var     Campground      =   require("../models/campground.js");
var     Comment         =   require("../models/comment.js");
middlewareObj.checkCampgroundOwnership=function(){
    
}
middlewareObj.checkCommentOwnership=function(req,res,next){

    if(req.isAuthenticated())
    {
        
        Campground.findById(req.params.id,function(err,foundCampground){
        if(err)
        {
            res.redirect("back");
        }
        else
        {
            //if(foundCampground.author.id==req.user.id)// one is object other is string
            
            
            if(foundCampground.author.id.equals(req.user.id))
            {
                next();
            }
            else
            {
                res.redirect("back");
            }
            
        }
        });
    
    }
    else
    {
        res.redirect("back");
    }
    
    
}

middlewareObj.checkCommentOwnership=function(req,res,next){
    if(req.isAuthenticated())
    {
        // Does he own the post?
        Comment.findById(req.params.comment_id,function(err,foundComment){
        if(err)
        {
            res.redirect("back");
        }
        else
        {
            //if(foundCampground.author.id==req.user.id)// one is object other is string
            
            
            if(foundComment.author.id.equals(req.user.id))
            {
                next();
            }
            else
            {
                res.redirect("back");
            }
            
        }
        });
    
    }
    else
    {
        res.redirect("back");
    }
    
    
}
middlewareObj.isLoggedIn= function(req, res, next)
{
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("success","Please login first!");
    res.redirect("/login");
}


module.exports= middlewareObj;