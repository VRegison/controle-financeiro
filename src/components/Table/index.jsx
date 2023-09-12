import "./style.css";
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';

import { deleteRevenueExpenses } from '../../controllers/ExpensesController';

export function Table(props) {

   async function deleteItem(id) {
      await deleteRevenueExpenses(id)
      props.teste()
   }

   return (
      <div className="table-main" >
         <table border="1">
            <thead>
               <tr>
                  <th >Cód</th>
                  <th >Descrição</th>
                  <th >Data</th>
                  <th width="20%" >ValorR$</th>
                  <th width="1%">Tipo</th>
                  <th width="1%">Apagar</th>
               </tr>
            </thead>
            <tbody>
               {
                  props.data.length > 0 ? (props.data.map((item, index) => {
                     const icon = item.tipo == "1" ? <AiOutlineArrowUp size={22} color="#198754" /> : <AiOutlineArrowDown size={22} color="#dc3545" />
                     return (
                        <tr key={index}>
                           <td className="table_td">{item.id}</td>
                           <td className="table_td">{item.descricao}</td>
                           <td className="table_td">{item.data}</td>
                           <td className="table_td">{item.valor}</td>
                           <td className="table_td td-main">{icon}</td>
                           <td className="table_td" onClick={() => deleteItem(item.id)}>{<BsFillTrashFill />}</td>
                        </tr>
                     )
                  }))
                     : <p style={{ textAlign: 'right', marginTop: 15 }}>Nenhum dado Encontrado</p>
               }
            </tbody>
         </table>
      </div>
   )
}