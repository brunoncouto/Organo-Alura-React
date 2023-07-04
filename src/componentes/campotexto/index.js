import './campotexto.css'

// Por padrão o React produz o parâmetro 'props' automaticamente na criação de uma function
// A chamada de parâmetro é feita utilizando, portanto, props + o atributo HTML desejado (ex: label, placeholder)
const CampoTexto = (props) => {
    const aoDigitar = (evento) =>{
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor}onChange={aoDigitar} required={props.obrigatorio} placeholder = {`${props.placeholder} ...`}/>
        </div>
    )
}

export default CampoTexto

// onChange, onClick, onSubmit são tipos de eventos "escutáveis" dentro do Javascript