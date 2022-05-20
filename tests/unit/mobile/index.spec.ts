/*
  @group unit
*/

import { mobile } from '../../../src';

describe('mobile tests', () => {
  describe('isMobileDevice() tests', () => {
    it('should return true if the userAgent string contains mobile', () => {
      const navigator = { userAgent: 'fooMobilebar' } as Navigator;
      expect(mobile.isMobileDevice(navigator)).toEqual(true);
    });
  });
});
