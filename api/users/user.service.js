const pool = require("../../config/database");

module.exports = {
  create: (data, callback) => {
    pool.query(
      `insert into user_registration(firstname, lastname, email, username, password)
            values(?,?,?,?,?)`,
      [data.firstname, data.lastname, data.email, data.username, data.password],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getUsers: (callback) => {
    pool.query(
      `select id,username,firstname,lastname,email from user_registration`,
      [],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getUserById: (id, callback) => {
    pool.query(
      `select id,username,firstname,lastname,email from user_registration where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
  updateUser: (data, callback) => {
    pool.query(
      `update user_registration set firstname=?, lastname=?, email=?, username=?, password=? where id = ?`,
      [
        data.firstname,
        data.lastname,
        data.email,
        data.username,
        data.password,
        data.id,
      ],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results);
      }
    );
  },
  deleteUser: (data, callback) => {
    pool.query(
      `delete from user_registration where id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
};
