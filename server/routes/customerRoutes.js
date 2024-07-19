const express = require('express');
const { validateCreateCustomer } = require('../middleware/validation');
const paginationMiddleware = require('../middleware/pagination');
const Customer = require('../models/Customer');
const router = express.Router();


router.get('/', paginationMiddleware, async (req, res) => {
  const { limit, offset } = req.pagination;

  try {
    const customers = await Customer.findAndCountAll({
      limit,
      offset,
    });
    
    res.json({
      totalItems: customers.count,
      totalPages: Math.ceil(customers.count / limit),
      currentPage: parseInt(req.query.page) || 1,
      customers: customers.rows,
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});


router.post('/', validateCreateCustomer, async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newCustomer = await Customer.create({ name, email, password });
    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
