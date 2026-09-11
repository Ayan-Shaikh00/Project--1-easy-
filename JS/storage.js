const STORAGE_KEY = "expenses";
export function getExpenses(){
    const data = localStorage.getItem(STORAGE_KEY);
    if(!data){
        return[];
    }
    return JSON.parse(data);
}
export function saveExpenses(expenses){
    localStorage.setItem(STORAGE_KEY , JSON.stringify(expenses)
);
}

