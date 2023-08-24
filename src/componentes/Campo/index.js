import { useState } from "react"
import "./Campo.css"

const Campo = (props) => {
    const [valor, actualizarValor] = useState("")

    const { type } = props
    

    const cambio = (e) => {
    
        props.actualizarCampo(e.target.value)
    }

    return <div className={`campo campo-${type}`}> 
        <label>{props.titulo}</label>
        <input 
        placeholder={ props.placeholder } 
        required 
        value={props.valor}
        onChange={cambio}
        type={type}
        
        
        />
    </div>
}

export default Campo