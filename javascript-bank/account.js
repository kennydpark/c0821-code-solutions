/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if ((amount <= 0) || (typeof amount !== 'number') || (isNaN(amount)) || (!(Number.isInteger(amount)))) {
    return false;
  } else if (amount > 0) {
    var newTransaction = new Transaction('deposit', amount);
    this.transactions.push(newTransaction);
    return true;
  }
};

Account.prototype.withdraw = function (amount) {
  if ((amount <= 0) || (typeof amount !== 'number') || (isNaN(amount)) || (!(Number.isInteger(amount)))) {
    return false;
  } else if (amount > 0) {
    var newTransaction = new Transaction('withdrawal', amount);
    this.transactions.push(newTransaction);
    return true;
  }
};

Account.prototype.getBalance = function () {
  if (this.transactions.length === 0) {
    return 0;
  } else {
    var total = 0;
    for (var i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].type === 'deposit') {
        total += this.transactions[i].amount;
      }
      if (this.transactions[i].type === 'withdrawal') {
        total -= this.transactions[i].amount;
      }
    }
    return total;
  }
};
