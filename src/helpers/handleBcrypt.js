const bcrypt=require("bcryptjs")

const encrypt=async(password)=>{
	const hash=await bcrypt.hash(password, 10)
	return hash
}

const compare=async (password, hashpassword)=>{
	return await bcrypt.compare(password, hashpassword)
}

module.exports={
	encrypt,
	compare
}