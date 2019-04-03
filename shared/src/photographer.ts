export interface Photographer {
  id: number;
  tel: string;
  email: string;
  photographerType: number;
  genreTypes: string;
}

export function getDisplayName(photographer: Photographer): string {
  return `${photographer.tel} ${photographer.email}`;
}
