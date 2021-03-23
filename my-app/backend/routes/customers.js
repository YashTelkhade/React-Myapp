const router = require('express').Router();
let Customer = require('../models/customer.model');

router.get('/', async (req, res) => {
    try {
        const customers = await Customer.find();
        res.json(customers);
        console.log("res", res.json(customers));
    }
    catch (err) {
        res.send(err);
    }
});
router.get('/:id', async (req, res) => {
    try {
        const customers = await Customer.findById(req.params.id);
        res.json(customers);
       }
    catch (err) {
        res.send(err);
    }
});

router.post('/', async (req, res) => {
    try {
        console.log('add_customer POST', req.body);
        const newCustomer = new Customer({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            gender: req.body.gender
        });
        const c1 = newCustomer.save();
        res.send(c1);
    }
    catch (err) {
        res.send(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        console.log('delete: id')
        const customers = await Customer.findByIdAndDelete(req.params.id);
        // const c1 = await customers.delete();
        res.json(c1);
    }
    catch (err) {
        res.send(err);
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const customers = await Customer.findById(req.params.id);
        customers.first_name= req.body.first_name;
        customers.last_name= req.body.last_name;
        customers.gender= req.body.gender;        
        const c1= await customers.save();
        res.json(c1);
    }
    catch (err) {
        res.send(err);
    }
});



module.exports = router;