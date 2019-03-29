const knex = require("knex");
const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB;

const db = knex({
	client: "pg",
	connection: {
		host: host,
		user: user,
		password: password,
		database: database
	}
});

module.exports = {
	db
};
