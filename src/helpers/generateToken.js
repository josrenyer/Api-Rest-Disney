const jwt=require("jsonwebtoken")


const tokenSing=async(user)=>{
	return jwt.sign(	
		{
			_id:user.id,
			username:user.userName,
			role: user.role
		},
		process.env.SECRET,
		{
			expiresIn: "2h"
		}
	);
}

const verifyToken=async(token)=>{
	try{
		return jwt.verify(token, process.env.SECRET)
	}catch(err){
		return null
	}
}


module.exports={
	tokenSing,
	verifyToken
}