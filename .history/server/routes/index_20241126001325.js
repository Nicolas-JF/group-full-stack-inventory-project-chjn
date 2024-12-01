const express = require("express");
const router = express.Router();

// different model routers
router.use('/sauces', require('./sauces'));

router.get('/', async (req, res) => {
    try {
      const sauces = await Sauce.findAll();
      res.json(sauces);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch sauces' });
    }
  });
  
  router.get('/:id', async (req, res) => {
      try {
        const sauce = await Sauce.findByPk(req.params.id);
        if (sauce) {
          res.json(sauce);
        } else {
          res.status(404).json({ error: 'Sauce not found' });
        }
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch sauce' });
      }
    });

module.exports = router;
