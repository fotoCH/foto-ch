import { Contact } from 'shared/lib/contact';
import { list } from './contact.service';

describe('#list', () => {
  it('loads all contacts', async () => {
    const contacts = [
      {
        id: 1,
        name: 'Peter',
        tel: '0313333333',
        email: 'example@mail.com',
        contactType: 1
      }
    ];

    const result: Contact[] = await list();
    expect(result).toEqual(contacts);
  });
});
