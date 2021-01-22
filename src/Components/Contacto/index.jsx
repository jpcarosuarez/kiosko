import './contacto.css';

const Contact = () => {

    return (
        <section className="contact"> 
            <div className="cont">
                
                <h2>Contactanos</h2>
                <form action="">
                    <input type="text" name="nombre" placeholder="Nombre" />
                    <input type="text" name="apellido" placeholder="Apellido" />
                    <input type="email" name="email" placeholder="E-mail" />
                    <input type="tel" name="tel" placeholder="Teléfono" />
                    <input type="text_area" name="mensaje" placeholder="Mensaje" /> 
                    <button> Enviar</button>

                </form>
            </div>

                   
        </section>
    )
}

export default Contact;