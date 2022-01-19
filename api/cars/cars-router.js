// DO YOUR MAGIC
const res = require('express/lib/response');
const Cars = require('./cars-model')
const router = require('express').Router();

router.get('/', (req, res)) => {
    Cars.getAll()
    .then(cars => {
        res.json(cars)
    })
    .catch(err => {
        res.status(500).json({ message: 'No cars found'})
    })
}
