import { Sync as Factory, each } from 'factory.ts';
import { Contact } from '../../contact';

export const contactFactory = Factory.makeFactory<Contact>({
  id: each(i => i),
  name: 'Bruce Willis',
  tel: '0313333333',
  email: 'example@mail.com',
  contactType: 1
});
