var express = require('express');
var router = express.Router();

/* GET information page. */
router.get('/information', function(req, res, next) {
    res.render('information');
});

router.get('/information', function(req, res, next) {
    res.render('information');
});

router.get('/preventions', function(req, res, next) {
    res.render('preventions');
});

router.get('/treatments', function(req, res, next) {
    res.render('treatments');
});

module.exports = router;