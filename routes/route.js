const express = require('express');
const { Employee } = require('../model/employee');

const router = express.Router();

// Get all employees
router.get('/employee', async function (req, res) {
    const employees = await Employee.find();
    return res.json(employees);
});

// Get one employee by their first and last name
router.get('/employee/:firstname/:lastname', async function (req, res) {
    const employee = await Employee.findOne({
        firstname: req.params.firstname,
        lastname: req.params.lastname
    });
    if (!employee) {
        return res.status(404).send();
    } else {
        return res.json(employee);
    };
});

// Post a new employee
router.post('/employee', async function (req, res) {
    const employee = new Employee({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        employeeNumber: req.body.employeeNumber,
        designation: req.body.designation
    });
    await employee.save();
    res.send(employee);
});

// Delete an employee by their first and last name
router.delete('/employee/:firstname/:lastname', async function (req, res) {
    try {
        await Employee.deleteOne({
            firstname: req.params.firstname,
            lastname: req.params.lastname
        });
        res.status(204).send();
    } catch {
        res.status(404).send();
    };
});

// Update an employee by their id
router.patch('/employee/:id', async function (req, res){
    Employee.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((employee)=>{
        if(!employee){
            res.status(404).send();
        } else{
            res.send(employee);
        };
    });
});

module.exports = router;