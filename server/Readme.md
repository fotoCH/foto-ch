
## DB Stuff
### Links
- [Postgresql Basics (Linux)](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04)
- [Knex Setup Cheat Sheet (we don't use Express!)](https://gist.github.com/laurenfazah/e0b0033cdc40a313d4710cc04e654556)
- [Knex Commands Cheat Sheet](https://devhints.io/knex)

### Postrges Setup
- Install Postgres on your system
- Create DB user: `$ sudo -u postgres createuser --interactive` 
- Use name "fotochuser" and superuser "y"
- Add system user `$ sudo adduser fotochuser`
- Create dev database: `$ createdb fotochuser`
- Change to postgres user: `sudo -u postgres psql fotochuser`
- Set dev password for fotochuser to something nice: `ALTER USER fotochuser WITH PASSWORD 'mynicepassword';`
- Quit with `\q` and `exit`

### Knex Setup
- `cp knexfile.js.example knexfile.js`
- change the Passwort and port in your Knexfile to your previously set db-password
- To setup the database, run the migrations `knex migrate:latest`
