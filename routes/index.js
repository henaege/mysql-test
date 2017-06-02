var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'x',
  password : 'x',
  database : 'classicmodels' 
});

connection.connect((error)=> {
  if (error) {
    console.log(error.stack);
    return
  } 
  console.log("Connected as id " + connection.threadId);
});

/* GET home page. */
router.get('/', function(req, res, next) {
  var selectQuery = 'SELECT * FROM customers;';
  connection.query(selectQuery, (error, results, fields)=> {
    if (error) throw error;
      
    res.render('index', {results: results});
  })

});

module.exports = router;
