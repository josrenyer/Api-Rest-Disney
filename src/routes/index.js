const {Router}=require("express");
const userRoute=require("./user")
const characterRoute=require("./characters")
const movieRoute=require("./movies")
const auth=require("../middlewares/auth.js")
const router=Router();


router.use("/auth", userRoute)
router.use(auth, characterRoute)
router.use(auth, movieRoute)

module.exports=router