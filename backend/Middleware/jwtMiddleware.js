const jwt=require('jsonwebtoken')
const jwtMiddleware =(req,res,next)=>{
    console.log("inside JWT");
    const token =req.headers["authorization"].split(' ')[1]
    if(token){
        console.log(token);
try{
const response =jwt.decode(token,process.env.JWT_SECRET)

req.payload =response.userId
console.log("in try block");
next()
}catch(err){
res.status(401).json("Authorization failed ... please login !!!")
console.log("Authorization failed .... please login !!!");
}
    }else{
res.status(406).json("please provide token")
    }
}
module.exports =jwtMiddleware