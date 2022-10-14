// Cuando se habla del nacimiento del cine se toma como referencia la fecha del 28 de diciembre de 1895,
// en la que se proyectaron al público las primeras películas realizadas por los hermanos Auguste y Louis
// Lumière, en la memorable sesión realizada en el Salón Indio del Gran Café de París.

const comparateYear=async(created)=>{

	let hoy=new Date()
	let dia=hoy.getDate();
	let mes=hoy.getMonth()+1;
	let angio=hoy.getFullYear();


	let formato=`${angio}-${mes}-${dia}`;

	if(created < "1985-12-28" || created > formato){
		return false
	}else{
		return true
	}
}

module.exports=comparateYear