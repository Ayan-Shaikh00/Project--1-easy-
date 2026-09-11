export function displayExpenses(expenses){
    const list = document.querySelector("#expenseList");
    list.innerHTML = "";
    if(expenses.length === 0){
        list.innerHTML = "<p>No expenses found.</p>"
        return;
    }

    expenses.forEach(function(expense){
        const div = document.createElement("div");
        div.classList.add("expanse");
        div.innerHTML = `
        <div>
            <strong>${expense.title}</strong>
            <p>
                ${expense.category}
            </p>
        </div>
        <div>
            <strong>₹${expense.amount}</strong>
            <button class = "delete-btn" data-id="${expense.id}">Delete</button>
        </div>`;
        list.appendChild(div);
    });
}

export function updateSummary(expenses){
    const total = expenses.reduce(function(sum , expense){
        return sum + expense.amount;
    },
    0
);
document.querySelector("#totalExpense")
    .textContent = `₹${total}`;

document.querySelector("expenseCount")
    .textContent = expenses.length;    
}