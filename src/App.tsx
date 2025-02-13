import './App.css'
import NavBar from "./components/navbar/NavBar.tsx";
import FormValidation from "./components/form/Form.tsx";
import service from '/img/accounting1.jpg';
import fernando from '/img/fernando.jpg';
import Footer from "./components/footer/Footer.tsx";

function App() {

  return (
    <>
        <NavBar />
        <section className="header">
            <div className="header__content">
                <div className="header__content__words">
                    <h2>con</h2>
                    <h1>+ 20 años</h1>
                    <h3>de experiencia solucionando y gestionando procesos contables</h3>
                </div>
                <div className="header__content__message">
                    <h1 className="text-center">Dejanos un mensaje</h1>
                    <div className="header__content__message__form">
                        <FormValidation />
                    </div>
                </div>
            </div>
        </section>

        <section className="problems">
            <h1>¿Problemas con la contabilidad?</h1>
            <p>Llevar las finanzas de tu negocio puede ser complicado,
                pero no tienes que hacerlo solo. Un error en los números
                puede costarte tiempo y dinero. ¡Deja que un experto se encargue!
                Con nuestra asesoría contable, te ayudamos a organizar tus
                finanzas, optimizar impuestos y garantizar el cumplimiento de
                todas tus obligaciones. ¡Haz crecer tu negocio con seguridad
                y tranquilidad! Contáctanos hoy y obtén la solución que necesitas.</p>
            <div>
                <button>Solicita información</button>
            </div>
        </section>

        <section className="services">
            <h1 className="services__title">Servicios</h1>
            <div className="services__container">
                <div className="services__container__list">
                    <ul>
                        <li>Inscripción de RUC</li>
                        <li>Declaración de IGV - RENTA</li>
                        <li>Declaración de PDT - PLAME </li>
                        <li>Elaboración de Planilla y Boletas de Pagos</li>
                        <li>Elaboración de Libros Electrónicos</li>
                        <li>Declaración ESSALUD - AFP - ONP</li>
                    </ul>
                    <ul>
                        <li>Inscripción de Trabajadores al T-REGISTRO</li>
                        <li>Incripción al Remype</li>
                        <li>Fraccionamientos de deudas tributarias</li>
                        <li>Suspensión temporal de actividades</li>
                        <li>Baja definitiva de RUC</li>
                        <li>Reinicio de actividades</li>
                    </ul>
                </div>
                <img src={service} alt="logo" className="services__image" />
            </div>
        </section>

        <section className="our">
            <h1 className="services__title">Nosotros</h1>
            <div className="our__container">
                <img src={fernando} alt="logo" className="our__container__image" />
                <div className="our__container__text">
                    <p>Soy Fernando Aedo Sejuro, contador especializado en brindar soluciones
                        contables y financieras adaptadas a las necesidades de tu negocio.
                        Nuestro objetivo es ayudarte a crecer con seguridad y eficiencia,
                        ofreciéndote un servicio personalizado basado en años de experiencia
                        y un enfoque personalizado, te ayudamos a optimizar tu contabilidad, cumplir con tus
                        obligaciones tributarias y tomar decisiones estratégicas basadas
                        en información clara y precisa. Ya seas emprendedor, pyme o una gran
                        empresa, estamos aquí para brindarte el respaldo que necesitas. ¡Confía
                        en nosotros y lleva tus finanzas al siguiente nivel!</p>
                </div>
            </div>
        </section>

        <section className="phrase">
            <div className="phrase__container">
                <h1>El contador es...</h1>
                <p>auditor, tesorero, asesor, laboral,
                    asesor comercial, especialista en flujo de caja,
                    tributarista, mago, contralor, malabarista,
                    economista, adivino, archivista, sistemas y MÁS</p>
            </div>
            <div>
                <button>Escribenos</button>
            </div>
        </section>

        <div id="whatsapp">
            <a href="http://wa.me/+51970390105" target="_blank" id="toggle1" className="wtsapp">
                <i className="fa-brands fa-whatsapp"></i>
            </a>
        </div>
        <Footer />
    </>
  )
}

export default App
