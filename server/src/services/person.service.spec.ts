import { Person } from 'shared/lib/person';
import { listPersons } from './person.service';

fdescribe('#list', () => {
  it('loads all persons', async () => {
    const persons = [
      { id: 1, awards: '0313333333', short_bio: 'Some biography' }
    ];

    const result: Person[] = await listPersons();
    console.log(result);
    // TODO setup db for testing
    expect(result).toEqual(persons);
  });
});
