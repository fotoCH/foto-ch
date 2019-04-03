import 'reflect-metadata';
import { Query, Resolver, FieldResolver, Root } from 'type-graphql';
import { listPersons as listPersons } from '../../services/person.service';
import { listNames as listNames } from '../../services/person.service';
import { Person } from '../types/person.type';

@Resolver(Person)
export class PersonResolver {
  // @ts-ignore
  @Query(returns => [Person])
  public async person(): Promise<Person[]> {
    return listPersons();
  }
  
  // @ts-ignore
  @FieldResolver()
  async names(@Root() person: Person) {
    return listNames(person.id);
  }
  
}