## Development server

Run `yarn start` for a dev server. Navigate to `http://localhost:4100/`. The server will automatically restarted if you change any of the source files.

Run `yarn dev` like `yarn start` but also execute the unit tests before restarting the server.

## Build

Run `yarn build` to build the project. The build artifacts will be stored in the `dist/` directory.

Run `build:serve` to start a server from the `dist/` directory.

## Running unit tests

Run `yarn test:unit` to execute the unit tests once.

Run `yarn test:unit:watch` like `yarn test:unit` but also execute the unit tests if you change any of the source files.

## Running api tests

Run `yarn test:api` to execute the api tests.

## Generate a coverage report

Run `yarn cov` to generate a coverage report.

## Running tslint

Run `yarn lint` to execute code analysis.

## Running prettier

Run `yarn prettier` to check code formatting.

## DB Stuff
### Links
- [Postgresql Basics (Linux)](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04)
- [Knex Migrations doumentation](https://knexjs.org/#Migrations-CLI)
- [Knex Setup Cheat Sheet (we don't use Express!)](https://gist.github.com/laurenfazah/e0b0033cdc40a313d4710cc04e654556)
- [Knex Commands Cheat Sheet](https://devhints.io/knex)

### Postrges Setup
- Install Postgres on your system
- Create DB user: `$ postgres createuser --interactive`
- Use name "fotochuser" and superuser "y"
- Add system user `$ sudo adduser fotochuser`
- Create dev database: `$ createdb fotochuser`
- Change to postgres user: `postgres psql fotochuser`
- Set dev password for fotochuser to something nice: `ALTER USER fotochuser WITH PASSWORD 'mynicepassword';`
- Quit with `\q` and `exit`

### Knex Setup
- `cp knexfile.js.example knexfile.js`
- change the Passwort and port in your Knexfile to your previously set db-password
- To setup the database, run the migrations `knex migrate:latest`
