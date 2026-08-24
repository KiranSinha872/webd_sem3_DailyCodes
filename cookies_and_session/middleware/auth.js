const auth=(req,res,next)=>{
    //loigin for authentication
    console.log("login middleware....")
    
    res.cookie("username","kiransinha");
    res.cookie("state","assam");
    res.cookie("gender","male");
    res.cookie("id","69011");
    next();

}

const status=true;

module.exports={auth,status};