import { getEmployee }  from "./api.js";
import { getExpenses , saveExpenses } from "./storage.js";
import { displayExpenses , updateSummary } from "./ui.js"

let expenses = getExpenses();

//  LOAD EXPENSES

async function loadEmployee(){
    try{
        const employee = await getEmployee();
        document.querySelector("#employeeName")
        .textContent = `${employee.name} - ${employee.email}`;
    }catch(error){
        document.querySelector("#employeeName")
        .textContent = "unable to load employee";
    }
}

// ADD EXPENSE

const form = document.querySelector("#expenseForm");
form.addEventListener("submit",function(event){
    event.preventDefault();
    const title = document.querySelector("#title").value;
    const amount = Number(document.querySelector("#amount").value);
    const category = document.querySelector("#category").value;

    if(title === "" || amount <= 0){
        alert("Enter valid expense details");
        return;
    }
    const expense = {
        id:Date.now(),
        title:title,
        amount:amount,
        category:category
    };
    expense.push(expense);
    saveExpenses(expenses);
    displayExpenses(expenses);
    updateSummary(expenses);
    form.reset();
});

//  DELETE EXPENSE

document.querySelector("expenseList")
.addEventListener("click",function(event){
    if(
        event.target.classList.contains("delete-btn")
    ){
        const id = Number(event.target.dataset.id);
        expenses = expenses.filter(function(expense){
            return expense.id !== id;
        }
    );
    saveExpenses(expenses);
    displayExpenses(expenses);
    updateSummary(expenses);
    }
});

// INITIAL APPLICATION

displayExpenses(expenses);
updateSummary(expenses);
loadEmployee();