// Lấy DOM buttons
const closeAddCard = document.getElementById("close-card-add-btn");
const btnAdd = document.getElementById("btn-add");

// Lấy DOM UI Card
const summaryCard = document.getElementById("overall-expense-card");
const addExpenseCard = document.getElementById("add-expense-card");
const expenseListContainer = document.getElementById("expenses-list");
const totalExpenseTitle = document.getElementById("total-expense");

// Lấy DOM form
const formExpense = document.getElementById("expense-form");
const nameInput = document.getElementById("expense-name");
const amountInput = document.getElementById("expense-amount");
const categoryInput = document.querySelector("input[name='category']:checked");

// Config tiền tệ
const currentCurrency = "VND";
const currentLocale = "vi-VN";

// Config budget hằng tháng
let monthyBudget = 20000000;

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

//Format Đơn vị tiền tệ
function currencyFormat(currency) {
	return {
		style: "currency",
		currency: currency,
	};
}
const currencyOption = currencyFormat(currentCurrency);
const currencySetting = new Intl.NumberFormat(currentLocale, currencyOption);

//Thu thập dữ liệu từ input user và tạo object
function collectExpenseFormData() {
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

//Render tổng chi tiêu
function renderTotalExpense() {
	const totalExpense = calculateTotalExpense();
	totalExpenseTitle.textContent = `${currencySetting.format(totalExpense)}`;
}

//Render UI
function updateExpenseDisplay() {
	renderExpenseList();
	renderTotalExpense();
}

//Toggle Cards
function toggleCard(hideCard, showCard) {
	hideCard.classList.add("card-hidden");
	showCard.classList.remove("card-hidden");
}

btnAdd.addEventListener("click", () => {
	toggleCard(summaryCard, addExpenseCard);
});

closeAddCard.addEventListener("click", () => {
	toggleCard(addExpenseCard, summaryCard);
});

// Update UI khi submit form thêm chi tiêu nhưng không thoát khỏi form
formExpense.addEventListener("submit", (e) => {
	e.preventDefault();
	addExpenseToList();
	calculateTotalExpense();
	updateExpenseDisplay();
	formExpense.reset();
});
