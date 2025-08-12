// Lấy DOM
const btnAdd = document.getElementById("btn-add");
const summaryCard = document.getElementById("overall-expense-card");
const addExpenseCard = document.getElementById("add-expense-card");
const formExpense = document.getElementById("expense-form");
const expenseListContainer = document.getElementById("expenses-list");
const totalExpenseTitle = document.getElementById("total-expense");
const closeAddCard = document.getElementById("close-card-add-btn");
const currentCurrency = "VND";
const currentLocale = "vi-VN";

// Báo danh sách chi tiêu
const expenses = [];

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

//Đơn vị tiền tệ
function currencyFormat(currency) {
	return {
		style: "currency",
		currency: currency,
	};
}

const currencyOption = currencyFormat(currentCurrency);
const currencySetting = new Intl.NumberFormat(currentLocale, currencyOption);

//Chuyển từ số sang đơn vị tiền tệ?

//Thu thập dữ liệu từ input user và tạo object
function collectExpenseFormData() {
	const nameInput = document.getElementById("expense-name");
	const amountInput = document.getElementById("expense-amount");
	const categoryInput = document.querySelector(
		"input[name='category']:checked",
	);
	return {
		name: nameInput.value,
		amount: parseFloat(amountInput.value),
		category: categoryInput.value,
	};
}

//Đẩy data vào list
function addExpenseToList() {
	const expenseItem = collectExpenseFormData();
	expenses.push(expenseItem);
}

//Render ra danh sách item ở card danh sách chi tiêu
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

//Tính tổng chi tiêu
function calculateTotalExpense() {
	return expenses.reduce((acc, item) => acc + item.amount, 0);
}

//Biến nub

//Render tổng chi tiêu
function renderTotalExpense() {
	const totalExpense = calculateTotalExpense();
	totalExpenseTitle.textContent = `${currencySetting.format(totalExpense)}`;
}

//Update UI
function updateExpenseDisplay() {
	renderExpenseList();
	renderTotalExpense();
}

// Render list chi tiêu khi submit form chi tiêu
formExpense.addEventListener("submit", (e) => {
	e.preventDefault();
	addExpenseToList();
	calculateTotalExpense();
	updateExpenseDisplay();
	formExpense.reset();
});

//Toggle Cards
function toggleCard(hideCard, showCard) {
	hideCard.classList.add("card-hidden");
	showCard.classList.remove("card-hidden");
}

// Rebder Card Add, ẩn card overall
btnAdd.addEventListener("click", () => {
	toggleCard(summaryCard, addExpenseCard);
});

// Back khỏi Card Add
closeAddCard.addEventListener("click", () => {
	toggleCard(addExpenseCard, summaryCard);
});
