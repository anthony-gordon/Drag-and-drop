const environment = process.env.NODE.ENV || "development";
const config = require("./../knexfile")[environment];
const connection = require("knex")(config);
