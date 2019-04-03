import { Person } from 'shared/lib/person';
import { list } from './person.service';

describe('#list', () => {
  it('loads all persons', async () => {
    const persons = [
      { id: 1, firstname: 'Peter', lastname: 'Müller', 
      tel: '0313333333', email: 'example@mail.com' },
    ];

    const result: Person[] = await list();
    expect(result).toEqual(persons);
  });
});
