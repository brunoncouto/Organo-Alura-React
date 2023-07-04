import Card from '../card'
import './times.css'

const Times = (props) => {
    const bgCor = {backgroundColor: props.corSecundaria}
    const bdCor = {borderColor: props.corPrimaria}
    return(
        // Declaração de operador condicional não usa IF
        // Se o tamanho de props.cards for maior que 0, irá criar a section do time
        props.cards.length > 0 && <section className='times' style={bgCor}>
            <h3 style={bdCor}>
                {props.nome}
            </h3>
                <div className='cards'>
                    {props.cards?.map(card => 
                        <Card
                        key={card.nome}
                        nome={card.nome} 
                        cargo={card.cargo} 
                        imagem = {card.imagem}
                        corDeFundo = {props.corPrimaria}
                        />)}
                </div>
            
        </section>
        // Outra forma de se fazer uma condicional é com:
        // (props.cards.lenght > 0) ? <CÓDIGO A SER EXECUTADO
        // [...]/>
        // : '' (SE NÃO FOR MAIOR RETORNA UMA STRING VAZIA)
    )

}

export default Times