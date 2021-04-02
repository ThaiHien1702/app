const loginRouter = require('./login')


function route(app) {
    app.use('/login', loginRouter)

   

}
module.exports = route