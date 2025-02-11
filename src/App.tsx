import './App.css'
import NavBar from "./components/navbar/NavBar.tsx";
import FormValidation from "./components/form/Form.tsx";

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
                    <FormValidation />
                </div>
            </div>
        </section>
        <h1>HOLA</h1>
        <h1>HOLA</h1>
        <h1>HOLA</h1>
        <h1>HOLA</h1>

        <h1>HOLA</h1><h1>HOLA</h1><h1>HOLA</h1>
        <h1>HOLA</h1>
        <h1>HOLA</h1>
        <h1>HOLA</h1>

    </>
  )
}

export default App
