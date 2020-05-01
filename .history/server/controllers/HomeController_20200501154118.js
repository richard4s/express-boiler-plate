module.exports = {
    welcome(req, res) {
        return res.status(200).send({
            success: 'Welcome to the home controller'
        })
    }
}