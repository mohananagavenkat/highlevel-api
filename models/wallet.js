const mongoose = require('mongoose');

const walletSchema = mongoose.Schema({
  name: { type: String, required:true },
  balance: { type: Number, default: 0 }
}, { timestamps: true, optimisticConcurrency: true });

walletSchema.index({ name: 'text' })

module.exports = mongoose.model('wallet', walletSchema);

