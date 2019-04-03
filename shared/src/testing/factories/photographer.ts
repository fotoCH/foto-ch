import { Sync as Factory, each } from 'factory.ts';
import { Photographer } from '../../photographer';

export const photographerFactory = Factory.makeFactory<Photographer>({
  id: each(i => i),
  tel: '0313333333',
  email: 'example@mail.com',
  photographerType: 1,
  genreTypes: '1;2;2'
});
