let transactions = [
  {
    transactionId: "123456789",
    sourceId: "12345",
    destinationId: "67890",
    amount: 5.0,
    timestamp: "2023-06-01T00:00:00.000Z",
  },
];

function generateTransactionId() {
  return Math.random().toString(36).substring(2, 9);
}

function createTransaction(sourceId, destinationId, amount) {
  const transaction = {
    transactionId: generateTransactionId(),
    sourceId: sourceId,
    destinationId: destinationId,
    amount: amount,
    timestamp: new Date().toISOString(),
  };
  transactions.push(transaction);
  return transaction;
}

function getAllTransaction() {
  return transactions;
}

module.exports = { createTransaction, getAllTransaction };
