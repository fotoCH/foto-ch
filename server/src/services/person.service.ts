import { Person } from 'shared/lib/person';
import { Name } from 'shared/lib/name';
//import { personFactory } from 'shared/lib/testing/factories/person';
import * as Db from '../db';

export async function listPersons(): Promise<Person[]> {
  
  const personPromise = new Promise<Person[]>((resolve, reject) => {  
    Db.knex('persons').select("*")
      .then(function(persons) {
        resolve(persons);
        reject(new Error('Seems like there is a problem with the select.'));
        console.log(persons);
      })
      .catch(function(){
        console.log("weeee");
      })
      
      /*Db.knex('persons')
        .leftJoin('names', 'persons.id', 'names.person_id')
        .select([
          'persons.id as id',
          'persons.tel as tel',
          'persons.email as email'
        ])
        .groupBy('persons.id')
        .then(function(persons) {
          resolve(persons);
          console.log(persons);
          reject(new Error('Seems like there is a problem with the select.'));
        })*/
  });
  
  return personPromise;
}

export async function listNames(personId: number): Promise<Name[]> {
  
  const promise = new Promise<Name[]>((resolve, reject) => {  
    Db.knex('names').select("*").where({person_id: personId})
      .then(function(names) {
        resolve(names);
        console.log(names);
        reject(new Error('Seems like there is a problem with the select.'));
      })
  });
  
  return promise;
}