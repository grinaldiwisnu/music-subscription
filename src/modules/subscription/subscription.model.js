const connection = require('../../helper/database.helper');

module.exports = {
  createSubscriptions: (data, callback) => {
    connection.query(
      `INSERT INTO Subscription (name, price, duration) VALUES (?, ?, ?)`,
      [
        parseInt(data.name),
        parseInt(data.price),
        parseInt(data.duration)
      ],
      (error, result) => {
        if (error)
          callback(error);
        callback(null, result);
      }
    )
  },
  getSubscription: (data, callback) => {
    connection.query(
      `SELECT * FROM Subscription`,
      (error, result) => {
        if (error)
          callback(error);
        callback(null, result);
      }
    )
  },
  getSubscriptionId: (data, callback) => {
    connection.query(
      `SELECT * FROM Subscription WHERE id = ?`,
      [
        data.transaction_id
      ],
      (error, result) => {
        if (error)
          callback(error);
        callback(null, result);
      }
    )
  },
};