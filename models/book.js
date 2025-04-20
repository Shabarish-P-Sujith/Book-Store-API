const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Book title is required"],
        trim: true,
        maxlength: [100, "Title cannot be more than 100 characters"],
    },
    author: {
        type: String,
        required: [true, "Author name is required"],
        trim: true,
    },
    year: {
        type: Number,
        required: [true, "Publication year is required"],
        min: [1000, "Year cannot be less than 1000"],
        max: [new Date().getFullYear(), "Cannot be a Future Year"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
module.exports = mongoose.model('Book', BookSchema);