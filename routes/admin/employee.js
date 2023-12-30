const express = require('express');
const routes = express.Router();
const employeeController = require('../../controller/admin/employee');

routes.post("/AddNewEmployee", employeeController.addNewEmployee);
routes.get('/Employees',employeeController.getAllEmployee);

routes.post('/NewWork',employeeController.postWorkDetails);
routes.get('/AllWorkRecords', employeeController.getAllEmployeesRecords);

// routes.post('/NewPayment',employeeController.postWorkDetails);
// routes.get('/EmployeeWorkRecord', employeeController.getEmployeeRecord);
// routes.get('/EmployeeBill',employeeController.getEmployeeRecord);

exports.routes = routes;