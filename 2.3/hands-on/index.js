const express = require("express");
const { transfer, getTransactions } = require("./service/transaction");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/transactions", (req, res) => {
  try {
    const transactions = getTransactions();
    res.status(200).json(transactions);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post("/transactions", (req, res) => {
  try {
    const { sourceAccount, destinationAccount, amount } = req.body;
    if (typeof amount !== "number") {
      throw new Error("amount is not a number");
    }

    if (!sourceAccount || !destinationAccount || !amount) {
      throw new Error("Insufficient Parameter");
    }
    transaction = transfer(sourceAccount, destinationAccount, amount);
    res.status(201).json({
      message: "Transaction created successfully",
      transaction: transaction,
    });
  } catch (e) {
    //For example we'll always use code 500 (Internal Server Error)
    res.status(500).json({ error: e.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
