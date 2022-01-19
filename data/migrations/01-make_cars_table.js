exports.up = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.createTable('cars', table => {
    table.increments('car_id', 256) // createes a key id column
    table.string('vin', 256).unique().notNullable()
    table.string('make', 256).notNullable()
    table.string('model', 256).notNullable()
    table.decimal('mileage').notNullable()
    table.string('title', 256)
    table.string('transmission', 256)
  })
};

exports.down = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.dropTableIfExists('cars')
};
