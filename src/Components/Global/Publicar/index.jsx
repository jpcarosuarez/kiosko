import {useState, useContext} from 'react';
import {getFirestore} from '../../../db';
import {Store} from '../../../store';
import firebase from 'firebase/app';
import './publicar.css';

const Publicar = () => {
    const db = getFirestore();
    const [data, setData] = useContext(Store);
    const [publicando, completoPublicado] = useState(false);
    

    const [formData, setFormData] = useState({
        nombre : '',
        email: '',
        tel: '',
        categoria: '',
        direccion: '',
        area: '',
        habitaciones: '',
        baños: '',
        tipoPropiedad: '',
        precio: '',
        titulo: '',
        descripcion: '',
        barrio: '',
        ciudad: '',
        disponibilidad: '',
        img: '',
        condiciones: '',
        whatsapp:'',


    })

    const[idInmueble, setIdInmueble] = useState('');

    const handleChangeInput = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const inmueble ={
        nombre: formData,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        db.collection('inmuebles').add(inmueble)
        .then(({id}) =>{
            completoPublicado(true);
            setIdInmueble(id);
        }).then((inmuebleRef) => {
            console.log("Inmueble registrado con ID: ", inmuebleRef.id);
        })
        .catch(e => console.log(e))
    }
    

    return (
        <section >
            
            <div className="left-container">
                    <div>
                        <h1>
                            Publica facilmente y comienza a arrendar.
                        </h1>

                        <h2>En Kiosko Inmobiliario (M.A 2018122) nos preocupamos por la seguridad y veracidad de los inmuebles para asegurar a los futuros arrendatarios una mayor tranquilidad durante el arriendo.</h2>
                        <h3> Requisitos: Copia de la cédula y Certificado de Tradición y Libertad. </h3>

                    </div>
            </div>

            <div className="publicar">

                {
                    !publicando ?
                    <form onSubmit={handleSubmitForm}  >
                        
                        <div className='right-container'>

                            <div className="Contacto">
                                <div>
                                    <p>Nombre Completo</p>
                                    <input type="text" value={formData.nombre} onChange={handleChangeInput} name="nombre" placeholder="Nombre" />
                                    <br/>
                                </div>
                                <div>
                                    <p>Correo</p>
                                    <input type="email" value={formData.email} onChange={handleChangeInput} name="email" placeholder="Correo" />
                                    <br/>
                                </div>
                                <div>
                                    <p>Teléfono </p>
                                    <input type="tel" value={formData.tel} onChange={handleChangeInput} name="tel" placeholder="Teléfono" />                    
                                    <br/>
                                </div>
                                <div>
                                    <p>WhatsApp</p>
                                    <input type="tel" value={formData.whatsapp} onChange={handleChangeInput} name="whatsapp" placeholder="WhatsApp" />
                                    <br/>
                                </div>




                            
                            </div>

                            <div>
                                <p>Tipo de propiedad a Arrendar</p>
                                <select type="text" value={formData.tipoPropiedad} onChange={handleChangeInput} name="tipoPropiedad" placeholder="Tipo de Propiedad" >                    
                                <option value="apartamento">Apartamento</option>
                                <option value="casa">Casa</option>
                                <option value="oficina">Oficina</option>
                                <option value="local">Local</option>
                                <option value="finca">Finca</option>                        
                                </select> 
                            </div>
                            <div>
                                <p>Categoria de Arriendo</p>
                                <select value={formData.categoria} onChange={handleChangeInput} name="categoria" placeholder="Categoria">                    
                                <option value="mensual">Arriendo Mensual</option>
                                <option value="dias">Arriendo por Días</option>
                                <option value="horas">Espacios por Horas</option>                  
                                </select>
                            </div>
                            <div>
                            <p>Precio</p>
                                <input type="text" value={formData.precio} onChange={handleChangeInput} name="precio" placeholder="Precio" /> 
                                <p>Titulo de la publicación</p>                
                                <input type="text" value={formData.titulo} onChange={handleChangeInput} name="titulo" placeholder="Titulo" />  
    
                            </div>
                            <div>
                                <p>Area (m2)</p>
                                <input type="text" value={formData.area} onChange={handleChangeInput} name="area" placeholder="Area" />                               
                            </div>
                            <div>
                                <p>Habitaciones</p><br/>
                                <select type="option" value={formData.habitaciones} onChange={handleChangeInput} name="habitaciones" placeholder="Habitaciones">  
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5+">5+</option>                        
                                </select>   
                            </div>
               
                            <div>
                                <p>Baño(s)</p>
                                <select type="option" value={formData.baños} onChange={handleChangeInput} name="baños" placeholder="Baños">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5+">5+</option>                        
                                </select> 
                            </div>
 
                            <div>
                                <p>Descripción</p>                  
                                <input type="text-area" value={formData.descripcion} onChange={handleChangeInput} name="descripcion" placeholder="Descripcion" />  
                                
                                <p>Barrio o Localidad</p>                  
                                <input type="text" value={formData.barrio} onChange={handleChangeInput} name="barrio" placeholder="Barrio / Localidad" />
                                
                                <p>Ciudad / Municipio</p>                   
                                <input type="checked" value={formData.ciudad} onChange={handleChangeInput} name="ciudad" placeholder="Ciudad" /> 

                                
                                <p>Dirección</p>
                                <input type="text" value={formData.direccion} onChange={handleChangeInput} name="direccion" placeholder="Dirección" />                    
                                
                            </div>
                            <div>
                                <p>Disponibilidad para mostrar</p>
                                <select type="text" value={formData.disponibilidad} onChange={handleChangeInput} name="disponibilidad" placeholder="Disponibilidad">                    
                                <option value="entreSemana">Entre Semana</option>
                                <option value="sabado">Solo Sábados</option>
                                <option value="sabadoDomingos">Sábados y Domingos</option>
                                <option value="todos">Todos los días</option>
                                </select>
                            </div>

 
                            <div>
                                <p>Certificado de tradicion y libertad no mayor a 30 días</p>

                                <input className="imagen" type="file" value={formData.img} onChange={handleChangeInput} name="img" placeholder="img" />     
                                <br/>
                                <label for="condiciones">Estoy de acuerdo con los terminos y condiciones</label>
                                <input type="checkbox" id="condiciones" value="condiciones"/> 
                            </div>
                            <button >Cargar</button>


                        </div>
                    
                    </form> :
                    <p><strong>El inmueble publicado lo podras encontrar con el siguiente codigo: </strong>  {idInmueble} </p>
                    
            
                }

                  
            </div>
        </section>
    )

}

export default Publicar;