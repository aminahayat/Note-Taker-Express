const express = require('express')
const htmlRoutes = require("./routes/htmlRoutes")

const PORT = process.env.PORT || 8080

const app = express()

app.use(htmlRoutes)

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))




app.listen(PORT, ()=> console.log(`Listening on https:\\localhost:${PORT}`)) 