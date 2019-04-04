import { Contact } from 'shared/lib/contact';
import { contactFactory } from 'shared/lib/testing/factories/contact';

export async function list(): Promise<Contact[]> {
  const contactArray: Contact[] = [];
  contactArray.push(contactFactory.build({ id: 1, name: 'Hans Müller' }));

  return contactArray;
}
