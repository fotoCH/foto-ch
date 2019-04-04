import { Name } from 'shared/lib/name';
//import { personFactory } from 'shared/lib/testing/factories/person';
import * as Db from '../db';

export async function list(): Promise<Name[]> {
  
  const promise = new Promise<Name[]>((resolve, reject) => {  
    Db.knex('names').select("*")
      .then(function(names) {
        resolve(names);
        reject(new Error('Something went wrong at the Name List.'));
      }).catch(function() {
        new Error('Seems like there is a problem with the select.')
      })
  });
  
  return promise;
}