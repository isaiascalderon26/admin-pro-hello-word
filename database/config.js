const mongoose = require("mongoose");
require('dotenv').config();
const dbConnecction = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('DB Online');

  } catch (error) {
      console.log(error);
      throw new Error('Error a la Hora de inciar la BD ver logs')
  }
};

module.exports = {
    dbConnecction
}
