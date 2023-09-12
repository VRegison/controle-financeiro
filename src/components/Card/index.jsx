import "./style.css"
export function Card(props)
{
   return (
      <div className="box-card">
         <div className="card-main">
            <h5>{props.title}</h5>
            <div className={props.bgColor}>
            {props.icon}  
            </div>
         </div>
         <div className="card-value">
            <h4>R${props.value}</h4>
         </div>
      </div>
   )
}
