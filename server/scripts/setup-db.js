const util = require('util');
const exec = util.promisify(require('child_process').exec);
let config = require('./db-mgmt-config.json');
let dbManager = require('knex-db-manager').databaseManagerFactory(config);
let dbName = config.knex.connection.database;
let dbOwner = config.knex.connection.user;

async function run() {
  await dbManager.createDbOwnerIfNotExist();
  console.log(`created db owner ${dbOwner}`);

  try {
    await dbManager.dropDb(dbName);
    console.log(`droped db ${dbName}`);
  } catch (e) {
    console.log(e);
  }

  await dbManager.createDb(dbName);
  console.log(`created db ${dbName}`);

  console.log('migrate db...');
  let result = await exec('yarn knex migrate:latest');
  console.log(result.stdout);
  console.log(result.stderr);

  console.log('load seed data...');
  result = await exec('yarn knex seed:run');
  console.log(result.stdout);
  console.log(result.stderr);
}

run().then(function() {
  process.exit();
});
