var db = require('../dbConnection');
var employees = {
    getAllEmp: function(callback){
        return db.query("select * from employee",callback);
    },
    getEmpById: function(id,callback){
        return db.query("select * from employee where id=?",[id],callback);
    },
    addEmp: function(item,callback){
        return db.query("INSERT INTO employee(Id,emp_name,emp_designation,emp_salary) VALUES (?,?,?,?)",[item.Id,item.emp_name,item.emp_designation,item.emp_salary], callback);
    },
    deleteEmp: function(id,callback){
        return db.query("delete from employee where id=?",[id],callback);
    },
    updateEmp: function(id,item,callback){
        return db.query("update employee set emp_name=?,emp_designation=?,emp_salary=? where id=?",[item.emp_name,item.emp_designation,item.emp_salary,id],callback)
    }
}
module.exports = employees;