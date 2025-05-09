const express = require('express');
const { 
    getAllBooks, getSingleBookById, addNewBook, updateSingleBookById, deleteAllBooks, deleteSingleBookById 
} = require('../controllers/book-controller');

// create Express Router
const router = express.Router();

// define routes
router.get('/get', getAllBooks);
router.get('/get/:id', getSingleBookById);
router.post('/add', addNewBook);
router.put('/update/:id', updateSingleBookById);
router.delete('/delete', deleteAllBooks);
router.delete('/delete/:id', deleteSingleBookById);

module.exports = router;