const express = require('express')
const path = require('path')
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const server_port = process.env.PORT || 3371
app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/api', require('./routes/api').route)

app.listen(server_port)
