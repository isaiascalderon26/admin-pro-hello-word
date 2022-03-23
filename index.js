const express = require("express");
require("dotenv").config();

const cors = require("cors");
const { dbConnecction } = require("./database/config");

// create the service the express
const app = express();

//configuration CORS
app.use(cors());

//Lectura y parseoo del body
app.use( express.json());

//DataBase
dbConnecction();

//route
app.use('/post', require('./routes/usuarios'));

app.listen(process.env.PORT, () => {
  console.log("service the run in the port" + 3000);
});
