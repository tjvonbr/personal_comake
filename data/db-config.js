const knex = require('knex');
const config = require('../knexfile.js');
const dbEnv = process.env.DB_ENV || 'development'
// Add config variable in heroku!

module.exports = knex(config[dbEnv]);