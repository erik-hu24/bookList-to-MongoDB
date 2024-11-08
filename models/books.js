// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

//============================== Tweet Schema========================================
const BooksSchema = new Schema({
    title: { type: String, required: true },                    
    isbn: { type: String, required: true, unique: true },       
    pageCount: Number ,                                
    publishedDate:  Date ,                              
    thumbnailUrl: String ,                             
    shortDescription: String ,                         
    longDescription: String ,                          
    status: { type: String, enum: ['PUBLISH', 'UNPUBLISHED'] }, 
    authors: [{ type: String }],                                
    categories: [{ type: String }]     
});

// Compile model from schema
const BooksModel = mongoose.model("bookstores", BooksSchema);
module.exports = BooksModel;