const {Router}=require("express");
const {allMovies, newMovie, deleteMovie, editMovie}=require("../controllers/movies.js")
const auth=require("../middlewares/auth.js")
const router=Router();



router.get("/movies", allMovies)
router.post("/newMovie", newMovie)
router.delete("/deleteMovie", deleteMovie)
router.put("/editMovie", editMovie)


module.exports=router