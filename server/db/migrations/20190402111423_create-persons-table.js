
exports.up = function(knex, Promise) {
  
    return Promise.all([
      knex.schema.createTable('persons', function (table) {
        table.increments(),
        table.integer('GND'),
        table.text('description'),
        table.date('birth_date'),
        table.string('awards'),
        table.string('short_bio')
        //table.foreign('language_id', 'keyname')
      }),
      knex('persons').insert(
        {GND: 101, description: 'some text', birth_date: '2019/11/22', 
         awards: 'Best shot of a cow ever', short_bio: 'Interesting biography'}),
      knex('persons').insert(
        {GND: 102, description: 'other text', birth_date: '2019/01/13', 
         awards: 'Longest exposure time ever', short_bio: 'Boring biography'})
    ])
}

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('persons')
  ])
}
