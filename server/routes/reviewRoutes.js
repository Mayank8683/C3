const express = require('express');
const router = express.Router();
const { getReviewsForBook } = require('../controllers/reviewController');


router.get('/:bookId/reviews', getReviewsForBook);

module.exports = router;
