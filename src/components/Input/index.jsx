import "./style.css"
export function Input(props) {
   return (
      <input onChange={(e) => props.onChange(e)}
             name={props.name}
             type={props.type} 
             value={props.value} 
             className={props.className} 
             placeholder={props.placeholder} />
   )
}