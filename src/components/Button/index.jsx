import "./style.css"
export function Button(props){
   return (
      <button onClick={props.func} className={props.className}>
         {props.children}
      </button>
   )
}