class Customer {
  constructor(name, email, initialBalance) {
    this.customerId = this.generateCustomerId();
    this.name = name;
    this.email = email;
    this.balance = initialBalance;
  }

  generateCustomerId() {
    return Math.random().toString(10).substring(2, 6);
  }
}

class Customers {
  constructor() {
    this.customers = [];

    const customerA = new Customer("name1", "name1@example.com", 5000.0);
    const customerB = new Customer("name2", "name2@example.com", 5000.0);

    this.customers.push(customerA);
    this.customers.push(customerB);
  }

  getAllCustomers() {
    return this.customers;
  }

  getCustomer(customerId) {
    return this.customers.find((c) => c.customerId === customerId);
  }

  createCustomer(name, email, initialBalance) {
    const newCustomer = {
      customerId: generateCustomerId(),
      name: name,
      email: email,
      balance: initialBalance,
    };
    this.customers.push(newCustomer);

    return newCustomer;
  }
}

module.exports = new Customers();
