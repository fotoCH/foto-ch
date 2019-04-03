import * as Koa from 'koa';
import * as json from 'koa-json';
import { Environments, environment } from './configuration';
import { errorHandler } from './middleware/errors';
import { timer } from './middleware/timer';
import { routes } from './routes';
import { routes as graphqlRoutes } from './routes/graphql';

const app = new Koa();

app
  .use(json({ pretty: environment === Environments.Production }))
  .use(timer)
  .use(errorHandler)
  .use(graphqlRoutes)
  .use(routes);

export = app;
