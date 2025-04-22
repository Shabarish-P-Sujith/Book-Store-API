const Book = require('../models/book')

const getAllBooks = async (req,res) => {
    try {
        const allBooks = await Book.find({});
            res.status(200).json({
                success: true,
                message: 'Books retrieved successfully',
                data: allBooks
            });
    } catch (error) {
        res.status(500).json({
            message: "Failed To fetch all the Books",
            error: error.message
        });
    }
}

const getSingleBookById = async (req,res) => {
    try {
        const singleBookId = req.params.id;
        const singleBook = await Book.findById(singleBookId);
            res.status(200).json({
                success: true,
                message: 'Book retrieved successfully',
                data: singleBook
            });
    } catch (error) {
        res.status(500).json({
            message: "Failed To fetch the Book",
            error: error.message
        });
    }
}

const addNewBook = async (req,res) => {
    try {
        const newBookFormData = req.body;
        const newlyCreatedBook = await Book.create(newBookFormData);
        if (newBookFormData) {
            res.status(201).json({
                success: true,
                message: "Book created successfully",
                data: newlyCreatedBook,                
            });
        }
    } catch (error) {
        console.log(error);
    }
}

const updateSingleBookById = async (req,res) => {
    
}

const deleteSingleBookById = async (req,res) => {
    
}

module.exports = { getAllBooks, getSingleBookById, addNewBook, updateSingleBookById, deleteSingleBookById };