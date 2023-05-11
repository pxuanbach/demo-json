const { pool } = require("./database");
const { v4: uuidv4 } = require('uuid');

const getUsers = (request, response) => {
  pool.query("SELECT * FROM users", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getUsersPagination = (request, response) => {
  const { limit, skip } = request.query;
  pool.query(
    `SELECT * FROM users LIMIT ${limit ? limit : 10} OFFSET ${skip ? skip : 0}`,
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getUserByEmail = (request, response) => {
  const { email } = request.body;

  pool.query(
    `SELECT * FROM users WHERE email=$1`,
    [email],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows[0]);
    }
  );
};

module.exports = {
  getUsers,
  getUsersPagination,
  getUserByEmail,
};
