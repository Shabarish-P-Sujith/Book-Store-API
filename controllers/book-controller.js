const Book = require('../models/book')

const getAllBooks = async (req,res) => {
    try {
        const allBooks = await Book.find({});
        if (allBooks?.length > 0) {
            res.status(200).json({
                success: true,
                message: 'Books retrieved successfully',
                data: allBooks
            });
        } else {
            res.status(400).json({
                success: false,
                message: 'Books cannot be retrieved',
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Failed To fetch all the Books",
            error: error.message
        });
    }
}

const getSingleBookById = async (req,res) => {
    const {id} = req.params;
    try {
        
    } catch (error) {
        
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