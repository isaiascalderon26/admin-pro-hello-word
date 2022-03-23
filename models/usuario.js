const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  image: {type: String},
  tag: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

UserSchema.method('toJSON', function(){
  const { _V, id, ...Object} = this.toObject();
  
  //Object.uid = _id
  return Object;

})

module.exports = model('Usuario', UserSchema)