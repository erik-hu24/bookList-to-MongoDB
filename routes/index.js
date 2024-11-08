var express = require('express');
var router = express();
const fs = require('fs');
const path = require('path');
const { title } = require('process');
let test = [];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HackHub' });
  //res.send('this is a GET method');
});

module.exports = router;
