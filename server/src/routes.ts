import * as Router from 'koa-router';
import { getInfo } from './controllers/info.controller';

const router = new Router();

// graphql routes are added in app.ts
router.get('/info', getInfo);

export const routes = router.routes();
