/*
  @group e2e
*/

import * as Utils from '@devshareacademy/common-game-utils';

describe('@devshareacademy/common-game-utils', () => {
  it('should be defined when imported', () => {
    expect(Utils).toBeDefined();
  });

  it('should expose a property called array', () => {
    expect(Utils.array).toBeDefined();
  });

  it('should expose a property called link', () => {
    expect(Utils.link).toBeDefined();
  });

  it('should expose a property called mobile', () => {
    expect(Utils.mobile).toBeDefined();
  });

  it('should expose a property called random', () => {
    expect(Utils.random).toBeDefined();
  });

  it('should expose a property called storage', () => {
    expect(Utils.storage).toBeDefined();
  });
});
