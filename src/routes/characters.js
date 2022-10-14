const {Router}=require("express");
const {allCharacters, newCharacter, deleteCharacter, editCharacter}=require("../controllers/characters.js")
const auth=require("../middlewares/auth.js")
const router=Router();



router.get("/character", allCharacters)
router.post("/newCharacter", newCharacter)
router.delete("/deleteCharacter", deleteCharacter)
router.put("/editCharacter", editCharacter)


module.exports=router

