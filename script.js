// Process
// 1. Render state ban đầu
// 2. Lấy value từ user
// 3. Render value ra 1 list item trong Card List
// 4. Tính tổng
// 5. Render tổng ra Card Overall
// 6. Update thanh budget

//Các element UI
const btnAdd = document.getElementById("btn-add");
const btnSave = document.getElementById("btn-save");
const cardAdd = document.getElementById("add-expense-card");
const cardOverall = document.getElementById("overall-expense-card");
let allExpenses = [];

//Render card tạo chi tiêu khi bấm btn " Thêm chi tiêu "
btnAdd.addEventListener("click", () => {
	cardAdd.classList.remove("card-hidden");
	cardOverall.classList.add("card-hidden");
});

//Prevent form submit gây back lại card Overall
btnSave.addEventListener("click", (e) => {
	e.preventDefault();
});

//Lấy value từ user và tạo object khi cần

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

//Render value ra 1 list item khi bấm add

btnSave.addEventListener("click", () => {
	const cardList = document.getElementById("expenses-list"); // Lấy DOM danh sách list
	const expenseItem = getExpenseData(); // Tạo biến chi tiêu lấy giá trị bằng input user
	allExpenses.push(expenseItem); // Đẩy item vào danh sách expense
	let expenseListHTML = ""; // Tạo biến hold content được render

	for (let i = 0; i < allExpenses.length; i++) {
		expenseListHTML += `<li class="">
								<div class ="expense-info">
									<div class="expense-category">${allExpenses[i].category}</div>
									<div>${allExpenses[i].name}</div>
								</div>
								<div>${allExpenses[i].amount}</div>
							</li>`;
	}
	cardList.innerHTML = expenseListHTML; // Gắn innerHTML của ul = content redner
});

// Lưu vào localstorage
