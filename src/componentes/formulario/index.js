import { useState } from 'react'
import Botao from '../botao'
import CampoTexto from '../campotexto'
import ListaSuspensa from '../listasuspensa'
import './formulario.css'

const Formulario = (props) => {
  // O useState é um gancho (hook) fornecido pelo React, que permite adicionar estado a componentes funcionais. 
// Ele é usado para criar uma variável de estado e uma função para atualizá-la dentro de um componente.
// A função useState recebe um valor inicial como argumento e retorna um array com dois elementos: 
// o estado atual e uma função para atualizá-lo.
// No caso abaixo o estado atual é nome, cargo ou imagem e a função Set atualizará cada um desses estados, conforme houver interação no DOM
    
    const[nome,setNome] = useState('')
    const[cargo,setCargo] = useState('')
    const[imagem,setImagem] = useState('')
    const[time,setTime] = useState('')

    const aoSalvar = (evento) =>{
        evento.preventDefault()
        props.aoCardCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }


    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                obrigatorio={true} 
                label= "Nome" 
                placeholder="Digite seu nome"
                valor={nome}
                aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                obrigatorio={true} 
                label= "Cargo" 
                placeholder="Digite seu Cargo"
                valor={cargo}
                aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                label= "Imagem" 
                placeholder="Digite o endereço da imagem"
                valor = {imagem}
                aoAlterado = {valor => setImagem(valor)}
                />
                <ListaSuspensa 
                obrigatorio={true} 
                label = "Time" itens={props.times}
                valor = {time}
                aoAlterado = {valor =>setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )

}

export default Formulario