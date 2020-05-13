const Sequelize = require('sequelize')

const db = new Sequelize( 'testdb', 'testuser', 'testpass', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5,
    }
});

const Consellor = db.define('Consellors', {
    consellor_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    },{

    }
)
const Raj = db.define('raj_1',{
    consellor_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    date:{
        type: Sequelize.STRING,
        allowNull: false
    },
    slot:{
        type: Sequelize.STRING,
        allowNull: false
    },Available:{
        type: Sequelize.INTEGER,
        allowNull: false
    },student1id:{
        type: Sequelize.INTEGER,
    },student2id:{
        type: Sequelize.INTEGER,
    },student2id:{
        type: Sequelize.INTEGER,
    }
    },{

    }
)
const Prem = db.define('prem_1',{
    consellor_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    date:{
        type: Sequelize.STRING,
        allowNull: false
    },
    slot:{
        type: Sequelize.STRING,
        allowNull: false
    },Available:{
        type: Sequelize.INTEGER,
        allowNull: false
    },student1id:{
        type: Sequelize.INTEGER,
    },student2id:{
        type: Sequelize.INTEGER,
    },student2id:{
        type: Sequelize.INTEGER,
    }
    },{

    }
)
const Aryan = db.define('aryan_1',{
    consellor_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    date:{
        type: Sequelize.STRING,
        allowNull: false
    },
    slot:{
        type: Sequelize.STRING,
        allowNull: false
    },Available:{
        type: Sequelize.INTEGER,
        allowNull: false
    },student1id:{
        type: Sequelize.INTEGER,
    },student2id:{
        type: Sequelize.INTEGER,
    },student2id:{
        type: Sequelize.INTEGER,
    }
    },{

    }
)
const Student = db.define('students', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        foreignKey: 'student_id'
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slot_booked: {
        type: Sequelize.STRING,
        allowNull: false
    },
    consellor_id:{
        type: Sequelize.INTEGER,
    },
    Questions: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})
db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

db.sync()
    .then(() => console.log("Database has been synced"))
    .catch((err) => console.error(err))

exports = module.exports = {
    Consellor,Student,Aryan,Raj,Prem
}