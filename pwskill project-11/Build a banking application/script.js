var account = null;

function createAccount() {
  var name = document.getElementById("name").value;
  var balance = parseFloat(document.getElementById("balance").value);

  account = {
    name: name,
    balance: balance
  };

  document.getElementById("accountDetails").style.display = "none";
  document.getElementById("transaction").style.display = "block";
}

function deposit() {
  var amount = parseFloat(document.getElementById("amount").value);

  if (amount > 0) {
    account.balance += amount;
    document.getElementById("result").textContent = "Deposit successful. New balance: " + account.balance;
  } else {
    document.getElementById("result").textContent = "Invalid amount. Please enter a positive number.";
  }
}

function withdraw() {
  var amount = parseFloat(document.getElementById("amount").value);

  if (amount > 0 && amount <= account.balance) {
    account.balance -= amount;
    document.getElementById("result").textContent = "Withdrawal successful. New balance: " + account.balance;
  } else {
    document.getElementById("result").textContent = "Insufficient balance or invalid amount.";
  }
}
