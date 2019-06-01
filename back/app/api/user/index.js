
const { Router } = require('express');
const { User } = require('../../models');

const router = new Router();
router.get('/', (req, res) => {
  User.findOne(req.query, { _id: 0 }, (err, user) => {
    res.send(user);
  });
});
router.post('/', (req, res) => {
  const check = {
    name: req.body.name,
  };
  User.findOne(check, { _id: 0 }, (errcheck, existed) => {
    if (existed) {
      console.log('existed');
      res.send('username is existed');
    } else {
      User.find({}, { id: 1 }, (err, users) => {
        const userid = users.length + 1;
        const demo = {
          id: userid,
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          type: req.body.type,
        };
        User.create(demo, (err2, resInfo) => {
          res.send(resInfo);
        });
      });
    }
  });
});
module.exports = router;
