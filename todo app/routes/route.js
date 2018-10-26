const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');

//retriving contacts 
router.post('/getUser',(req, res, next)=>{
    Contact.findOne({email: req.body.email,password: req.body.password}, function(err, result){
        if(err)
        {
            res.json(err);
        }
        else{
             res.json(result);
        }
    })
});

// for sign up

router.post('/getSign',(req, res, next)=>{
    Contact.findOne({name: req.body.name,password: req.body.password,email: req.body.email,PEC_ID: req.body.PEC_ID,phone: req.body.phone,cnic: req.body.cnic }, function(err, result){
        if(err)
        {
            res.json(err);
        }
        else{
             res.json(result);
        }
    })
});


router.get('/contacts',(req, res, next)=>{
    Contact.find(function(err, contacts){
        res.json(contacts);
    })
});
router.get('/contacts',(req, res, next)=>{
    Contact.find(function(err, contacts){
        res.json(contacts);
    })
});

//add contacts
router.post('/contact',(req, res, next)=>{
    let newContact = new Contact({
        name: req.body.name,
        PEC_ID: req.body.PEC_ID,
        password: req.body.password,
        phone: req.body.phone,
        email: req.body.email,
        cnic: req.body.cnic,
        role: req.body.role
    });
    newContact.save((err,contact)=>{
        if(err)
        {
            res.json({msg: 'Failed to add contact'});
        }
        else{
            res.json({msg: 'Contact added Successfully'});;
        }
    });
});

//delete contacts
router.delete('/contact/:id',(req, res, next)=>{
    Contact.remove({_id: req.params.id}, function(err, result){
        if(err)
        {
            res.json(err);
        }
        else{
             res.json(result);
        }
    });

});    
module.exports = router;