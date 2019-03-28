import * as Koa from 'koa';
import * as proxyquire from 'proxyquire';

describe('Info Controller', () => {
  let provider: { getInfo: (ctx: Koa.Context) => Promise<void> };
  let processStub: any;

  beforeEach(() => {
    proxyquire.noCallThru();

    processStub = { env: {} };

    provider = proxyquire('./info.controller', {
      process: processStub
    });
  });

  describe('#getInfo', () => {
    it('should set the context body to an info object', async () => {
      const ctx: any = {};

      processStub.version = 'NodeVersion';

      await provider.getInfo(ctx);
      expect(ctx.body).toEqual({
        nodeEnv: 'test',
        nodeVersion: 'NodeVersion',
        version: '0.0.0'
      });
    });
  });
});
