import { Name } from 'shared/lib/name';
import { list } from './name.service';

describe('#list', () => {
  it('loads all names', async () => {
    const names: Name[] = [
      {
        id: 1,
        person_id: 1,
        firstname: 'Peter',
        lastname: 'Müller',
        title: '222',
        addition: '222'
      }
    ];

    const result: Name[] = await list();
    expect(result).toEqual(names);
  });
});
