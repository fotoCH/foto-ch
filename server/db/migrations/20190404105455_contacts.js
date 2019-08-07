exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('contacts', function(table) {
      table.increments(),
        table.string('name'),
        table.string('tel'),
        table.string('email'),
        table.string('contact_type');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTableIfExists('contacts')]);
};
