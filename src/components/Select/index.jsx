import "./style.css"
export function Select(props){
   return(
      <select className="select-main">
         {
            props.datas.map((data)=>{
               return(<option  key={data.id} value={data.id}>{data.month}</option>)
            })
         }
  </select>
   )
}