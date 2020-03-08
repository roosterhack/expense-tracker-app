const express = require('express');
const router = express.Router();
const {
  getTransactions,
  addTransaction,
  deleteTransaction
} = require('../controllors/transactions');

router
  .route('/')
  .get(getTransactions)
  .post(addTransaction);

router.route('/:id').delete(deleteTransaction);

module.exports = router;
