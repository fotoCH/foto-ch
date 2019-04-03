export interface Name {
  id: number;
  person_id: number;
  firstname: string;
  lastname: string;
  title: string;
  addition: string;
}

export function getDisplayName(name: Name): string {
  return `${name.firstname} ${name.lastname}`;
}
