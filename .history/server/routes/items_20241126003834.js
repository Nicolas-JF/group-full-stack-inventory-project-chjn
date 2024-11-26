const express = require('express');
const router = express.Router();
const { Item } = require('../models');

// GET all items
router.get('/', async (req, res) => {
  try {
    const items = await Item.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch items' });
  }
});

module.exports = router;