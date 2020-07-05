var express     =  require("express");
var router      =  express.Router({mergeParams: true});
var Campground  =  require("../models/campground");
var Comment     =  require("../models/comment");
var middleware  =   require("../middleware/index.js");
//Comment New
router.get("/new",middleware.isLoggedIn,function(req,res){
    
    Campground.findById(req.params.id, function(err,campground)
    {
        if(err)
        {
            console.log("err");
        }
        else
        {
            res.render("comments/new", {campground:campground});
        }
    });
    
});
//Comments Create
router.post("/new",middleware.isLoggedIn,function(req,res){
   
   Campground.findById(req.params.id,function(err,campground){
       if(err)
       {
           console.log("error");
           res.redirect("/campgrounds");
       }
       else
       {
            Comment.create(req.body.comment,function(err,newComment){
                if(err)
                {
                    console.log("err");
                }
                else
                {
                    //Add username and Id to comment
                    newComment.author.id=req.user._id;
                    newComment.author.username=req.user.username;
                    // Then save the comment
                    newComment.save();
                    campground.comments.push(newComment);
                    campground.save();
                    res.redirect("/campgrounds/"+campground._id);
                }
            });
       }
   })
});
// Edit Route
router.get("/:comment_id/edit",function(req,res){
    Comment.findById(req.params.comment_id,function(err, foundComment){
        if(err)
        {
            res.render("back");
        }
        else
        {
        res.render("comments/edit",{comment:foundComment,campground_id:req.params.id});
        }
    });
    
});
router.put("/:comment_id/edit",function(req,res){
    Comment.findByIdAndUpdate(req.params.comment_id,req.body.comment,function(err,updatedComment){
        if(err)
        {
            res.redirect("back");
        }
        else
        {
            res.redirect("/campgrounds/"+req.params.id);
        }
    });
});
 router.delete("/:comment_id",function(req,res){
        Comment.findByIdAndRemove(req.params.comment_id,function(err){
            if(err)
            {  
                res.redirect("back");
            }
            else
            {
                res.redirect("/campgrounds/"+req.params.id);
            }
    
        });
        
 });


module.exports= router;
