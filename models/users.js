// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

//============================== Users Schema========================================
const UsersModelSchema = new Schema({
    name: {type:String, required:true},
    username: {type:String, required:true},
    location: String,
    bio: String,
    avatarUrl: {type: String, default: "https://placehold.co/600x400/EEE/31343C"}
});

// Compile model from schema
const UsersModel = mongoose.model("users", UsersModelSchema);
module.exports = UsersModel;


