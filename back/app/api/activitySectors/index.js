const { Router } = require('express');
const { ActivitySector } = require('../../models');

const router = new Router();
router.get('/', (req, res) => {
  ActivitySector.find(req.query, { id: 1, _id: 0, name: 1 }, (err, activitySector) => {
    res.send(activitySector);
  });
});
module.exports = router;
