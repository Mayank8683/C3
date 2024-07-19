const Review = require('../models/Review');


exports.getReviewsForBook = async (req, res, next) => {
  try {
    const bookId = req.params.bookId;
    const reviews = await Review.find({ bookId }).populate('customerId');
    res.json(reviews);
  } catch (err) {
    next(err);
  }
};
