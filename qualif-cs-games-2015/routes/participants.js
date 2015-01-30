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

router.get('/:index', function(req, res, next) {

  var index = req.params.index;
  var part = csGames.participants[index];
  var comp = csGames.competitions;

  res.render('participants', {
    title: 'CS Games 2015' ,
    participant: part,
    competitions: comp
  });
});

module.exports = router;
