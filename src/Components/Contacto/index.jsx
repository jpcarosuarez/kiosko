import './contacto.css';

const Contact = () => {

    return (
        <section className="contact"> 
            <div className="cont">
                
                <h2>Contactanos</h2>
                <div className="formularioContacto">
                    <form action="" >
                        <div>
                            <p>Nombre</p>
                            <input type="text" name="nombre" placeholder="Nombre" />
                        </div>
                        <div>
                            <p>Apellido</p>
                            <input type="text" name="apellido" placeholder="Apellido" />
                        </div>
                        <div>
                            <p>Correo</p>
                            <input type="email" name="email" placeholder="E-mail" />
                        </div>
                        <div>
                            <p>Teléfono</p>
                            <input type="tel" name="tel" placeholder="Teléfono" />

                        </div>

                        <div>
                            <p>Mensaje</p>

                            <label>
                                <textarea name="mensaje" placeholder="Mensaje" />
                            </label>

                        </div>
                        <div>
                            <input className="botonSubmit" type="submit" value="Enviar"/>
                        </div>

                    </form>
                </div>

            </div>

                   
        </section>
    )
}

export default Contact;