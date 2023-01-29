const express = require('express');
const billingController = require('../controller/billing.controller');
const verifyJwt = require('../middleware/verifyJwt');


const router = express.Router();

router.route('/billing')
    .post(verifyJwt, billingController.createBilling)

router.route('/billing-list')
    .get(verifyJwt, billingController.getBillingList)

router.route('/update-billing/:id')
    .patch(verifyJwt, billingController.updateBilling)

router.route('/delete-billing/:id')
    .delete(verifyJwt, billingController.deleteBilling)

module.exports = router