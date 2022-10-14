const {Character, Movie, User}=require("../db")

const allCharacters= async(req, res, next)=>{
	try{
		let character=await Character.findAll({include:Movie});

		if(character.length > 0){
			res.status(200).send({
				Data:"Personajes Creados",
				Info:character
			})
		}else{
			res.status(409).send({Data: "No hay Personajes"})
		}
		

	}catch(err){
		next(err)
	}
}


const newCharacter= async(req, res, next)=>{
	try{

		let {img, name, age, weight, history, idMovie}=req.body;


		if(img && name && age && weight && history){

			if(idMovie){

				let searchMovie=await Movie.findByPk(idMovie)


				if(!searchMovie){

					let createCharacter= await Character.create({
						img,
						name,
						age,
						weight,
						history
					})

					return res.status(200).send({
						info:"No Se Asocio una Pelicula al Personje el Id no corresponde a ninguna pelicula",
						Data:createCharacter
					})

				}else{

					let createCharacter= await Character.create({
						img,
						name,
						age,
						weight,
						history
					})
					createCharacter.addMovies(searchMovie)
					return res.status(200).send({
						info:"Se Asocio la pelicula al Personje",
						Data:createCharacter

					})
				}
			}else{

			let createCharacter= await Character.create({
					img,
					name,
					age,
					weight,
					history
				})

			return res.status(200).send({
					info:"Personaje creado con exito! No se asocio ninguna pelicula",
					Data:createCharacter
					})
			}

		}else{
			res.status(410).send({Error:"Por Favor rellene todos los campos para crear el Personaje"})
		}

	}catch(err){
		next(err)
	}
}

const deleteCharacter= async(req, res, next)=>{
	try{

		let {id}=req.body;

		if(id){

			let searchIdCharacter = await Character.findByPk(id);

    		if(!searchIdCharacter){

    			return res.status(409).send({Error:"Por favor ingrese un ID de un Personaje valido"});

    		}else{

    			let deleteChar = await Character.destroy({
      				where: {
        				id,
      				},
    			});

    			return res.status(200).send("Personaje eliminado");
    		}

		}else{

			res.status(411).send({Error: "Ingrese un ID"})

		}		

	}catch(err){
		next(err)
	}
}


const editCharacter = async (req, res, next)=>{
    try{
        let { id, img, name, age, weight, history, idMovie}=req.body;

            let searchId= await Character.findByPk(id);

            if(!searchId){// validamos si nos trae un arreglo vacio 
                return res.status(409).send({Error:"El ID del Personaje no existe"});
            }else{

            	if (img) await searchId.update({ img })
            	if (name) await searchId.update({ name })
            	if (age) await searchId.update({ age })
            	if (weight) await searchId.update({ weight })
        		if (history) await searchId.update({ history })

        		await searchId.save()

        		return res.status(200).send({Data:"Personaje Actualizado"})

            }
    }
    catch(err){
        next(err)
    }
}

module.exports={
	allCharacters,
	newCharacter,
	deleteCharacter,
	editCharacter
}