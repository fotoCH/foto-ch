import 'reflect-metadata';

import { Query, Resolver } from 'type-graphql';
import { list as listPhotographers } from '../../services/photographer.service';
import { Photographer } from '../types/photographer.type';

@Resolver(Photographer)
export class PhotographerResolver {
  // @ts-ignore
  @Query(returns => [Photographer])
  public async photographers(): Promise<Photographer[]> {
    return await listPhotographers();
  }
}
