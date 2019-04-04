import { Person } from 'shared/lib/person';
import { list } from './person.service';

describe('#list', () => {
  it('loads all persons', async () => {
    const persons = [
      { id: 1, awards: '0313333333', short_bio: 'Some biography' },
    ];

    const result: Person[] = await list();
    expect(result).toEqual(persons);
  });
});
