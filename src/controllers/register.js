const {User}=require("../db")
const {encrypt} =require("../helpers/handleBcrypt")
const emailer=require("../helpers/email")


const register = async (req, res, next)=>{
	try{
		let {userName, name, lastName, email, password}=req.body;

		if(userName && name && lastName && email && password){

			let search=await User.findOne({
				where:{
					email
				}
			})

			if(search){
				res.status(410).send({Erro: `El ${email} que instrodujo ya esta en la Base de Datos`})
			}else{

				let pashas=await encrypt(password)

				let create=await User.create({
					userName,
					name,
					lastName,
					email,
					password:pashas
				})

				emailer(create)

				res.status(200).send({
					Data:"Usuario registrado exitosamente",
					Usuario: create.userName,
					Email:create.email
				})
			}

		}else{
			res.status(410).send({Error:"Por Favor rellene todos los campos para registar el Usuario"})
		}


	}catch(err){
		next(err)
	}
}

module.exports=register