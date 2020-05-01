module.exports = (app) => {
    app.get('/api', (req, res, next) => {
        res.status(200).send({
            message: 'Grocery store test route',
        })
    });
}