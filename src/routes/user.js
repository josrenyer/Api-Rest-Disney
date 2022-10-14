const {Router}=require("express");
const login=require("../controllers/login.js")
const register=require("../controllers/register.js")
const auth= require("../middlewares/auth.js")

const router=Router();


router.post("/register", register)
router.post("/login", login)

module.exports=router