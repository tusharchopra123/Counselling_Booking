const mysql = require('mysql2')
const connection = mysql.createConnection({
    host:'remotemysql.com',
    database: 'HFHpn7C44I',
    user:'HFHpn7C44I',
    password: 'TgmohC8xOi'
})
connection.query(
    
    `create table if not exists consellors(
        consellor_id integer auto_increment primary key,
        name varchar(50) not null
    )`,function(err,results){
        if(err){
            console.log(err)
        }else{
            console.log("Table created successfully")
        }
    }
)
connection.query(
    `   create table if not exists Raj(
        consellor_id integer not null,
        Date varchar(50) not null,
        slot varchar(50) not null,
        avaliable integer not null,
        studentid1 integer,
        studentid2 integer,
        studentid3 integer
    )`,function(err,results){
        if(err){
            console.log(err)
        }else{
            console.log("Table created successfully")
        }
    }
)
connection.query(
    `create table if not exists Prem(
        consellor_id integer not null,
        Date varchar(50) not null,
        slot varchar(50) not null,
        avaliable integer not null,
        studentid1 integer,
        studentid2 integer,
        studentid3 integer
    )`,function(err,results){
        if(err){
            console.log(err)
        }else{
            console.log("Table created successfully")
        }
    }
)
connection.query(
    `create table if not exists Aryan(
        consellor_id integer not null,
        Date varchar(50) not null,
        slot varchar(50) not null,
        avaliable integer not null,
        studentid1 integer,
        studentid2 integer,
        studentid3 integer
    )`,function(err,results){
        if(err){
            console.log(err)
        }else{
            console.log("Table created successfully")
        }
    }
)
connection.query(
    `create table if not exists students(
        student_id integer auto_increment primary key,
        date varchar(50) not null,
        slot varchar(50) not null,
        consellor_id integer not null,
        description varchar(500)
    )`,function(err,results){
        if(err){
            console.log(err)
        }else{
            console.log("Table created successfully")
        }
    }
)
function getAllstudentR(){
    return new Promise((resolve,reject)=>{
        connection.query(
            ` Select name,description,Date,slot from 
              students where consellor_id=1
            `,function(err,rows,cols){
                if(err){reject(err)}
                else {resolve(rows)}
            }
        )
    })
}
function addSlotsR(Date,Slot,Available){
    return new Promise((resolve,reject)=>{
        connection.query(
            ` Insert into Raj(consellor_id,Date,slot,available) values(?,?,?,?)
            `,['1',Date,Slot,Available],
            function(err,results){
                if(err)reject(err)
                else {resolve()}
            }
        )
    })
}
function getAllSlotsR(){
    return new Promise((resolve,reject)=>{
        connection.query(
            ` 
            Select DISTINCT slot,Date,available from Raj
            `,function(err,rows,cols){
                if(err)reject(err)
                else resolve(rows)
            }
        )
    })
}
function getAllDatesR(){
    return new Promise((resolve,reject)=>{
        connection.query(
            ` 
            Select DISTINCT Date from Raj
            `,function(err,rows,cols){
                if(err)reject(err)
                else resolve(rows)
            }
        )
    })
}
function getAllstudentP(){
    return new Promise((resolve,reject)=>{
        connection.query(
            ` 
            Select name,description,Date,slot from 
            students where consellor_id=2
            `,function(err,rows,cols){
                if(err)reject(err)
                else resolve(rows)
            }
        )
    })
}
function addSlotsP(Date,Slot,Available){
    return new Promise((resolve,reject)=>{
        connection.query(
            ` Insert into Prem(consellor_id,Date,slot,available) values(?,?,?,?)
            `,['2',Date,Slot,Available],
            function(err,results){
                if(err)reject(err)
                else {resolve()}
            }
        )
    })
}
function getAllSlotsP(){
    return new Promise((resolve,reject)=>{
        connection.query(
            ` 
            Select DISTINCT slot,Date,available from Prem
            `,function(err,rows,cols){
                if(err)reject(err)
                else resolve(rows)
            }
        )
    })
}
function getAllDatesP(){
    return new Promise((resolve,reject)=>{
        connection.query(
            ` 
            Select DISTINCT Date from Prem
            `,function(err,rows,cols){
                if(err)reject(err)
                else resolve(rows)
            }
        )
    })
}
function getAllstudentA(){
    return new Promise((resolve,reject)=>{
        connection.query(
            ` 
            Select name,description,Date,slot from 
            students where consellor_id = 3
            `,function(err,rows,cols){
                if(err)reject(err)
                else resolve(rows)
            }
        )
    })
}
function addSlotsA(Date,Slot,Available){
    return new Promise((resolve,reject)=>{
        connection.query(
            ` Insert into Aryan(consellor_id,Date,slot,available) values(?,?,?,?)
            `,['3',Date,Slot,Available],
            function(err,results){
                if(err)reject(err)
                else {resolve()}
            }
        )
    })
}
function getAllSlotsA(){
    return new Promise((resolve,reject)=>{
        connection.query(
            ` 
            Select DISTINCT slot,Date,available from Aryan
            `,function(err,rows,cols){
                if(err)reject(err)
                else resolve(rows)
            }
        )
    })
}
function getAllDatesA(){
    return new Promise((resolve,reject)=>{
        connection.query(
            ` 
            Select DISTINCT Date from Aryan
            `,function(err,rows,cols){
                if(err)reject(err)
                else resolve(rows)
            }
        )
    })
}
function getAllConsellors(){
    return new Promise((resolve,reject)=>{
        connection.query(
            ` 
            Select* from consellors
            `,function(err,rows,cols){
                if(err)reject(err)
                else resolve(rows)
            }
        )
    })
}

function handleDisconnect() {
     // Recreate the connection, since
                                                    // the old one cannot be reused.
  
    connection.connect(function(err) {              // The server is either down
      if(err) {                                     // or restarting (takes a while sometimes).
        console.log('error when connecting to db:', err);
        setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
      }                                     // to avoid a hot loop, and to allow our node script to
    });                                     // process asynchronous requests in the meantime.
                                            // If you're also serving http, display a 503 error.
    connection.on('error', function(err) {
      console.log('db error', err);
      if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
        handleDisconnect();                         // lost due to either server restart, or a
      } else {                                      // connnection idle timeout (the wait_timeout
        throw err;                                  // server variable configures this)
      }
    });
  }
  function addDataToStudents(name,Slot,Date,consellor_id,Description){
    return new Promise((resolve,reject)=>{
        connection.query(
            ` Insert into students(name,slot,date,consellor_id,description) values(?,?,?,?,?)
            `,[name,Slot,Date,consellor_id,Description],
            function(err,results){
                if(err){reject(err)
                console.log("error")}
                else {resolve()
                console.log("Insertes successfully")}
            }
        )
    })
}
function updateTableR(Available,slot,date){
    return new Promise((resolve,reject)=>{
        connection.query(
            ` Update Raj SET available = ? where slot = ? AND Date = ?
            `,[Available,slot,date],
            function(err,results){
                if(err){reject(err)
                console.log("error")
                console.log(err)}
                else {resolve()
                console.log("Updated successfully")}
            }
        )
    })
}
function updateTableP(Available,slot,date){
    return new Promise((resolve,reject)=>{
        connection.query(
            ` Update Prem SET available = ? where slot = ? AND Date = ?
            `,[Available,slot,date],
            function(err,results){
                if(err){reject(err)
                console.log("error")}
                else {resolve()
                console.log("Updated successfully")}
            }
        )
    })
}function updateTableA(Available,slot,date){
    return new Promise((resolve,reject)=>{
        connection.query(
            ` Update Aryan SET available = ? where slot = ? AND Date = ?
            `,[Available,slot,date],
            function(err,results){
                if(err){reject(err)
                console.log("error")}
                else {resolve()
                console.log("Updated successfully")}
            }
        )
    })
}
function getFromStudents(){
    return new Promise((resolve,reject)=>{
        connection.query(
            ` 
            Select* from students
            `,function(err,rows,cols){
                if(err)reject(err)
                else resolve(rows)
            } 
        )
    
    })  

}

  handleDisconnect();
exports = module.exports = {
    getAllstudentP,getAllstudentR,addSlotsR,getAllSlotsR,getAllDatesR,addSlotsP,getAllSlotsP,getAllDatesP,
    getAllstudentA,addSlotsA,getAllSlotsA,getAllConsellors,getAllDatesA,addDataToStudents,updateTableR,
    updateTableP,updateTableA,getFromStudents
}