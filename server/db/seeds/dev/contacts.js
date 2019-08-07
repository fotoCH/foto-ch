exports.seed = function(knex, Promise) {
  return knex('contacts').insert([
    {
      name: 'Hans Müller',
      tel: '0112222222',
      email: 'some@mail.com'
    },
    {
      name: 'Hans Meier',
      tel: '0212222222',
      email: 'other@mail.com'
    }
  ]);
};
