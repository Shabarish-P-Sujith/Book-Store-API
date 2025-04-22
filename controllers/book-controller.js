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
            message: "Failed to fetch all the Books",
            error: error.message
        });
    }
}

const getSingleBookById = async (req,res) => {
    try {
        const singleBookId = req.params.id;
        const singleBook = await Book.findById(singleBookId);

        if (!singleBook) {
            return res.status(404).json({
                success: false,
                message: 'Book not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Book retrieved successfully',
            data: singleBook
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch the Book",
            error: error.message
        });
    }
}

const addNewBook = async (req,res) => {
    try {
        const newBookFormData = req.body;
        const newlyCreatedBook = await Book.create(newBookFormData);
        
        res.status(201).json({
            success: true,
            message: "Book created successfully",
            data: newlyCreatedBook,                
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Failed to create the Book",
            error: error.message
        });
    }
}

const updateSingleBookById = async (req,res) => {
    try {
        const updatedBookFormData = req.body;
        const updateBookId = req.params.id;
        const updateBook = await Book.findByIdAndUpdate(updateBookId, updatedBookFormData, {
            new: true
        });
        
        if (!updateBook) {
            return res.status(404).json({
                success: false,
                message: 'Book not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Book updated successfully',
            data: updateBook
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to update the Book",
            error: error.message
        });
    }
}

const deleteSingleBookById = async (req,res) => {
    try {
        const deleteBookId = req.params.id;
        const deleteBook = await Book.findByIdAndDelete(deleteBookId);
        
        if (!deleteBook) {
            return res.status(404).json({
                success: false,
                message: 'Book not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Book deleted successfully',
            data: deleteBook
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to delete the Book",
            error: error.message
        });
    }
}

module.exports = { getAllBooks, getSingleBookById, addNewBook, updateSingleBookById, deleteSingleBookById };