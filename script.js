//Các element UI
const btnAdd = document.getElementById("btn-add");
const btnSave = document.getElementById("btn-save");
const cardAdd = document.getElementById("add-expense-card");
const cardOverall = document.getElementById("overall-expense-card");
const cardList = document.getElementById("expenses-list");
const expenseForm = document.getElementById("expense-form");
const allExpenses = [];
const categoryEmojis = {
	food: "🍽️",
	essential: "🏠",
	shopping: "🛍️",
	travel: "🚗",
	health: "💊",
	learn: "📚",
	invest: "📈",
};

//Render card tạo chi tiêu khi bấm btn " Thêm chi tiêu "
btnAdd.addEventListener("click", () => {
	cardAdd.classList.remove("card-hidden");
	cardOverall.classList.add("card-hidden");
});

//Lấy value từ user và tạo object

function getExpenseData() {
	const name = document.getElementById("expense-name");
	const amount = document.getElementById("expense-amount");
	const category = document.querySelector('input[name="category"]:checked');

	return {
		name: name.value,
		amount: amount.value,
		category: category.value,
	};
}

//Validate input trước khi Lưu
function validateForm(expenseItem) {
	if (expenseItem.name === "" || expenseItem.amount === "") {
		alert("Vui lòng nhập tên chi tiêu");
		return false;
	}
	return true;
}

//Render value ra 1 list item khi bấm add
function renderExpenseList(validatedExpenseItem) {
	allExpenses.push(validatedExpenseItem); // Đẩy item vào danh sách expense
	let expenseListHTML = ""; // Tạo biến hold content được render

	for (let i = 0; i < allExpenses.length; i++) {
		expenseListHTML += `<li class="expense-item">
								<div class ="expense-info">
									<div class="expense-category">${categoryEmojis[allExpenses[i].category]}</div>
									<div class="expense-name">${allExpenses[i].name}</div>
								</div>
								<div>${new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(allExpenses[i].amount)}</div>
							</li>`;
	}
	cardList.innerHTML = expenseListHTML; // Gắn innerHTML của ul = content redner
}

expenseForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const expenseItem = getExpenseData();
	if (validateForm(expenseItem)) {
		renderExpenseList(expenseItem);
	}
	expenseForm.reset();
});
