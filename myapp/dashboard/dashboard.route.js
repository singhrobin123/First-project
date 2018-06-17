
var express = require('express');
var router = express.Router();

router.get('/a', function(req, res){
   res.send('A dashboard module.');
});
router.get('/b', function(req, res){
   res.send('B dashboard module.');
});

module.exports = router;