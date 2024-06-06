import "./miOrg.css";

const MiOrg = (props) => {

    return <section className="orgSection">
        <h3>Mi organización</h3>
        <img src="/img/btn-add.png" alt="" onClick={props.cambiarState}/>
    </section>
}

export default MiOrg;