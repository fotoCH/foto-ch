import { Sync as Factory, each } from 'factory.ts';
import { Person } from '../../person';

export const personFactory = Factory.makeFactory<Person>({
  id: each(i => i),
  tel: '0313333333',
  email: 'example@mail.com'
});
