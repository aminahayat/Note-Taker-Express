const { Router } = require('express')
const express = require('express')
const path = require('path')


Router.get("/notes", (req,res)=>){
    res.SendFile(path.join(__dirname, "../public")
}