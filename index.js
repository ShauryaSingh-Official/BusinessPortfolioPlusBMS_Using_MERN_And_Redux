const express = require("express");
const cors = require("cors");

const path = require("path");
const server = express();
server.use(cors());
server.use(express.static("build"));
server.use(express.json());

const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://souravk48560:Sour1508@bbms.tamdqug.mongodb.net/?retryWrites=true&w=majority/BBMS');
  console.log('database connected !!')
}

const employeeRoutes = require('./routes/admin/employee');
server.use('/admin/worker', employeeRoutes.routes);

const clientRoutes = require('./routes/admin/client');
server.use('/admin/client', clientRoutes.routes);

server.use("*",(req,res)=>{
  res.sendFile(path.resolve(__dirname , 'build' , 'index.html'));
})

server.listen(8080,()=>{ console.log("Server started ..."); });