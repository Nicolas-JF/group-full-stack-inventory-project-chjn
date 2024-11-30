const express = require('express');
const router = express.Router();
const { Item } = require('../models/item');
const { check, validationResult } = require('express-validator');

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
  // POST request to add a new item
  router.post('/', 
    [
      check('name').not().isEmpty().trim()
    ],
    async (req, res)=> {
      const errors = validationResult(req);
      if(!errors.isEmpty()){
        res.json({error: errors.array()});
      }
      else{
        const result = await Item.create(req.body);
        res.send(result).json();
      }
  });

// PUT method
router.put('/:id', async(req, res)=>{
  const result = await Item.update(req.body, {
    where: {
      id: req.params.id
    }
  }); 
  res.send(result).json();
});


// Delete Method
router.delete('/:id', async (req, res)=>{
  const result = await Item.findByPk(req.params.id);
  await result.destroy();
  res.send(result).json();
});
module.exports = router;