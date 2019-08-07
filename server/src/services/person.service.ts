import { Name } from 'shared/lib/name';
import { Person } from 'shared/lib/person';
import * as Db from '../db';

export async function listPersons(): Promise<Person[]> {
  return Db.knex('persons').select('*');
}

export async function listNames(personId: number): Promise<Name[]> {
  return Db.knex('names')
    .select('*')
    .where({ person_id: personId });
}
