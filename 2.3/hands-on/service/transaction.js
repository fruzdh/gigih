const { getCustomer } = require("../model/customer");
const {
  createTransaction,
  getAllTransaction,
} = require("../model/transaction");

function transfer(sourceId, destinationId, amount) {
  sourceAccount = getCustomer(sourceId);
  destinationAccount = getCustomer(destinationId);
  if (!sourceAccount || !destinationAccount) {
    throw new Error("Invalid source or destination account");
  }
  if (sourceAccount.balance < amount) {
    throw new Error("Insufficient balance in the source account");
  }
  sourceAccount.balance -= amount;
  destinationAccount.balance += amount;
  transaction = createTransaction(
    sourceAccount.customerId,
    destinationAccount.destinationId,
    amount
  );
  return transaction;
}

function getTransactions() {
  return getAllTransaction();
}

module.exports = { transfer, getTransactions };
