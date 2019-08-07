import 'reflect-metadata';

import { Query, Resolver } from 'type-graphql';
import { list as listNames } from '../../services/name.service';
import { Name } from '../types/name.type';

@Resolver(Name)
export class NameResolver {
  // @ts-ignore
  @Query(returns => [Name])
  public async names(): Promise<Name[]> {
    return listNames();
  }
}
