import { Sync as Factory, each } from 'factory.ts';
import { Photographer } from '../../photographer';

export const photographerFactory = Factory.makeFactory<Photographer>({
  id: each(i => i),
  firstname: 'Jakob',
  lastname: 'Hunziker'
});
