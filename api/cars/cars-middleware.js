var vinValidator = require('vin-validator');

// - Write the following middlewares inside `api/cars/cars-middleware.js`:

//   - `checkCarId` returns a status 404 with a `{ message: "car with id <car id> is not found" }` if the id in `req.params` does not exist in the database.

//   - `checkCarPayload` returns a status 400 with a `{ message: "<field name> is missing" }` if any required field is missing.

//   - `checkVinNumberValid` returns a status 400 with a `{ message: "vin <vin number> is invalid" }` if the vin number is [invalid](https://www.npmjs.com/package/vin-validator).

//   - `checkVinNumberUnique` returns a status 400 with a `{ message: "vin <vin number> already exists" }` if the vin number already exists in the database.
const Cars = require('./cars-model')
const checkCarId = async (req, res, next) => {
  // if the if the id in `req.params` does not exist in the database.
  const car = await Cars.getById(req.params.id)
    if( car === undefined ) {
          res.status(404).json({ 
        message: `car with id ${req.params.id} is not found` 
      })
    } else {
    req.car = car
    next()
  }
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  const {
    vin,
    model,
    mileage,
    make
  } = req.body;

  if (vin === undefined) {
    res.status(400).json({
      message: 'vin is missing'
    })
  } else if (model === undefined) {
    res.status(400).json({
      message: 'model is missing'
    })
  } else if (make === undefined) {
    res.status(400).json({
      message: 'make is missing'
    })
  } else if (mileage === undefined) {
    res.status(400).json({
      message: 'mileage is missing'
    })
  } else {
    next()
  }
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  const isValidVin = vinValidator.validate(req.body.vin)
  if (!isValidVin) {
    res.status(400).json({ 
      message: `vin ${req.body.vin} is invalid`
    });
  } else {
    next()
  } 
}

const checkVinNumberUnique = async (req, res, next) => {
  const allCars = await Cars.getAll()
  const matches = allCars.filter( car => {
    return Number(car.vin) === Number(req.body.vin)
  }).length
 
  const isMatchless = !matches
  isMatchless?next():res.status(400).json({
    message: `vin ${req.body.vin} already exists`
  })

 next()
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}