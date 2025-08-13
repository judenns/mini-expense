// CONFIG
const currentCurrency = "VND";
const currentLocale = "vi-VN";
let monthlyBudget = 20000000;

// Map emoji vào category
const categoryEmojis = {
	food: "🍽️",
	essential: "🏠",
	shopping: "🛍️",
	travel: "🚗",
	health: "💊",
	learn: "📚",
	invest: "📈",
};

// Lấy DOM Btn
const btnAdd = document.getElementById("btn-add");
const closeAddCard = document.getElementById("close-card-add-btn");

// Lấy DOM Card
const summaryCard = document.getElementById("overall-expense-card");
const addExpenseCard = document.getElementById("add-expense-card");

// Lấy form elements
const formExpense = document.getElementById("expense-form");
const expenseListContainer = document.getElementById("expenses-list");
const totalExpenseTitle = document.getElementById("total-expense");

// Báo danh sách chi tiêu
const expenses = [];

// Format Đơn vị tiền tệ
function currencyFormat(currency) {
	return {
		style: "currency",
		currency: currency,
	};
}

const currencyOption = currencyFormat(currentCurrency);
const currencySetting = new Intl.NumberFormat(currentLocale, currencyOption);

// Thu thập dữ liệu từ from -> Trả về object
function collectExpenseFormData() {
	const nameInput = formExpense.querySelector("input[name='expenseName']");
	const amountInput = formExpense.querySelector("input[name='expenseAmount']");
	const categoryInput = formExpense.querySelector(
		"input[name='category']:checked",
	);
	return {
		name: nameInput.value,
		amount: parseFloat(amountInput.value),
		category: categoryInput.value,
	};
}

// Đẩy object vào array expenses = []
function addExpenseToList() {
	const expenseItem = collectExpenseFormData();
	expenses.push(expenseItem);
}

// Render ra danh sách item ở card danh sách chi tiêu
function renderExpenseList() {
	let expenseItemsMarkup = "";
	for (let i = 0; i < expenses.length; i++) {
		expenseItemsMarkup += `<li class="expense-item">
                                <div class ="expense-info">
                                    <div class="expense-category">${categoryEmojis[expenses[i].category]}</div>
                                    <div class="expense-name">${expenses[i].name}</div>
                                </div>
                                <div>${currencySetting.format(expenses[i].amount)}</div>
                            </li>`;
	}
	expenseListContainer.innerHTML = expenseItemsMarkup;
}

// Tính tổng chi tiêu
function calculateTotalExpense() {
	return expenses.reduce((acc, item) => acc + item.amount, 0);
}

//Update thanh progress
function updateProgressbar() {
	let progressBar = document.querySelector(".bar-display");
	let percentage = (calculateTotalExpense() / monthlyBudget) * 100;
	progressBar.style.width = `${percentage}%`;
}

// Render tổng chi tiêu
function renderTotalExpense() {
	const totalExpense = calculateTotalExpense();
	totalExpenseTitle.textContent = `${currencySetting.format(totalExpense)}`;
}

// Update UI
function updateExpenseDisplay() {
	renderExpenseList();
	renderTotalExpense();
	updateProgressbar();
}

// Render list chi tiêu khi submit form chi tiêu
formExpense.addEventListener("submit", (e) => {
	e.preventDefault();
	addExpenseToList();
	calculateTotalExpense();
	updateExpenseDisplay();
	formExpense.reset();
});

// Toggle Cards
function toggleCard(hideCard, showCard) {
	hideCard.classList.add("card-hidden");
	showCard.classList.remove("card-hidden");
}

// Render Card Add, ẩn card overall
btnAdd.addEventListener("click", () => {
	toggleCard(summaryCard, addExpenseCard);
});

// Back khỏi Card Add
closeAddCard.addEventListener("click", () => {
	toggleCard(addExpenseCard, summaryCard);
});
