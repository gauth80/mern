const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({

    mail: {
      type : String,
      required: true,
      unique: true,
      trim: true,
      minlength : 6
    },
    password : {
      type : String,
      required: true,
      trim: true,
      minlength : 8
    }
  },
  {
    collection: 'users',
    timestamps : true
  }
);

const User = mongoose.model(null, UserSchema);

module.exports = User;
