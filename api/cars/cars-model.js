const db = require('../../data/db-config')

const getAll = () => {
  // DO YOUR MAGIC
  return db('cars')
}

const getById = (id) => {
  // DO YOUR MAGIC
  return db('cars')
    .where({'car_id': id })
    .first()
}

const create = async (car) => {
  // DO YOUR MAGIC
  await db('cars').insert(car)
  
  const newCar = db('cars')
    .where('vin', car.vin)
    .first();
  return getById(newCar)
}

module.exports = {
  getAll,
  getById,
  create
}