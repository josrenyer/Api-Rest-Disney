const nodemailer=require("nodemailer")
const plantilla=require("./html")


const createTans=()=>{
	const transport = nodemailer.createTransport({
  		host: "smtp.mailtrap.io",
  		port: 2525,
  		auth: {
    		user: "6e97bead0d2460",
    		pass: "c74f11efe82638"
  		}
	});

	return transport
}


const sendMail=async(user)=>{

	const transporter=createTans();

	const info = await transporter.sendMail({
    	from: '"Fred Foo 👻" <foo@example.com>', // sender address
    	to: `${user.email}`, // list of receivers
    	subject: `Hello! ${user.name} Welcome to API Disney ✔`, // Subject line
    	html: plantilla, // html body
  	})

  	console.log("Message sent: %s", info.messageId);

  	return
}


module.exports=sendMail