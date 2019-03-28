import { timer } from './timer';

describe('Timer', () => {
  it('#timer should set X-Response-Time header', async () => {
    const ctx: any = { set: jasmine.createSpy() };
    const next: any = jasmine.createSpy();

    await timer(ctx, next);
    expect(ctx.set).toHaveBeenCalledWith(
      'X-Response-Time',
      jasmine.stringMatching(/\d+ms/)
    );
  });
});
