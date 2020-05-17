const route = require('express').Router()
const Sequelize = require('sequelize')
const Raj = require('../db').Raj
const Prem = require('../db').Prem
const Aryan = require('../db').Aryan
const Consellors = require('../db').Consellors
const students = require('../db').students
route.get('/Raj',(req,res)=>{
    students.findAll({where: {consellor_id:'1'}})
        .then((students)=>res.status(200).send(students))
        .catch((err)=>{
            console.log(err)
            res.status(500).send({error: "Could not retrive data"
            })
        })
})
route.get('/Raj/slots',(req,res)=>{
    Raj.findAll({
        attributes: [
            // specify an array where the first element is the SQL function and the second is the alias
            [Sequelize.fn('DISTINCT', Sequelize.col('slot')) ,'slot'],
            'Date',
            'available'
        ]
    })
    .then((slots)=>res.status(200).send(slots))
        .catch((err)=>{
            console.log(err)
            res.status(500).send({error: "Could not retrive data"
            })
        })
})
route.get('/Raj/Dates',(req,res)=>{
    Raj.findAll({
        attributes: [
            // specify an array where the first element is the SQL function and the second is the alias
            [Sequelize.fn('DISTINCT', Sequelize.col('Date')) ,'Date']
        ]
    })
    .then((slots)=>res.status(200).send(slots))
        .catch((err)=>{
            console.log(err)
            res.status(500).send({error: "Could not retrive data"
            })
        })
})
route.post('/Raj',(req,res)=>{
    Raj.create({
        consellor_id: '1',
        Date:  req.body.Date,
        slot: req.body.Slot,
        available: req.body.Available
    }).then((date)=>{
        return
    }).catch((err)=>{
        console.log(err)
        return res.redirect('/raj')
      })
})
route.get('/Prem',(req,res)=>{
    students.findAll({where: {consellor_id:'2'}})
        .then((students)=>res.status(200).send(students))
        .catch((err)=>{
            console.log(err)
            res.status(500).send({error: "Could not retrive data"
            })
        })
})
route.get('/Prem/slots',(req,res)=>{
    Prem.findAll({
        attributes: [
            // specify an array where the first element is the SQL function and the second is the alias
            [Sequelize.fn('DISTINCT', Sequelize.col('slot')) ,'slot'],
            'Date',
            'available'
        ]
    })
    .then((slots)=>res.status(200).send(slots))
        .catch((err)=>{
            console.log(err)
            res.status(500).send({error: "Could not retrive data"
            })
        })
})
route.get('/Prem/Dates',(req,res)=>{
    Prem.findAll({
        attributes: [
            // specify an array where the first element is the SQL function and the second is the alias
            [Sequelize.fn('DISTINCT', Sequelize.col('Date')) ,'Date']
        ]
    })
    .then((slots)=>res.status(200).send(slots))
        .catch((err)=>{
            console.log(err)
            res.status(500).send({error: "Could not retrive data"
            })
        })
})
route.post('/Prem',(req,res)=>{
    Prem.create({
        consellor_id: '1',
        Date:  req.body.Date,
        slot: req.body.Slot,
        available: req.body.Available
    }).then((date)=>{
        return
    }).catch((err)=>{
        console.log(err)
        return res.redirect('/raj')
      })
})
route.get('/Aryan',(req,res)=>{
    students.findAll({where: {consellor_id:'3'}})
        .then((students)=>res.status(200).send(students))
        .catch((err)=>{
            console.log(err)
            res.status(500).send({error: "Could not retrive data"
            })
        })
})
route.get('/Aryan/slots',(req,res)=>{
    Aryan.findAll({
        attributes: [
            // specify an array where the first element is the SQL function and the second is the alias
            [Sequelize.fn('DISTINCT', Sequelize.col('slot')) ,'slot'],
            'Date',
            'available'
        ]
    })
    .then((slots)=>res.status(200).send(slots))
        .catch((err)=>{
            console.log(err)
            res.status(500).send({error: "Could not retrive data"
            })
        })
})
route.get('/Aryan/Dates',(req,res)=>{
    Aryan.findAll({
        attributes: [
            // specify an array where the first element is the SQL function and the second is the alias
            [Sequelize.fn('DISTINCT', Sequelize.col('Date')) ,'Date']
        ]
    })
    .then((slots)=>res.status(200).send(slots))
        .catch((err)=>{
            console.log(err)
            res.status(500).send({error: "Could not retrive data"
            })
        })
})
route.post('/Aryan',(req,res)=>{
    Aryan.create({
        consellor_id: '1',
        Date:  req.body.Date,
        slot: req.body.Slot,
        available: req.body.Available
    }).then((date)=>{
        return
    }).catch((err)=>{
        console.log(err)
        return res.redirect('/raj')
      })
})

route.get('/consellors',(req,res)=>{
    Consellors.findAll()
    .then((consellors)=>res.status(200).send(consellors))
        .catch((err)=>{
            console.log(err)
            res.status(500).send({error: "Could not retrive data"
            })
        })
})
route.post('/students',(req,res)=>{
    students.create({
        name: req.body.name,
        slot: req.body.Slot,
        date: req.body.Date,
        consellor_id: req.body.consellor_id,
        description: req.body.Description,
    })
    .then((user)=>{return})
    .catch((err)=>{
        console.log(err)
        return res.redirect('/students')})
})
route.post('/students/R',(req,res)=>{
    Raj.update({ available: req.body.available }, {
        where: {
          slot: req.body.Slot,
          Date: req.body.Date
        }
      })
    .then(()=>res.redirect('/students'))
    .catch((err)=>{res.send({error:err})})
})
route.post('/students/P',(req,res)=>{
    Prem.update({ available: req.body.available }, {
        where: {
          slot: req.body.Slot,
          Date: req.body.Date
        }
      })

    .then(()=>res.redirect('/students'))
    .catch((err)=>{res.send({error:err})})
})
route.post('/students/A',(req,res)=>{
    Aryan.update({ available: req.body.available }, {
        where: {
          slot: req.body.Slot,
          Date: req.body.Date
        }
      })
    .then(()=>res.redirect('/students'))
    .catch((err)=>{res.send({error:err})})
})
route.get('/students/list',(req,res)=>{
    students.findAll()
    .then((students)=>res.status(200).send(students))
        .catch((err)=>{
            console.log(err)
            res.status(500).send({error: "Could not retrive data"
            })
        })
})
route.get('/con',(req,res)=>{
    Consellors.create({
        consellor_id: '3',
        name: 'Aryan'
    })
    .then(()=>{res.send("hello")})
    .catch((err)=>{
        console.log(err)
        return })
})
exports = module.exports = {
    route
}