import { Sync as Factory, each } from 'factory.ts';
import { Name } from '../../name';

export const nameFactory = Factory.makeFactory<Name>({
  id: each(i => i),
  person_id: 1,
  firstname: 'Hans',
  lastname: 'Zimmmer',
  title: 'xy',
  addition: 'xx'
});
