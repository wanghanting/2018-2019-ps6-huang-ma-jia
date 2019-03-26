const { Router } = require('express');
const { Ticket } = require('../../models');
const { Student } = require('../../models');

// L'ordre des routes IMPORTENT
const router = new Router();


// Mes routes Test
// router.get('/test', (req, res) => res.status(200).json('okTest'));
// router.get('/testAttach', (req, res) => res.status(200).json(Ticket.getTickets(Student)));

// Routes avec paramètres
// function attachStudent(ticket) {
//   // Récupérer Student et assigner au Ticket
//   var student =  Student.getById(ticket.studentId);
//   // delete ticket.studentId;
//   ticket.student = student;
//   return ticket;
// }

function attachStudent(ticket) {
  const myFinalTicket = []; // Mon tableau de Tickets final ( avc student)
  const myItems = ticket; // Mon Tableau de Tickets
  let myStudents = []; // Tableau de Student

  if (ticket.studentId) {
    for (var b = 0; b < ticket.studentId.length; b++) {
      var student = Student.getById(ticket.studentId[b]);
      myStudents.push(student);
    }
    var ticketFinal = ticket; // Ticket courant
    ticketFinal.student = myStudents; // Ajout des Students
    myFinalTicket.push(ticketFinal); // MAJ du tab de ticket final
    return ticket;
  }
  for (let a = 0; a < myItems.length; a++) {
    for (var b = 0; b < myItems[a].studentId.length; b++) {
      var student = Student.getById(myItems[a].studentId[b]);
      myStudents.push(student);
    }
    var ticketFinal = myItems[a]; // Ticket courant
    ticketFinal.student = myStudents; // Ajout des Students
    myFinalTicket.push(ticketFinal); // MAJ du tab de ticket final
    myStudents = [];
  }

  return ticket;
}

function getStudentTicket(id, items) {
  const myFinalTicket = [];
  for (let a = 0; a < items.length; a++) {
    for (let b = 0; b < items[a].studentId.length; b++) {
      if (items[a].studentId[b] == id) {
        myFinalTicket.push(items[a]);
        // break;
      }
    }
  }
  return myFinalTicket;
}

router.get('/', (req, res) => res.status(200).json(attachStudent(Ticket.get())));
router.get('/recup/:id', (req, res) => res.status(200).json(attachStudent(getStudentTicket(req.params.id, Ticket.get()))));
router.get('/:ticketId', (req, res) => res.status(200).json(attachStudent(Ticket.getById(req.params.ticketId))));
router.delete('/:ticketId', (req, res) => res.status(200).json(Ticket.delete(req.params.ticketId)));
router.put('/:ticketId', (req, res) => res.status(200).json(Ticket.update(req.params.ticketId, req.body)));

router.post('/', (req, res) => {
  try {
    const ticket = Ticket.create(req.body);
    res.status(201).json(attachStudent(ticket));
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json(err.extra);
    } else {
      res.status(500).json(err);
    }
  }
});

module.exports = router;
