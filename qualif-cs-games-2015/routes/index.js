var express = require('express');
var router = express.Router();
var csGames = require('../config.json');


router.get('/', function(req, res, next) {

  var part = csGames.participants;
  var comp = csGames.competitions;










  res.render('index', {
    title: 'CS Games 2015' ,
    participants: part,
    competitions: comp
  });
});

module.exports = router;
