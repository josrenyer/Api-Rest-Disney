const {User}=require("../db")
const {compare} =require("../helpers/handleBcrypt")
const {tokenSing}=require("../helpers/generateToken")



const login = async (req, res, next)=>{
	try{
		let {userName, password}=req.body;

		if(userName && password){

			let search=await User.findOne({
				where:{
					userName
				}
			})

			if(!search){
				res.status(404).send({Error:"Datos incorrectos"})
			}else{
				let comparehas=await compare(password, search.password)

				let token= await tokenSing(search)

				if(comparehas){

					res.status(202).send({
						Data:`Login exitoso, Bienvenido ${search.userName}`,
						token
					})

				}else{
					res.status(404).send({Error:"Datos incorrectos"})
				}
				
			}

		}else{
			res.status(410).send({Error: "Por favor rellene todo los campos para poder logearse"})
		}

	}catch(err){
		next(err)
	}
}

module.exports=login