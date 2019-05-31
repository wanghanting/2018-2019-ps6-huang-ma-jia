const { Router } = require('express');
const { Activity } = require('../../models');

const router = new Router();
router.post('/', (req, res) => {
  const demo = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    specialty: req.body.specialty,
  };
  Activity.update({ id: req.body.id }, { $push: { enrollment: demo } }, (err, activitySector) => {
    res.send(activitySector);
  });
});
module.exports = router;
