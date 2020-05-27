const express = require('express')
const path = require('path')
const app = express();
const dotenv = require("dotenv")
 
dotenv.config()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const server_port = process.env.PORT || 9381
app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/api', require('./routes/api').route)
app.use('/students',express.static(path.join(__dirname,'public/students.html')))
app.use('/Raj',express.static(path.join(__dirname,'public/Raj.html')))
app.use('/Prem',express.static(path.join(__dirname,'public/Prem.html')))
app.use('/Aryan',express.static(path.join(__dirname,'public/Aryan.html')))

process.on('SIGINT', function() {
    console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" );
    // some other closing procedures go here
    process.exit(1);
  });
app.listen(server_port,()=>{
console.log(process.env.DATABASE)
})
