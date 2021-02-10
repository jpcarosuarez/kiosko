import './Requisitos.css';

const Requisitos = () => {
    return (
        <section className="requisitos">
            <div className="container">

                <div className="tituloReq">
                    <h1>Consignar con nosotros. Es fácil. </h1> 
                    <h2>Empiece ahora, dejenos guiarle su mejor opción</h2>

                </div>
                <form>
                    <div>
                        <p>Nombre</p>
                        <input type="text" placeholder="nombre"/>
                    </div>
                    <div>
                        <p>Correo</p>
                        <input type="text" placeholder="E-mail" />
                    </div>
                    <div>
                        <p>Teléfono</p>
                        <input type="tel" placeholder="telefono" />

                    </div>
                    
                    
                    <div>
                        <p>Necesito ayuda en</p>
                        <select name="usuario" placeholder="Categoria">                    
                            <option value="propietario"> Vender o poner en arriendo mi inmueble </option>
                            <option value="dias">Comprar o arrendar un inmueble </option>
                        </select>
                    </div>

                    <input type="submit" value="Enviar" />
                </form>
            </div>
        </section>
    )
}

export default Requisitos;