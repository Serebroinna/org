import "./listaOpciones.css";

const ListaOpciones = (props) =>{

    const manejarCambio = (e) =>{
        props.actualizarValor(e.target.value);
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            {/* //con map logramos recorrer el arreglo y ejecutar una funcion por cada elemento, en este caso estamos retornando un option por cada uno */}
            {props.equipos.map((equipo, index)=>{
                return <option key={index}>{equipo}</option>
            })};
        </select>
    </div>
}

export default ListaOpciones;