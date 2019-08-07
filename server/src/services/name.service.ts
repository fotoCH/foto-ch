import { Name } from 'shared/lib/name';
import * as Db from '../db';

export async function list(): Promise<Name[]> {
  return Db.knex('names').select('*');
}
