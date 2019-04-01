const { Router } = require('express');
const { MiniCountry } = require('../../models');

const router = new Router();
router.get('/', (req, res) => res.status(200).json(MiniCountry.get()));
router.get('/:miniMountryId', (req, res) => res.status(200).json(MiniCountry.getById(req.params.miniMountryId)));
router.delete('/:miniMountryId', (req, res) => res.status(200).json(MiniCountry.delete(req.params.miniMountryId)));
router.put('/:miniMountryId', (req, res) => res.status(200).json(MiniCountry.update(req.params.miniMountryId, req.body)));


router.post('/', (req, res) => {
  try {
    const miniCountry = MiniCountry.create(req.body);
    res.status(201).json(miniCountry);
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json(err.extra);
    } else {
      res.status(500).json(err);
    }
  }
});

module.exports = router;
