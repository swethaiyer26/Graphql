const { DataStore } = require('notarealdb');  
const store = new DataStore('./data');
module.exports = {  
    employees:store.collection('employees'),  
    companies:store.collection('companies')  
 };  