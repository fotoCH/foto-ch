exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('persons', function(table) {
      table.increments(),
        table.integer('GND'),
        table.text('description'),
        table.date('birth_date'),
        table.string('awards'),
        table.string('short_bio');
      //table.foreign('language_id', 'keyname')
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTableIfExists('persons')]);
};
