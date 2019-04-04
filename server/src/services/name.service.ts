import { Name } from 'shared/lib/name';
import * as Db from '../db';

export async function list(): Promise<Name[]> {
  const promise = new Promise<Name[]>((resolve, reject) => {
    Db.knex('names')
      .select('*')
      .then(names => {
        resolve(names);
        reject(new Error('Something went wrong at the Name List.'));
      });
  });

  return promise;
}
