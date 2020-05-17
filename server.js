const express = require('express')
const path = require('path')
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const server_port = process.env.PORT || 9381
app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/api', require('./routes/api').route)
app.use('/students',express.static(path.join(__dirname,'public/students.html')))
app.use('/Raj',express.static(path.join(__dirname,'public/Raj.html')))
app.use('/Prem',express.static(path.join(__dirname,'public/Prem.html')))
app.use('/Aryan',express.static(path.join(__dirname,'public/Aryan.html')))

app.listen(server_port)
