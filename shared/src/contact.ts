export interface Contact {
  id: number;
  name: string;
  tel: string;
  email: string;
  contactType: number;
}

export function getDisplayName(contact: Contact): string {
  return `${contact.tel} ${contact.email}`;
}
