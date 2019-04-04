
exports.up = function(knex, Promise) {
  
    return Promise.all([
      knex.schema.createTable('contacts', function (table) {
        table.increments(),
        table.string('name'),
        table.string('tel'),
        table.string('email'),
        table.string('contact_type')
      }),
      knex('contacts').insert(
        {name: 'Hans Müller', tel: '0112222222', email: 'some@mail.com'}
      ),
      knex('contacts').insert(
        {name: 'Hans Meier', tel: '0212222222', email: 'other@mail.com'}
      )
    ])
}

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('contacts')
  ])
}
