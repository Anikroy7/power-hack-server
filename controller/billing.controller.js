const Billing = require("../models/Billing");


//------------------------ CREATE BILLING---------------------

module.exports.createBilling = async (req, res) => {
    try {
        const { fullName, email, phone, payableAmount } = req.body;
        const newBilling = { fullName, email, phone, payableAmount }
        const billing = new Billing({ ...newBilling })
        await billing.save()
        res.status(200).json({
            message: 'Billing information added successfully',
            data: billing
        });
    } catch (err) {
        res.status(500).json({ message: 'Error adding billing information' });
    }
}


//------------------------GET BILLING LIST----------------------- 

module.exports.getBillingList = async (req, res) => {
    try {
        const result = await Billing.find({})
        res.status(200).json({
            message: 'Billing list get successfully',
            data: result
        });
    } catch (err) {
        res.status(500).json({ message: 'Error adding billing information' });
    }
}