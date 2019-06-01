const { Router } = require('express');
const { List } = require('../../models/');
const { User } = require('../../models/');

const router = new Router();
router.get('/queue/', (req, res) => {
  const demo = {
    name: req.query.name,
    password: req.query.password,
  };
  User.findOne(demo, { _id: 0 }, (err, user) => {
    if (user.type === 'etudiant') {
      res.send('pas de pouvoir');
    } else if (user.type === 'entreprise') {
      List.findOne({ id: user.id }, { _id: 0 }, (err2, list) => {
        res.send(list.interviewlist);
      });
    }
  });
});
router.post('/queue/', (req, res) => {
  List.find({ id: req.body.id }, { interviewlist: 1 }, (err, list) => {
    const num = list.length;
    const demo = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      specialty: req.body.specialty,
      email: req.body.email,
      number: num + 1,
    };
    List.update({ id: req.body.id }, { $push: { interviewlist: demo } }, (err2, resInfo) => {
      res.send(resInfo);
    });
  });
});
module.exports = router;
