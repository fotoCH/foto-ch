import * as Knex from 'knex';

// tslint:disable-next-line
const config = require('../knexfile');
const env = process.env.NODE_ENV || 'DEV';

export const knex = Knex(config[env]);
