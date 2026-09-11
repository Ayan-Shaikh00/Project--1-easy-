export async function getEmployee(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if(!response.ok){
            throw new Error("Failed to fetch employee");
        }
        const data = await response.json();
        return data;
    }catch(error){
        console.error("API ERROR:",error);
        throw error;
    }
}