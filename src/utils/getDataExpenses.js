export function getDataExpenses() {
   const objExpenses = localStorage.getItem('objExpenses') == null ? false : JSON.parse(localStorage.getItem('objExpenses'));
   return objExpenses
}

export function createDataExpenses() {
   if (!getDataExpenses()) {
      const objExpenses = localStorage.setItem('objExpenses', JSON.stringify([]));
      return objExpenses
   }

}

export function saveDataExpenses(data) {

   const objExpenses = localStorage.setItem('objExpenses', JSON.stringify(data));
   return objExpenses
}

