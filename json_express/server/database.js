const Pool = require('pg').Pool;

module.exports.pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'json_app',
  password: 'mysecretpassword',
  port: 5432,
});
