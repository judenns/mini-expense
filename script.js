// Lấy dữ liệu form
const name = document.getElementById("expense-name").value;
const amount = document.getElementById("expense-amount").value;
const category = document.querySelector('input[name="category"]:checked').value;

// Các element UI
const btnAdd = document.getElementById("btn-add");
const btnSave = document.getElementById("btn-save");
const addExpenseCard = document.getElementById("add-expense-card");
const expensesList = document.getElementById("expenses-list");
const overallCard = document.getElementById("overall-expense-card");
