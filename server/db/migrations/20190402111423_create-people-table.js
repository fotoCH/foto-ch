
exports.up = function(knex, Promise) {
  let createQuery = `CREATE TABLE people(
    id SERIAL PRIMARY KEY NOT NULL,
    tel TEXT,
    email TEXT
  )`
  return knex.raw(createQuery)
};

exports.down = function(knex, Promise) {
  let dropQuery = `DROP TABLE people`
  return knex.raw(dropQuery)
};
