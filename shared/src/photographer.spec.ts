import { getDisplayName } from './photographer';
import { photographerFactory } from './testing/factories/photographer';

describe('Photographer', () => {
  describe('getDisplayName', () => {
    it('returns the display name', () => {
      const photographer = photographerFactory.build({
        firstname: 'Bruce',
        lastname: 'Willis'
      });
      expect(getDisplayName(photographer)).toEqual('Bruce Willis');
    });
  });
});
