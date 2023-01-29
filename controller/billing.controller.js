const Billing = require("../models/Billing");


//------------------------ CREATE BILLING---------------------

module.exports.createBilling = async (req, res) => {
    try {
        const { fullName, email, phone, payableAmount } = req.body;
        const newBilling = { fullName, email, phone, payableAmount }
        const billing = new Billing({ ...newBilling })
        await billing.save()
        return res.status(200).json({
            message: 'Billing information added successfully',
            data: billing
        });
    } catch (err) {
        return res.status(500).json({ message: 'Error adding billing information' });
    }
}


//------------------------GET BILLING LIST----------------------- 

module.exports.getBillingList = async (req, res) => {

    try {
        const email = req.decodedEmail;
        const result = await Billing.find({})
        console.log(email);
        if (!email) {
            return res.status(500).json({
                message: "Failed to access data"
            })
        }
        return res.status(200).json({
            message: 'Billing list get successfully',
            data: result
        });
    } catch (err) {
        return res.status(500).json({ message: 'Error adding billing information' });
    }
}


//------------------------UPDATE BILLING-----------------------

module.exports.updateBilling = (req, res, next) => {
    try {
        const { id } = req.params;
        console.log(id);
        return res.status(200).json({
            message: 'Billing information update successfully',
            // data: billing
        });
    } catch (err) {
        return res.status(500).json({ message: 'Fialed to update  billing information' });
    }
}