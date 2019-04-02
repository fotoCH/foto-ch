export interface Photographer {
  id: number;
  firstname: string;
  lastname: string;
}

export function getDisplayName(photographer: Photographer): string {
  return `${photographer.firstname} ${photographer.lastname}`;
}
