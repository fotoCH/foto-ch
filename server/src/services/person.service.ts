import { Person } from 'shared/lib/person';
import { Name } from 'shared/lib/name';
//import { personFactory } from 'shared/lib/testing/factories/person';
import * as Db from '../db';

export async function listPersons(): Promise<Person[]> {
  
  const promise = new Promise<Person[]>((resolve, reject) => {  
    Db.knex('persons').select("*")
      .then(function(persons) {
        resolve(persons);
        reject(new Error('Something went wrong at the Person List.'));
      })
      .catch(function(){
        new Error('Seems like there is a problem with the select.');
      })
  });
  
  return promise;
}

export async function listNames(personId: number): Promise<Name[]> {
  
  const promise = new Promise<Name[]>((resolve, reject) => {  
    Db.knex('names').select("*").where({person_id: personId})
      .then(function(names) {
        resolve(names);
        reject(new Error('Something went wrong at the Persons Names List.'));
      })
      .catch(function(){
        new Error('Seems like there is a problem with the select.');
      })
  });
  
  return promise;
}