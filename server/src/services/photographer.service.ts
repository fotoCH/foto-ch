import { Photographer } from 'shared/lib/photographer';
import { photographerFactory } from 'shared/lib/testing/factories/photographer';

export async function list(): Promise<Photographer[]> {
  // TODO get data from database
  return [
    photographerFactory.build({ firstname: 'Jakob', lastname: 'Hunziker' }),
    photographerFactory.build({ firstname: 'Paul', lastname: 'Senn' }),
    photographerFactory.build({ firstname: 'Jules', lastname: 'Beck' })
  ];
}
