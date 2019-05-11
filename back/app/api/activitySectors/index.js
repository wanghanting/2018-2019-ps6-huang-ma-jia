const { Router } = require('express');
const { ActivitySector } = require('../../models');

const router = new Router();
router.get('/', (req, res) => {
  ActivitySector.find(req.query, {}, (err, activitySector) => {
    res.send(activitySector);
  });
});


module.exports = router;
