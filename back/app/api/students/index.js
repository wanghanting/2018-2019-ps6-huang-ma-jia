const { Router } = require('express');
const { Student } = require('../../models');

// Fonction de recherche
function getStudent(name, items) {
  const myFinalStudent = [];
  for (let a = 0; a < items.length; a++) {
    const firstName = items[a].firstName;
    const lastName = items[a].lastName;
    if ((firstName.substring(0, name.length).localeCompare(name) === 0) || (lastName.substring(0, name.length).localeCompare(name) === 0)) {
      myFinalStudent.push(items[a]);
    }
  }
  return myFinalStudent;
}

const router = new Router();
router.get('/', (req, res) => res.status(200).json(Student.get()));
router.get('/recup/:id', (req, res) => res.status(200).json(getStudent(req.params.id, Student.get())));
router.get('/:studentId', (req, res) => res.status(200).json(Student.getById(req.params.studentId)));
router.delete('/:studentId', (req, res) => res.status(200).json(Student.delete(req.params.studentId)));
router.put('/:studentId', (req, res) => res.status(200).json(Student.update(req.params.studentId, req.body)));


router.post('/', (req, res) => {
  try {
    const student = Student.createStudent(req.body);
    res.status(201).json(student);
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json(err.extra);
    } else {
      res.status(500).json(err);
    }
  }
});

module.exports = router;
