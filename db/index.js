const knex = require("knex");
let connectionConfig = {};
if (process.env.DATABASE_URL) {
	// Heroku config
	connectionConfig = {
		client: "pg",
		connection: {
			connectionString: process.env.DATABASE_URL,
			ssl: true
		}
	};
} else {
	// Local Dev config
	connectionConfig = {
		client: "pg",
		connection: {
			host: process.env.DB_HOST,
			user: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			database: process.env.DB
		}
	};
}

const db = knex(connectionConfig);

module.exports = {
	db
};
