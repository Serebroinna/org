import "./campoTexto.css";

//Los componentes de pueden declarar como una function o una arrow function por ejemplo:
const CampoTexto = (props) => {
    const {type = "text"} = props;
    const manejarCambio = (e)=>{
        props.actualizarValor(e.target.value)
    }
    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input
            type={type}
            placeholder={props.placeholder} 
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
            />
    </div>
}

export default CampoTexto;