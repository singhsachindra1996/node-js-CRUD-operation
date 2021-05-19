var db = require('../dbConnection');
var express = require('express');
var router = express.Router();
var emp=require('../Models/emp_model');

router.get('/', function(req,res,next){

    emp.getAllEmp(function(err, rows){
        if (err) {
            res.json(err)
        } else {
            res.json(rows)
        }
    });
});

router.get('/:id', function(req,res,next){

    console.log(req.params.id)
    emp.getEmpById(req.params.id,function(err, rows){
        if (err) {
            res.json(err)
        } else {
            res.json(rows)
        }
    });
});

router.post('/:addEmp', function(req,res,next){

    if(req.params.addEmp === 'addEmp'){
        emp.addEmp(req.body,function(err, rows){
            if (err) {
                res.json(err)
                // res.send({
                //     "code": 400,
                //     "failed": "error occured"
                // })
            } else {
                res.json(rows)
                // res.send({
                //     "code": 200,
                //     "success": "User registerd Succesfully"
                // })
            }
        });
    }
});

    //POST API USING queryParams
// router.post('/:addEmp', (req,res) =>{

//     let emp_name = req.query.emp_name;
//     let emp_designation = req.query.emp_designation;
//     let emp_salary = req.query.emp_salary
//     let sql = 'INSERT INTO employee(emp_name,emp_designation,emp_salary) VALUES (?,?,?)';

//     db.query(sql,[emp_name,emp_designation,emp_salary],(err, result)=>{
//         console.log(req.body)
//         if(err) throw err;
//         res.write('Inserted');
//         res.end();
//     })
// })

router.delete('/:id', function(req,res,next){

    console.log(req.params.id)
    emp.deleteEmp(req.params.id,function(err, rows){
        if (err) {
            res.json(err)
        } else {
            res.json(rows)
        }
    });
});

router.put('/:addEmp/:id', function(req,res,next){

    // if(req.params.id === 'addEmp'){
        console.log(req.params.id,req.body)
        emp.updateEmp(req.params.id,req.body,function(err, rows){
            if (err) {
                res.json(err)
            } else {
                res.json(rows)
            }
        });
    // }
});

module.exports = router;