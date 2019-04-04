import 'reflect-metadata';
import { Query, Resolver } from 'type-graphql';
import { list as listContacts } from '../../services/contact.service';
import { Contact } from '../types/contact.type';

@Resolver(Contact)
export class ContactResolver {
  // @ts-ignore
  @Query(returns => [Contact])
  public async contacts(): Promise<Contact[]> {
    return listContacts();
  }
}
