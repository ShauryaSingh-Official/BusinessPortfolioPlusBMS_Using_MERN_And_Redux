const client = require("../../models/client");
const clientRecord = client.clientRecord;
// const mongoose = require('mongoose')

// { clientName, productIDs, brassProvided, rate, weight, payableAmount, paidAmount, date }

// //   SAME FOR "BrassOrPaymentProvided"
exports.addSaleRecord = (req, res) => {
    const newRecord = new clientRecord(req.body)
    newRecord.save().then(() => res.json('user added!'))
    .catch(err => res.status(400).json('Error: ' + err));;
}


exports.showAllSaleRecords = async(req, res) => {
    const AllSaleRecords = await clientRecord.find().sort({date: -1});
    res.status(200).json(AllSaleRecords);
}











// exports.BrassOrPaymentProvided = (req,res) =>{
//     const newRecord = new clientRecord(req.body)
//     newRecord.save().then(() => res.json('Brass-payment added!'))
//     .catch(err => res.status(400).json('Error: ' + err));;
// }

// exports.showSaleRecord = async (req, res) => {
//     const checkDate =new Date(req.body.date);
//     const clientName = req.body.clientName;
//     const clientSaleRecord = await clientRecord.find( {$and : [{clientName :{$eq : clientName}},{date: { $gte: checkDate }} ]} ).sort({date: -1});
//     res.status(200).json(clientSaleRecord);
// }

// exports.getClientBill = async (req,res)=>{
//     const checkDate =new Date(req.body.date);
//     const clientName = req.body.name;
//     const clientSaleRecord = await clientRecord.find( {$and : [{client_name :{$eq : clientName}},{date: { $gte: checkDate }} ]} ).sort({date: 1});
//     res.status(200).json(clientSaleRecord);
// }