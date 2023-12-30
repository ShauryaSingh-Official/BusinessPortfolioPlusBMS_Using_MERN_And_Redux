// // DB CASE SENSITIVE (BUG)

const { json } = require('express');
const employee = require('../../models/employee');
// const empRecord = employee.employeeRecord;
const employeeWorkRecord = employee.employeeWorkRecord;
const employeeRecord = employee.employeeRecord;


// {workerName,dept,productId,rsOfProction}
// {workerName ,productId ,weightHrsUnits,totalWorkAmt,paidAmt,date }

// //   ADD NEW EMPLOYEE/WORKER TO RECORD
exports.addNewEmployee = (req,res)=>{
    const newEmployee = new employeeRecord(req.body);
    newEmployee.save()
    .then(()=>{
        res.status(200).json(doc)
    })
    .catch((err)=>{
        res.status(200).json(err)
    });
}

// //   GET/SHOW ALL EMPLOYEES
exports.getAllEmployee = async (req,res)=>{
    const AllRecords = await employeeRecord.find().sort({date : 1});
    res.status(200).json(AllRecords);
}

// // SAVE WORK RECORD OF EMPLOYEE
exports.postWorkDetails = async (req,res)=>{
        const newWorkRecord = new employeeWorkRecord(req.body);
        newWorkRecord.save().then(()=>res.status(201).json({"1 new Work record saved ":true}))
        .catch(err=>{
            res.status(401).json(err);
        })
}

// // SHOW ALL RECORDS OF EMPLOYEES
exports.getAllEmployeesRecords = async (req,res)=>{
    const allWorkRecords = await employeeWorkRecord.find().sort({date:1});
    console.log(allWorkRecords);
    res.status(200).json(allWorkRecords);
}

// // SAVE PAYMENT RECORD OF EMPLOYEE
// exports.postPaymentDetails = (req,res)=>{
//     const newPaymentRecord = new employeeWorkRecord(req.body);
//     newPaymentRecord.save().then(()=>{
//         res.status(201).json(newPaymentRecord);
//     })
//     .catch(err=> {
//         console.log("Some error occured , while processing your payment");
//         res.status(401).json(err)
//     })
// }



// exports.getEmployeeRecord = async (req,res)=>{
//     const empWorkRecords = await empWorkRecord.find({emp_name : req.body.name, date :{$gt : req.body.date}}).sort({date : -1});
//     res.status(200,"sent all employee record").json(empWorkRecords);
// }

// exports.getEmployeeRecordToGenerateBill = (req,res)=>{
//     res.status(200,"sent specific employee record").json({"Employee":"Bill"});
// }