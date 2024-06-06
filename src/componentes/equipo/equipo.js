import "./equipo.css"
import Colaborador from "../colaborador/colaborador.js";
import hexToRgba from "hex-to-rgba";


const Equipo = (props) =>{
    

    // Aqui condicionamos a que solo cree el section del equipo que tenga colaboradores
    return <>{props.colaboradores.length > 0 && 
        <section className="section-equipo" style={{backgroundColor: hexToRgba(props.datos.colorPrimario, 0.7) }}>
            <input type="color" value={props.datos.colorPrimario} onChange={(event)=>{props.actualizarColor(event.target.value, props.datos.id)}} className="input-color"></input>
            <h3 style={{borderColor:props.datos.colorPrimario}}>{props.datos.titulo}</h3>
            <div className="div-colaboradores">
                {
                    props.colaboradores.map((colaborador) => {
                        return <Colaborador datos={colaborador} 
                                colores={props.datos} 
                                eliminarColaborador={props.eliminarColaborador} 
                                favorito={props.favorito}
                                key={colaborador.nombre}/>
                    })
                }   
            </div>
        </section>
    }</>     
};

export default Equipo;