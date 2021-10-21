const pool = require("../../config/database");

module.exports = {
  createAdmin: (data, callback) => {
    pool.query(
      `insert into admin_registration(firstname, lastname, username, email, contact_no, password)
            values(?,?,?,?,?,?)`,
      [
        data.firstname,
        data.lastname,
        data.username,
        data.email,
        data.contact_no,
        data.password,
      ],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getAdmin: (callback) => {
    pool.query(
      `select id,username,firstname,lastname,email,contact_no from admin_registration`,
      [],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getAdminById: (id, callback) => {
    pool.query(
      `select id,username,firstname,lastname,email,contact_no from admin_registration where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
  updateAdmin: (data, callback) => {
    pool.query(
      `update admin_registration set firstname=?, lastname=? , username=?, email=?, contact_no=?, password=? where id = ?`,
      [
        data.firstname,
        data.lastname,
        data.username,
        data.email,
        data.contact_no,
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
  deleteAdmin: (data, callback) => {
    pool.query(
      `delete from admin_registration where id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getAdminByEmail: (email, callback) => {
    pool.query(
      `select * from admin_registration where email=?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
};
