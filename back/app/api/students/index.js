const { Router } = require('express');
const { Student } = require('../../models');

const router = new Router();
router.get('/', (req, res) => res.status(200).json(Student.getWithStudentFilter(req.query)));
router.get('/:studentId', (req, res) => res.status(200).json(Student.getById(req.params.studentId)));


module.exports = router;
