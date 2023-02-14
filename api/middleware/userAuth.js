const authenticating = (req,res,next)=>{
if(req.user){
   next()
}else{
    res.status(200).json({
        success: false,
        message: "You are not logged in",
      });
}
}

module.exports=authenticating