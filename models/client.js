const mongoose = require('mongoose');
const { Schema } = mongoose;

// { clientName, productIDs, brassProvided, rate, weight, payableAmount, paidAmount, date }


const clientSchema = new Schema({
    clientName :{type:String, required:[true,"Please provide client name"]},
    productIDs : {type:String, default : "----"},
    brassProvided : {type:Number, default : 0.0},
    rate :{type:Number, default : 0.0},
    weight : {type:Number, default : 0.0},
    payableAmount : {type:Number , default : 0.0},
    paidAmount : {type:Number, default : 0.0},
    date : {type :Date, default : Date.now}
})
exports.clientRecord = mongoose.model("clientRecord",clientSchema);
// new Date()  ====> get current date