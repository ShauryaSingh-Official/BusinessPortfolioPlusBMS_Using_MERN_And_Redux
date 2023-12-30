const express = require("express");
const routes = express.Router();
const clientController = require('../../controller/admin/client');

routes.post('/addSaleRecord', clientController.addSaleRecord);
// routes.post('/addSaleRecordPayment', clientController.addSaleRecord);
routes.get('/showAllSaleRecords', clientController.showAllSaleRecords);
// routes.get('/showSaleRecord', clientController.showSaleRecord);
// routes.get('/clientBill', clientController.showSaleRecord)

exports.routes = routes;
