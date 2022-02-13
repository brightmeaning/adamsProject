"use strict"

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl")

router.get("/main", ctrl.mainCtrl);

router.get("/login", (req,res)=>{
    res.render("home/login");
});

module.exports = router;