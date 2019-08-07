exports.seed = function(knex, Promise) {
  return knex('names').insert([
    {
      person_id: 1,
      organization_id: 0,
      firstname: 'Laura',
      lastname: 'Palmer',
      title: 'Ms'
    },
    {
      person_id: 2,
      organization_id: 0,
      firstname: 'Audrey',
      lastname: 'Horne',
      title: 'Ms'
    },
    {
      person_id: 1,
      organization_id: 0,
      firstname: 'Lorry',
      lastname: 'Palmer',
      title: 'Ms'
    }
  ]);
};
