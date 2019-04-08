const { Router } = require('express');
const { Internship } = require('../../models');

const router = new Router();
router.get('/', (req, res) => res.status(200).json(Internship.get()));
router.get('/:internshipId', (req, res) => res.status(200).json(Internship.getById(req.params.internshipId)));
router.delete('/:internshipId', (req, res) => res.status(200).json(Internship.delete(req.params.internshipId)));
router.put('/:internshipId', (req, res) => res.status(200).json(Internship.update(req.params.internshipId, req.body)));

module.exports = router;
