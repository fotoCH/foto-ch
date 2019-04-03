import { Photographer } from 'shared/lib/photographer';
import { photographerFactory } from 'shared/lib/testing/factories/photographer';
import * as Db from '../db';
import { Person } from 'shared/lib/person';

export async function list(): Promise<Photographer[]> {
  
  const promise = new Promise<Photographer[]>((resolve, reject) => {
  
    Db.knex('persons').select('*').then(function(persons){
      var resultObject: Photographer[] = [];
      persons.forEach(function (person: Person) {
        var p = photographerFactory.build({ 
          id: person.id, 
          photographerType: 1,
          genreTypes: "12;11;10",
        })
        resultObject.push(p);
      })
      
      resolve(resultObject);
      reject(new Error('Seems like something with the query didn\'t work.'));
    })
  });
  
  return promise;
}
