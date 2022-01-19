// DO YOUR MAGIC
const res = require('express/lib/response');
const Cars = require('./cars-model')
const router = require('express').Router();

router.get('/', async (req, res, next) => {
    await Cars.getAll()
    .then(cars => {
        res.json(cars)
    })
    .catch(err => {
        res.status(500).json({ message: 'No cars found'})
    })
})

router.get('/', async (req, res, next) => {
    await Cars.getById(req.params.id)
    .then(car => {
        res.json(car)
    })
    .catch(err => {
        next(err)
    })
})

module.exports = router
