const express = require('express');
const paginationMiddleware = require('../middleware/pagination');
const Order = require('../models/Order');
const router = express.Router();


router.get('/', paginationMiddleware, async (req, res) => {
  const { limit, offset } = req.pagination;

  try {
    const orders = await Order.findAndCountAll({
      limit,
      offset,
    });
    
    res.json({
      totalItems: orders.count,
      totalPages: Math.ceil(orders.count / limit),
      currentPage: parseInt(req.query.page) || 1,
      orders: orders.rows,
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
