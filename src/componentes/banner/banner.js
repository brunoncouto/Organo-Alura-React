// através do import é possível implementar qualquer css criado dentro do ambiente react
import './banner.css'
function Banner(){
    //JSX: é o equivalente ao document.creatElement e cria um elemento no DOM
    return(
        <header className="banner">
            <img src="/images/banner.png" alt="banner principal do Organo"></img>
        </header>
    )
}

export default Banner