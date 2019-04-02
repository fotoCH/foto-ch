import { errorHandler } from './errors';

describe('#errorHandler', () => {
  it('calls the next middleware', async () => {
    const ctx: any = {};
    const next = jasmine.createSpy();

    await errorHandler(ctx, next);

    expect(next).toHaveBeenCalled();
  });

  it('responds with a system error if a general error is thrown', async () => {
    const error: any = new Error();
    const ctx: any = {};
    const next = jasmine.createSpy();
    next.and.throwError(error);

    await errorHandler(ctx, next);

    expect(ctx.body).toEqual({
      name: 'SystemError',
      code: 50000,
      message: 'Unexpected error'
    });
  });
});
