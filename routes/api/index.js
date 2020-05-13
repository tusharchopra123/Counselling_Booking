const route = require('express').Router()

route.use('/consellors', require('./consellors'))
route.use('/students', require('./students'))

exports = module.exports = {
    route
}