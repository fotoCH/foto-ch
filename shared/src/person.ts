export interface Person {
  id: number;
  awards: string;
  short_bio: string;
}

export function getDisplayName(person: Person): string {
  return `${person.id} ${person.short_bio}`;
}
