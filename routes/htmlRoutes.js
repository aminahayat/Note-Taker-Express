const { Router } = require('express')
const router = express.Router()
const path = require('path')


Router.get("/notes", (req,res)=>{
    res.SendFile(path.join(__dirname, "../public/notes.html"))

})

router.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

module.exports = router; 