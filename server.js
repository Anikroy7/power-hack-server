const app = require('./app');
const port = process.env.PORT || 8080
const colors = require("colors");
const dbConnect = require('./db/db');


dbConnect()
    .then(() => {
        console.log('connect to db successfully'.magenta);
        app.listen(port, () => {
            console.log(`power hack is running at PORT ${port}`.bgCyan);
        })
    }).catch((err) => {
        console.log(err);
    })