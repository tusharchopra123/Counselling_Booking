const Consellor = require('../../db').Consellor;
const Raj = require('../../db').Raj;
const Prem = require('../../db').Prem;
const Aryan = require('../../db').Aryan;
const route = require('express').Router();
route.get('/',(req,res)=>{

    Raj.findAll({
        where:{
        }
    })

})

