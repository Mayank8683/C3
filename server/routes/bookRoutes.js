const express = require('express');
const { validateCreateBook } = require('../middleware/validation');
const paginationMiddleware = require('../middleware/pagination');
const Book = require('../models/Book');
const router = express.Router();


router.get('/', paginationMiddleware, async (req, res) => {
  const { limit, offset } = req.pagination;

  try {
    const books = await Book.findAndCountAll({
      limit,
      offset,
    });
    
    res.json({
      totalItems: books.count,
      totalPages: Math.ceil(books.count / limit),
      currentPage: parseInt(req.query.page) || 1,
      books: books.rows,
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});


router.post('/', validateCreateBook, async (req, res) => {
  const { title, author } = req.body;

  try {
    const newBook = await Book.create({ title, author });
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
