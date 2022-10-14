const app=require("./src/app")
const {conn}=require("./src/db")

let PORT=process.env.PORT || 3001;


conn.sync({ force: true }).then(() => {
	app.listen(PORT || 3001,()=>{
		console.log("Servidor iniciado en el puerto:"+ PORT)
	})
});
