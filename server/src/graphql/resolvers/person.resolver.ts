import 'reflect-metadata';
import { FieldResolver, Query, Resolver, Root } from 'type-graphql';
import { listNames, listPersons } from '../../services/person.service';
import { Name } from '../types/name.type';
import { Person } from '../types/person.type';

@Resolver(Person)
export class PersonResolver {
  // @ts-ignore
  @Query(returns => [Person])
  public async persons(): Promise<Person[]> {
    return listPersons();
  }

  // @ts-ignore
  @FieldResolver()
  public async names(@Root() person: Person): Promise<Name[]> {
    return listNames(person.id);
  }
}
