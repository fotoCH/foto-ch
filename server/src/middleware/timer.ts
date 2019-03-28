import * as Koa from 'koa';

export const timer = async (ctx: Koa.Context, next: () => Promise<any>) => {
  const start = Date.now();

  await next();

  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
};
