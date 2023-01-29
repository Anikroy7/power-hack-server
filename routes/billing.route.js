const express = require('express');
const billingController = require('../controller/billing.controller');
const verityJwt = require('../middleware/verifyJwt');


const router = express.Router();

router.route('/billing')
    .post(verityJwt, billingController.createBilling)

router.route('/billing-list')
    .get(verityJwt, billingController.getBillingList)

router.route('/update-billing/:id')
    .patch(billingController.updateBilling)



module.exports = router