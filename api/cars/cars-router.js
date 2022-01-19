// DO YOUR MAGIC
const Cars = require('./cars-model')
const router = require('express').Router();
const md = require('./cars-middleware')

router.get('/', async (req, res, next) => {
    await Cars.getAll()
    .then(cars => {
        res.json(cars)
    })
    .catch(err => {
        res.status(500).json({ message: 'No cars found'})
    })
})

router.get('/:id', md.checkCarId, async (req, res, next) => {
  res.json(req.car)
})

router.post('/', md.checkCarPayload, md.checkVinNumberUnique, md.checkVinNumberValid, async (req, res, next) => {
    const car = Cars.create(req.body);
    res.json(car);
})

module.exports = router
