const mongoose = require('mongoose');
const { Schema } = mongoose;

// // ONLY  "work_rs_per_unit" UPDATEABLE
const employeeSchema = new Schema({
    workerName : {type : String, required :true, unique :[true,"Employee Name :  must be unique"]},
    dept : {type : String, required : true},
    productId : {type : String, default: "Common"},
    rsOfProction : {type : Number, required : true},
})


exports.employeeRecord = mongoose.model("employeeRecord", employeeSchema);
const employeeWorkSchema = new Schema({
    workerName : {type : String, required :true},
    productId : {type : String, default:"----"},
    weightHrsUnits : {type : Number , default:0.0},
    totalWorkAmt : {type :Number, default : 0.0},
    paidAmt : {type :Number, default : 0.0},
    date : {type: Date, default : Date.now}
})

exports.employeeRecord = mongoose.model('employeeRecord',employeeSchema);
exports.employeeWorkRecord = mongoose.model("employeeWorkRecord",employeeWorkSchema);