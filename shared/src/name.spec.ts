import { getDisplayName } from './name';
import { nameFactory } from './testing/factories/name';

describe('Name', () => {
  describe('getDisplayName', () => {
    it('returns the display name', () => {
      const name = nameFactory.build({
        firstname: 'first',
        lastname: 'last'
      });
      expect(getDisplayName(name)).toEqual('first last');
    });
  });
});
