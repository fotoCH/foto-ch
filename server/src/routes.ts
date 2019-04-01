import 'reflect-metadata';

import * as graphqlHTTP from 'koa-graphql';
import * as Router from 'koa-router';
import { buildSchema } from 'type-graphql';
import { getInfo } from './controllers/info.controller';
import { PhotographerResolver } from './graphql/resolvers/photographer.resolver';

const router = new Router();

// TODO move to separate file
async function bootstrap(): Promise<any> {
  const graphQLschema = await buildSchema({
    resolvers: [PhotographerResolver]
  });

  router.get('/info', getInfo).all(
    '/graphql',
    graphqlHTTP({
      schema: graphQLschema,
      graphiql: true
    })
  );
}

bootstrap();

export const routes = router.routes();
