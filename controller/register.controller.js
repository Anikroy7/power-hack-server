module.exports.postUser = async (req, res) => {
    try {
        res.status(200).json({
            message: 'successfull'
        })
    } catch (error) {
        res.status(401).json({
            message: 'failed to post'
        })
    }
}