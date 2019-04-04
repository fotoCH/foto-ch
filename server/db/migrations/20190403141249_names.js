
exports.up = function(knex, Promise) {
  
    return Promise.all([
      knex.schema.createTable('names', function (table) {
        table.increments(),
        table.integer('person_id'),
        table.integer('organization_id'),
        table.string('firstname'),
        table.string('lastname'),
        table.string('title'),
        table.string('addition'),
        table.foreign('person.id', 'person_id') //TODO not yet right
        //table.foreign('organization.id', 'organization_id')
      }),
      knex('names').insert(
        {person_id: 1, organization_id: 0, firstname: 'Laura', lastname: 'Palmer', 
         title: 'Ms'}),
      knex('names').insert(
        {person_id: 2, organization_id: 0, firstname: 'Audrey', lastname: 'Horne', 
         title: 'Ms'}),
      knex('names').insert(
        {person_id: 1, organization_id: 0, firstname: 'Lorry', lastname: 'Palmer', 
         title: 'Ms'})
    ])
}

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('names')
  ])
}
