import "./colaborador.css"
import { IoMdCloseCircle } from "react-icons/io";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";

const Colaborador = (props) => {
    const {nombre, puesto, imagen, fav} = props.datos;

    return (
        <div className="card-colaborador">
            
            <div className="encabezado" style={{backgroundColor:props.colores.colorPrimario}}>
            < IoMdCloseCircle onClick={() => props.eliminarColaborador(props.datos.id)} className="btn-eliminar" style={{color:"#fff"}}/>
                <img src={imagen} alt={nombre}></img>
            </div>
            <div className="info">
                <h4>{nombre}</h4>
                <h5>{puesto}</h5>
                {fav ? <GoHeartFill style={{color:"red"}} onClick={()=> props.favorito(props.datos.id)} /> : <GoHeart onClick={()=> props.favorito(props.datos.id)} />}
            </div>
        </div>
    )
};

export default Colaborador;