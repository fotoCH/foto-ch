import { Photographer } from 'shared/lib/photographer';
import { list } from './photographer.service';

describe('#list', () => {
  it('loads all photographers', async () => {
    const photographers = [
      { id: 1, firstname: 'Peter', lastname: 'Müller', 
      tel: '0313333333', email: 'example@mail.com', 
      photographerType: 1, genreTypes: '1;2;3' },
    ];

    const result: Photographer[] = await list();
    expect(result).toEqual(photographers);
  });
});
