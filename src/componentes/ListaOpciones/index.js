import "./ListaOpciones.css";

const ListaOpciones = (props) => {


    const seleccionar = (e) => {
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista__opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={seleccionar}>
            <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
            { props.equipos.map((equipo, index) => {
                return <option key={index}>{equipo}</option>
            }) }
        </select>
    </div>
}

export default ListaOpciones