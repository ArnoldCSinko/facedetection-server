const knex = require("knex");
let connectionConfig = {};
if (process.env.DATABASE_URL) {
	// Heroku config
	connectionConfig = {
		host: process.env.DATABASE_URL,
		ssl: true
	};
} else {
	// Local config
	const host = process.env.DB_HOST;
	const user = process.env.DB_USER;
	const password = process.env.DB_PASSWORD;
	const database = process.env.DB;
	connectionConfig = {
		host: host,
		user: user,
		password: password,
		database: database
	};
}

const db = knex({
	client: "pg",
	connection: connectionConfig
});

module.exports = {
	db
};
