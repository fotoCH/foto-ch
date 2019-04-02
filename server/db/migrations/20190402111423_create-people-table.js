
exports.up = function(knex, Promise) {
  
    return Promise.all([
      knex.schema.createTable('people', function (table) {
        table.increments(),
        table.integer('GND'),
        table.text('description'),
        table.date('birth_date'),
        table.string('tel'),
        table.string('email')
        //table.foreign('people_type_id', 'keyname')
      }),
      knex('people').insert(
        {GND: 101, description: 'some text', birth_date: '2019/11/22', 
         tel: '0222002002', email: 'test@tail.tom'}),
      knex('people').insert(
        {GND: 102, description: 'other text', birth_date: '2019/01/13', 
         tel: '0311116066', email: 'west@wail.wom'})
    ])
}

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('people')
  ])
}
