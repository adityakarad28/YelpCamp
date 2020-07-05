var mongoose=require("mongoose");
var Campground=require("./models/campground");
var Comment=require("./models/comment.js");
// var data=[
//     {
//         name:"Manali1",
//         image:"https://invinciblengo.org/photos/event/slider/manali-girls-special-adventure-camp-himachal-pradesh-1xJtgtx-1440x810.jpg",
//         description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        
//     },
//     {
//         name:"Manali2",
//         image:"https://invinciblengo.org/photos/event/slider/manali-girls-special-adventure-camp-himachal-pradesh-1xJtgtx-1440x810.jpg",
//         description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        
//     },
//     {
//         name:"Manali3",
//         image:"https://invinciblengo.org/photos/event/slider/manali-girls-special-adventure-camp-himachal-pradesh-1xJtgtx-1440x810.jpg",
//         description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}
    
//     ];
function seedDB(){
//     // REMOVE ALL THE EXISTING CAMPGROUNDS
//     Campground.remove({},function(err){
//     if(err)
//     {
//         console.log("err");
//     }
//     console.log("removed camgrounds!");
    
// });
//     //ADD A FEW CAMPGROUNDS
//     data.forEach(function(seed){
//         Campground.create(seed,function(err,campground){
//             if(err)
//             {
//                 console.log(err);
//             }
//             else
//             {
//                 console.log("added a campground!");
//                 // add a comment
//                 Comment.create({
//                     text:"This place is great,but no internet",
//                     author:"Aditya Karad"
//                 },function(err,comment){
//                     if(err)
//                     {
//                         console.log(err);
//                     }
//                     else
//                     {
//                          campground.comments.push(comment);
//                          campground.save();
//                          console.log("New comment added!");
//                     }
                    
//                 });
//             }
//         });
//     });
    
}
module.exports=seedDB;