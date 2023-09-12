import { saveDataExpenses, getDataExpenses } from '../utils/getDataExpenses';

export function saveObjDataExpenses(obj) {
   const objLocalStorage = getDataExpenses();

   objLocalStorage.push(obj);
   saveDataExpenses(objLocalStorage)

   return true;
}

export function generateId() {

   const objLocalStorage = getDataExpenses();

   const lastID = objLocalStorage.length > 0 ? parseInt(objLocalStorage[objLocalStorage.length - 1].id) + 1 : 1;

   return lastID;
}
// Receita
export function getRevenue() {
   const objLocalStorage = getDataExpenses();
   let valueRevenue = 0;

   for (let i = 0; i < objLocalStorage.length; i++) {
      if (objLocalStorage[i].tipo == 1) {
         valueRevenue += parseFloat(objLocalStorage[i].valor)
      }

   }

   return valueRevenue;
}
// Despesas
export function getExpenses() {
   const objLocalStorage = getDataExpenses();
   let valueExpenses = 0;

   for (let i = 0; i < objLocalStorage.length; i++) {
      if (objLocalStorage[i].tipo != 1) {
         valueExpenses += parseFloat(objLocalStorage[i].valor)
      }

   }

   return valueExpenses;
}
//  Saldo Atual
export function getCurrentBalance() {
   const data = getRevenue() - getExpenses();
   return data
}
// Apagar algum
export function deleteRevenueExpenses(id){
   const objLocalStorage = getDataExpenses();   
   // Crie um novo array que exclui o item
   let newArray = objLocalStorage.filter(item => item.id !== id);
   
   saveDataExpenses(newArray)
}