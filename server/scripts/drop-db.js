let config = require('./db-mgmt-config.json');
let dbManager = require('knex-db-manager').databaseManagerFactory(config);
let dbName = config.knex.connection.database;

async function run() {
  await dbManager.dropDb(dbName);
  console.log(`db ${dbName} dropped`);
}

run(dbManager).then(function() {
  process.exit();
});
