const db = require('./db')  
const Query = {  
   hello:() => {  
      return "Welcome to JavaTpoint..."  
   },  
   employees:() => db.employees.list()  
}  
module.exports = {Query}  