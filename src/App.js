import { useState } from 'react';
import Banner from './componentes/banner/banner';
import Formulario from './componentes/formulario';
import Times from './componentes/times';
import Rodape from './componentes/rodape';


function App() {
  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
        nome: 'Front-end',
        corPrimaria: '#82cffa',
        corSecundaria: '#e8F8ff'
    },
    {
        nome: 'Data Science',
        corPrimaria: '#a6d157',
        corSecundaria: '#f0fbe2'
    },
    {
        nome: 'Devops',
        corPrimaria: '#e06b69',
        corSecundaria: '#fde7e8'
    },
    {
        nome: 'UX & Design',
        corPrimaria: '#db6ebf',
        corSecundaria: '#FAE5F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#ffba05',
      corSecundaria: '#fff5d9'
    },
    {
        nome: 'Inovação e Gestão',
        corPrimaria: '#ff8a29',
        corSecundaria: '#ffeedf'
    }
  ]
const [cards, setCard] = useState([])

const aoNovoCard = (card) => {
  console.log(card)
  setCard([...cards, card])
}
return (
  <div className="App">
    <Banner />
    <Formulario times= {times.map(time => time.nome)} aoCardCadastrado={card => aoNovoCard(card)} />
    {times.map(time => 
        <Times 
        nome={time.nome} 
        key={time.nome}
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        cards={cards.filter(card => card.time === time.nome)}/>
      )}
      <Rodape/>
  </div>
);
}

export default App;
