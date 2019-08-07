exports.seed = function(knex, Promise) {
  return knex('persons').insert([
    {
      GND: 101,
      description: 'some text',
      birth_date: '2019/11/22',
      awards: 'Best shot of a cow ever',
      short_bio: 'Interesting biography'
    },
    {
      GND: 102,
      description: 'other text',
      birth_date: '2019/01/13',
      awards: 'Longest exposure time ever',
      short_bio: 'Boring biography'
    }
  ]);
};
