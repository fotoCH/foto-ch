let config = require('./db-mgmt-config.json');
let dbManager = require('knex-db-manager').databaseManagerFactory(config);
let dbName = config.knex.connection.database;
let dbOwner = config.knex.connection.user;

async function run() {
  await dbManager.createDbOwnerIfNotExist();
  console.log(`created db owner ${dbOwner}`);
  await dbManager.createDb(dbName);
  console.log(`created db ${dbName}`);
}

run(dbManager).then(function() {
  process.exit();
});
