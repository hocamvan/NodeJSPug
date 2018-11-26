const express = require('express');
const router = express.Router();
// const multer = require('multer');
// const upload = multer({ dest: 'tmp/' })
// const fs = require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My PUG' });
});

router.get('/coucou-pug', function (req, res, next) {
  res.render('coucou', {sayHello: 'Hello buddy'})
  
})

module.exports = router;
