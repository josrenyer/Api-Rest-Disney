const {verifyToken}=require("../helpers/generateToken")

const auth =async(req, res, next)=>{
	try{
		let token=req.headers.authorization.split(" ").pop();

		let tokenverify= await verifyToken(token);

		if(tokenverify===null){
			res.status(404).send({Error:"usted por aqui no pasa"})
		}else{
			next()
		}
	}catch(err){
		res.send(err)
	}
}

module.exports=auth
