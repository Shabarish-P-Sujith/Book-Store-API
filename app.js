require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./database/db');
const bookRoutes = require('./routes/book-routes');


// Connect Database
connectDB();

// Middlewares
app.use(express.json());

// routes
app.use("/api/books", bookRoutes);

// Port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
