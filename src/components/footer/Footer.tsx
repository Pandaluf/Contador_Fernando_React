import './Footer.css'

function Footer(){
    return (
        <>
            <footer className="footerCustom">
                <h1>Contador Público</h1>
                <div className="footerCustom__contact">
                    <h2>Contacto</h2>
                    <p><b>Correo:</b> fernando.aedcom@gmail.com</p>
                    <p><b>WhtasApp:</b><a href="http://wa.me/+51970390105" className="footerCustom__contact__whatsapp" target="_blank" rel="noopener noreferrer">+51 970 390 105</a></p>
                </div>
            </footer>
        </>
    )
}

export default Footer;