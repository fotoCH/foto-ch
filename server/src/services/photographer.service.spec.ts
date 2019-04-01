import { Photographer } from 'shared/lib/photographer';
import { list } from './photographer.service';

describe('#list', () => {
  it('loads all photographers', async () => {
    const photographers = [
      { id: 0, firstname: 'Jakob', lastname: 'Hunziker' },
      { id: 1, firstname: 'Paul', lastname: 'Senn' },
      { id: 2, firstname: 'Jules', lastname: 'Beck' }
    ];

    const result: Photographer[] = await list();
    expect(result).toEqual(photographers);
  });
});
