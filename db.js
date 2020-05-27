const Sequelize = require('sequelize')
const db = new Sequelize(process.env.DATABASE,process.env.DATABASE ,process.env.PASSWORD , {
    host:'remotemysql.com',
    dialect: 'mysql',
    port:3306,
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})
const Consellors = db.define('consellors',{
    consellor_id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING
})
const Raj = db.define('Raj',{
    consellor_id:Sequelize.INTEGER,
    Date: Sequelize.STRING,
    slot: Sequelize.STRING,
    available: Sequelize.INTEGER
})
const Prem = db.define('Prem',{
    consellor_id:Sequelize.INTEGER,
    Date: Sequelize.STRING,
    slot: Sequelize.STRING,
    available: Sequelize.INTEGER
})
const Aryan = db.define('Aryan',{
    consellor_id:Sequelize.INTEGER,
    Date: Sequelize.STRING,
    slot: Sequelize.STRING,
    available: Sequelize.INTEGER
})
const students = db.define('students',{
    consellor_id:Sequelize.INTEGER,
    student_id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:Sequelize.STRING,
    date: Sequelize.STRING,
    slot: Sequelize.STRING,
    description: Sequelize.STRING
})

db.sync()
    .then(() => console.log("Database has been synced"))
    .catch((err) => console.error("Error creating database"))

exports = module.exports = {
    Consellors,Raj,Prem,Aryan,students
}