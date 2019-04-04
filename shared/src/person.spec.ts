import { getDisplayName } from './person';
import { personFactory } from './testing/factories/person';

describe('Person', () => {
  describe('getDisplayName', () => {
    it('returns the display name', () => {
      const person = personFactory.build({
        id: 1,
        short_bio: '1@m.com'
      });
      expect(getDisplayName(person)).toEqual('1 1@m.com');
    });
  });
});
