const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    requred: [true, 'Please add some text']
  },
  amount: {
    type: Number,
    requrired: [true, 'Please add a postitive or negative nunber']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Transaction', TransactionSchema);
