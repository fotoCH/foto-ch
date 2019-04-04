import { Name } from 'shared/lib/name';
import { Person } from 'shared/lib/person';
import * as Db from '../db';

export async function listPersons(): Promise<Person[]> {
  const promise = new Promise<Person[]>((resolve, reject) => {
    Db.knex('persons')
      .select('*')
      .then(persons => {
        resolve(persons);
        reject(new Error('Something went wrong at the Person List.'));
      });
  });

  return promise;
}

export async function listNames(personId: number): Promise<Name[]> {
  const promise = new Promise<Name[]>((resolve, reject) => {
    Db.knex('names')
      .select('*')
      .where({ person_id: personId })
      .then(names => {
        resolve(names);
        reject(new Error('Something went wrong at the Persons Names List.'));
      });
  });

  return promise;
}
