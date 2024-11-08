// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

//============================== Tweet Schema========================================
const TweetsSchema = new Schema({
    content: {type:String, required:true},
    imageUrl: String,
    author: { 
        // users model as a foreign key
        type: Schema.Types.ObjectId, 
        ref:'users',
        require:true

        // name: {type:String, required:true},
        // username: {type:String, required:true},
        // location: String,
        // bio: String,
        // avatarUrl: {type:String, default:"https://placehold.co/600x400/EEE/31343C"}
    },
    createdAt: {type: Date, required:true, default: Date.now}
});

// Compile model from schema
const TweetModel = mongoose.model("tweets", TweetsSchema);
module.exports = TweetModel;