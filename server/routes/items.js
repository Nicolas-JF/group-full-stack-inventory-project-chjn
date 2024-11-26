const express = require('express');
const router = express.Router();
const { Item } = require('../models/item');

router.get('/', async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});
router.get('/:id', async (req, res, next) => {
    try {
      const item = await Item.findByPk(req.params.id);
      if (item) {
        res.send(item);
      } else {
        res.status(404).send('Item not found');
      }
    } catch (error) {
      next(error);
    }
  });
module.exports = router;