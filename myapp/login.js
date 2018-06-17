
var express = require('express');
var router = express.Router();

router.get('/a', function(req, res){
   res.send('A login module.');
});
router.get('/b', function(req, res){
   res.send('B login module.');
});

module.exports = router;