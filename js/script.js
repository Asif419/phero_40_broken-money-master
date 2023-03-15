const calculateExpense = () => {
  const income = document.getElementById("income").value;
  const food = document.getElementById("food").value;
  const rent = document.getElementById("rent").value;
  const clothes = document.getElementById("clothes").value;
  console.log(parseInt(income));
  
  if (
    income < 0 ||
    income == "" ||
    food < 0 ||
    food == "" ||
    rent < 0 ||
    rent == "" ||
    clothes < 0 ||
    clothes == ""
  ) {
    alert("Inputs must be positive numbers");
    return;
  }
  // calculate expense
  const newIncome = parseInt(income);
  const newFood = parseInt(food);
  const newRent = parseInt(rent);
  const newClothes = parseInt(clothes);
  const expense = newFood + newRent + newClothes;

  // calculate balance
  const balance = newIncome - expense;
  //   validate income
  if (expense > newIncome) {
    alert("Expenses cannot be more than income");
  } else {
    // view total expense and balance
    document.getElementById("total-expense").innerText = expense;
    document.getElementById("balance").innerText = balance;
  }
};

const calculateSavings = () => {
  // calculate saving amount
  const savePercentage = document.getElementById("save").value;
  const income = document.getElementById("income").value;
//   Validate saving percentage value
if (savePercentage < 0) {
  alert("Provide positive saving value");
}
  const savingAmount = (parseInt(savePercentage) / 100) * parseInt(income);

  // calculate remaining balance
  const balance = document.getElementById('balance').innerText;
  const newBalance = parseInt(balance);
  const remainingBalance = newBalance - savingAmount;

  //   validate saving amount
  if (savingAmount > newBalance) {
    alert("SavingAmount is greater than balance");
  } else {
    // view saving amount and remaining balance
    document.getElementById("saving-amount").innerText = savingAmount;
    document.getElementById("remaining-balance").innerText = remainingBalance;
  }
};
