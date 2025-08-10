// Lấy dữ liệu form
const name = document.getElementById("expense-name").value;
const amount = document.getElementById("expense-amount").value;
const category = document.querySelector('input[name="category"]:checked').value;

// Các element UI
const btnAdd = document.getElementById("btn-add");
const btnSave = document.getElementById("btn-save");
const cardAdd = document.getElementById("add-expense-card");
const cardList = document.getElementById("expenses-list");
const cardOverall = document.getElementById("overall-expense-card");

btnAdd.addEventListener("click", () => {
	cardAdd.classList.remove("card-hidden");
	cardOverall.classList.add("card-hidden");
});

btnSave.addEventListener("click", (e) => {
	e.preventDefault();
});
