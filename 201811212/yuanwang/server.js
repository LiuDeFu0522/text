const express = require("express");
const bodyParser = require("body-parser")

const wishRouter = require("./router/dream.js")
const http = express();


http.listen(8080,()=>{
	console.log("run")
})

http.use(bodyParser.urlencoded({extended:false}));

http.use(express.static("./public"));

http.use("/dream",wishRouter)
