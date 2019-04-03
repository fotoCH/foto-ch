export interface Person {
  id: number;
  tel: string;
  email: string;
}

export function getDisplayName(person: Person): string {
  return `${person.id} ${person.email}`;
}
