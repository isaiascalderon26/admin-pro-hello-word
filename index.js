const express = require('express')
require('dotenv').config();

const cors = require('cors')
const {dbConnecction } = require('./database/config')

// create the service the express
const app = express();

//configuration CORS
app.use(cors());

//DataBase
dbConnecction();

//route
app.get('/', (req, res) => {

    res.json({
        
        ok: 201,
        msg: 'ok'
    })

});

app.listen(process.env.PORT, () => {
    console.log('service the run in the port'+ 3000); 
})

