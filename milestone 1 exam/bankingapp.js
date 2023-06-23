// Define the customer object with name and balance properties
const customer = {
    name: "John Doe",
    balance: 1000,
  
    // Function to deposit an amount into the customer's account
    deposit: function(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Successfully deposited $${amount}`);
      } else {
        console.log("Invalid amount for deposit");
      }
    },
  
    // Function to withdraw an amount from the customer's account
    withdraw: function(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Successfully withdrew $${amount}`);
      } else {
        console.log("Insufficient funds or invalid amount for withdrawal");
      }
    },
  
    // Function to display the customer's account balance
    getBalance: function() {
      console.log(`Current balance: $${this.balance}`);
    }
  };
  
  // Example usage:
  customer.getBalance(); // Output: Current balance: $1000
  
  customer.deposit(500); // Output: Successfully deposited $500
  customer.getBalance(); // Output: Current balance: $1500
  
  customer.withdraw(200); // Output: Successfully withdrew $200
  customer.getBalance(); // Output: Current balance: $1300
  
  customer.withdraw(2000); // Output: Insufficient funds or invalid amount for withdrawal
  customer.deposit(-100); // Output: Invalid amount for deposit
  