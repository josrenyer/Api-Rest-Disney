const {Character, Movie, User}=require("../db")
const comparateYear =require("../helpers/date")


const allMovies= async(req, res, next)=>{
	try{

		let movies= await Movie.findAll({include:Character})

		if(!movies[0]){
			res.status(409).send({Data: "No hay Peliculas agregadas"})
		}else{
			res.status(200).send({
				Data:"Peliculas Creadas y Disponibles",
				Info:movies
			})
		}

	}catch(err){
		next(err)
	}
}


const newMovie = async(req, res, next)=>{
	try{

		let {img,title,created,qualification, idCharacter}=req.body;

		if(img && title && created && qualification){

			if(qualification > 0 && qualification < 6){

				let compare=await comparateYear(created)

				if(compare){


						let createMovies=await Movie.create({
							img,
							title,
							created,
							qualification
						});
						res.status(200).send({
							info:"Se ha creado la Pelicula con exito! No se asocio ningun personaje",
							Data:createMovies
						})
				
				}else{
					return res.status(409).send({Data:"Por favor ingrese una fecha mayor a 1985-12-29 y menor a la actual"});
				}

			}else{
				return res.status(409).send({Data:"Por favor ingrese una calificacion en numeros del 1 al 5"});
			}

		}else{
			res.status(410).send({Error:"Por Favor rellene todos los campos para crear la Pelicula"})
		}

	}catch(err){
		next(err)
	}
}


const deleteMovie= async(req, res, next)=>{
	try{

		let {id}=req.body;

		if(id){

			let searchIdMovie = await Movie.findByPk(id);

    		if(!searchIdMovie){

    			return res.status(409).send({Error:"Por favor ingrese un ID de Pelicula valido"});

    		}else{

    			let deleteChar = await Movie.destroy({
      				where: {
        				id,
      				},
    			});

    			return res.status(200).send("Pelicula eliminada");
    		}

		}else{

			res.status(411).send({Error: "Ingrese un ID"})

		}		

	}catch(err){
		next(err)
	}
}

const editMovie = async (req, res, next)=>{
    try{
        let {id,img,title,created,qualification, idCharacter}=req.body;

            let searchId= await Movie.findByPk(id);

            if(!searchId){// validamos si nos trae un arreglo vacio 
                return res.status(409).send({Error:"El ID de la Pelicula no existe"});
            }else{

            	if (img) await searchId.update({ img })
            	if (title) await searchId.update({ title })
            	if (created) await searchId.update({ created })
            	if (qualification) await searchId.update({ qualification })

        		await searchId.save()

        		return res.status(200).send({Data:"Pelicula Actualizada"})

            }
    }
    catch(err){
        next(err)
    }
}

module.exports={
	allMovies,
	newMovie,
	deleteMovie,
	editMovie
}