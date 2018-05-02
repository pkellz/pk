var express = require('express');
var router = express.Router();
const mongojs = require("mongojs")
const db = mongojs('mongodb://localhost:27017/Jobr',['users'])
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{
    msg:'Email Already Taken'
  });
});



module.exports = router;
