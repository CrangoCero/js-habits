let balance = 100;

function deposit(amount) {
  balance += amount;
}

function withdraw(amount) {
  balance -= amount;
}

withdraw(1000);
console.log(balance);

//Objetos Literales

const account = {
  ownerId: 1,
  owner: "Cristian",
  balance: 100,
  deposit(amount) {
    if (amount <= 0) throw new Error("El importe debe ser mayor a 0.");
    this.balance += amount;
    return this.balance;
  },
  withdraw: function (amount) {
    if (amount <= 0) throw new Error("El importe debe ser mayor a 0.");
    if (amount > this.balance) throw new Error("Saldo insuficiente.");
    this.balance -= amount;
    return this.balance;
  },
};

console.log(account.balance);
account.deposit(50);
account.withdraw(70);
console.log(account.balance);
