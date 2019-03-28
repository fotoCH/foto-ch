import * as Koa from 'koa';
import { errorReporter } from '../configuration';

export const errorHandler = async (
  ctx: Koa.Context,
  next: () => Promise<any>
) => {
  try {
    await next();
  } catch (error) {
    ctx.status = error.status || 500;
    ctx.body = error.body || {
      name: 'SystemError',
      code: 50000,
      message: 'Unexpected error'
    };
    errorReporter(error);
  }
};
