const {createTransaction, getTransaction, getTransactionId} = require('./transaction.model');

module.exports = {
  payment: (req, res) => {
    const {subscription_id, costumer_id, total} = req.body;

    if (!costumer_id || !subscription_id || !total) {
      return res.status(422).json({
        success: false,
        data: null,
        message: `Payload for payment are empty `
      });
    }

    const params = req.body;
    createTransaction(params, (error, result) => {
      if (error)
        return res.status(422).json({
          success: false,
          data: error,
          message: `Failed create payment for subscription`
        });
      return res.status(201).json({
        success: true,
        data: result,
        message: `Success create payment for subscription`
      });
    })
  },
  transaction: (req, res) => {
    getTransaction(null, (error, result) => {
      if (error)
        return res.status(422).json({
          success: false,
          data: error,
          message: `Failed get transaction`
        });

      if (result.length === 0)
        return res.status(204).json({
          success: true,
          data: [],
          message: `Subscription data not found`
        });

      return res.status(200).json({
        success: true,
        data: result,
        message: `Success get transaction`
      });
    })
  },
  transactionId: (req, res) => {
    const {transaction_id} = req.params;

    if (!transaction_id) {
      return res.status(422).json({
        success: false,
        data: null,
        message: `Payload for get transaction with ID is empty`
      });
    }

    const params = req.params;
    getTransactionId(params, (error, result) => {
      if (error)
        return res.status(422).json({
          success: false,
          data: error,
          message: `Failed get transaction with ID ${transaction_id}`
        });

      if (result.length === 0)
        return res.status(204).json({
          success: true,
          data: [],
          message: `Subscription data with ID ${transaction_id} not found`
        });

      return res.status(200).json({
        success: true,
        data: result,
        message: `Success get transaction with ID ${transaction_id}`
      });
    })
  }
};