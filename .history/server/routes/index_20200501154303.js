const HomeController = require('../controllers/HomeController')

module.exports = (app) => {
    app.get('/api', HomeController.welcome);
}