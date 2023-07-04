import './rodape.css'


const Rodape = () =>{
    return (
        <footer className="footer">
            <div className="social-media">  
                <a href='instagram.com' target='_blank'>
                    <img src="images/ig.png"></img>
                </a>
                <a href='facebook.com' target='_blank'>
                    <img src="images/fb.png"></img>
                </a>
                <a href='twitter.com' target='_blank'>
                    <img src="images/tw.png"></img> 
                </a>
             </div>
            <div className="logo-img">
                <img src="images/logo.png"></img>
            </div>
            <p> Desenvolvido por Alura</p>
        </footer>
    )
}

export default Rodape