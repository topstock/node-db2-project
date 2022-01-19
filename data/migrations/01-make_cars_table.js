exports.up = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.createTable('cars', table => {
    table.increments('car_id') // createes a key id column
    table.string('vin').notNullable().unique()
    table.string('make').notNullable()
    table.string('model').notNullable()
    table.decimal('mileage').notNullable()
    table.string('title')
    table.string('transmission')
  })
};

exports.down = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.dropTableIfExists('cars')
};
