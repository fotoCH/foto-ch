import { getDisplayName } from './contact';
import { contactFactory } from './testing/factories/contact';

describe('Contact', () => {
  describe('getDisplayName', () => {
    it('returns the display name', () => {
      const contact = contactFactory.build({
        name: 'Bruce Willis',
      });
      expect(getDisplayName(contact)).toEqual('Bruce Willis');
    });
  });
});
