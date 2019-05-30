const { Router } = require('express');
const { User } = require('../../models');

const router = new Router();
router.post('/', (req, res) => {
  console.log('post请求：参数', req.body);
  res.send('hello');
});
module.exports = router;
