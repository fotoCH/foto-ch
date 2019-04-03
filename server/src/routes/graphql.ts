import 'reflect-metadata';

import * as graphqlHTTP from 'koa-graphql';
import * as Router from 'koa-router';
import { buildSchema } from 'type-graphql';
import { PhotographerResolver } from '../graphql/resolvers/photographer.resolver';
import { PersonResolver } from '../graphql/resolvers/person.resolver';
import { NameResolver } from '../graphql/resolvers/name.resolver';

const router = new Router();

async function bootstrap(): Promise<any> {
  const graphQLschema = await buildSchema({
    resolvers: [PhotographerResolver, PersonResolver, NameResolver ]
  });

  router.all(
    '/graphql',
    graphqlHTTP({
      schema: graphQLschema,
      graphiql: true
    })
  );
}

bootstrap();

export const routes = router.routes();
