const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    employeeNumber: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    }
});

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = { Employee };
