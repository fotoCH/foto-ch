import { contactFactory } from 'shared/lib/testing/factories/contact';
import { Contact } from 'shared/lib/contact';

export async function list(): Promise<Contact[]> {
  
  var contactArray: Contact[] = [];
  contactArray.push(contactFactory.build({id: 1, name: "Hans Müller"}));
  return contactArray;
}
