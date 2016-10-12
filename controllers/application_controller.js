var express = require('express');
var router = express.Router();
var models = require('../models')


router.get('/', function (req, res) {

    console.log("hello");


    models.burgers1.findAll().then(function (burgers) {

        var hamburgers = burgers;

        res.render('index', {hamburgers: hamburgers});

        // return res.json(burgers);

    })


});

router.post('/create', function (req, res) {



    models.burgers1.create({
        burger_name: req.body.burger,
        devouted: false
    })

    res.redirect('./');

})

router.put('/update', function (req, res) {

    console.log(req.body.id);
    models.burgers1.update(
        {
         devoured:true
        },
        {
            where:{id:req.body.id},
        }
        );

    res.redirect('./')
})

module.exports = router;