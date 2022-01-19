const req = require('express/lib/request')
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
  const [car_id] = await db('cars')
    .insert(car)
  return getById(car_id)
}

module.exports = {
  getAll,
  getById,
  create
}