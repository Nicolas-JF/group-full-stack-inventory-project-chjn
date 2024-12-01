const express = require('express');
const router = express.Router();
const { Item } = require('../models');

router.get('/', async (req, res) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch items' });
  }
});
router.get('/:id', async (req, res) => {
    try {
      const item = await Item.findByPk(req.params.id);
      if (item) {
        res.json(item);
      } else {
        res.status(404).json({ error: 'Item not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch item' });
    }
  });
module.exports = router;