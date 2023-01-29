const express = require('express');
const billingController = require('../controller/billing.controller');


const router = express.Router();

router.route('/billing')
    .post(billingController.createBilling)

router.route('/billing-list')
    .get(billingController.getBillingList)


module.exports = router