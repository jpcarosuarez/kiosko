import {useState, useContext} from 'react';
import {getFirestore} from '../../../db';
import {Store} from '../../../store';
import firebase from 'firebase/app';

const Publicar = () => {
    const db = getFirestore();
    const [data, setData] = useContext(Store);
    const [publicando, completoPublicado] = useState(false);

    const [formData, setFormData] = useState({
        categoria: '',
        tipoOferta: '',
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
        estrato: '',
        responsable:'',
        correo: '',
        telefono: '',
        disponibilidadParaMostrar: '',
        img: '',
        outstanding: '',

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
        })
        .catch(e => console.log(e))
    }


    return (
        <section className="checkout">
            <div className="container">
                <h2>Publica Facilmente y comienza a arrendar </h2>
                {
                    !publicando ?
                    <form onSubmit={handleSubmitForm}>
                        <input type="text" value={formData.nombre} onChange={handleChangeInput} name="nombre" placeholder="Nombre" />
                        <input type="text" value={formData.apellido} onChange={handleChangeInput} name="apellido" placeholder="Apellido" />
                        <input type="text" value={formData.cedula} onChange={handleChangeInput} name="cedula" placeholder="Cedula" />
                        <input type="email" value={formData.email} onChange={handleChangeInput} name="email" placeholder="E-mail" />
                        <input type="tel" value={formData.tel} onChange={handleChangeInput} name="tel" placeholder="Teléfono" />                    
                        <input type="text" value={formData.categoria} onChange={handleChangeInput} name="categoria" placeholder="categoria" />                    
                        <input type="text" value={formData.tipoOferta} onChange={handleChangeInput} name="tipoOferta" placeholder="tipo de Oferta" />                    
                        <input type="text" value={formData.direccion} onChange={handleChangeInput} name="direccion" placeholder="direccion" />                    
                        <input type="text" value={formData.area} onChange={handleChangeInput} name="area" placeholder="area" />                    
                        <input type="text" value={formData.habitaciones} onChange={handleChangeInput} name="habitaciones" placeholder="habitaciones" />                    
                        <input type="text" value={formData.baños} onChange={handleChangeInput} name="baños" placeholder="baños" />                    
                        <input type="text" value={formData.tipoPropiedad} onChange={handleChangeInput} name="tipoPropiedad" placeholder="tipo de Propiedad" />                    
                        <input type="text" value={formData.precio} onChange={handleChangeInput} name="precio" placeholder="precio" />                    
                        <input type="text" value={formData.titulo} onChange={handleChangeInput} name="titulo" placeholder="titulo" />                    
                        <input type="text-area" value={formData.descripcion} onChange={handleChangeInput} name="descripcion" placeholder="descripcion" />                    
                        <input type="text" value={formData.barrio} onChange={handleChangeInput} name="barrio" placeholder="barrio" />                    
                        <input type="text" value={formData.ciudad} onChange={handleChangeInput} name="ciudad" placeholder="ciudad" />                    
                        <input type="text" value={formData.estrato} onChange={handleChangeInput} name="estrato" placeholder="estrato" />                    
                        <input type="text" value={formData.responsable} onChange={handleChangeInput} name="responsable" placeholder="responsable" />                    
                        <input type="text" value={formData.correo} onChange={handleChangeInput} name="correo" placeholder="correo" />                    
                        <input type="text" value={formData.telefono} onChange={handleChangeInput} name="telefono" placeholder="telefono" />                    
                        <input type="text" value={formData.disponibilidad} onChange={handleChangeInput} name="disponibilidad" placeholder="disponibilidad" />                    
                        <input type="image" value={formData.img} onChange={handleChangeInput} name="img" placeholder="img" />     
                        <button >Cargar</button>
                    
                    </form> :
                    <p>Estamos Aprobando la publicacion con el siguiente codigo: {idInmueble} <strong>Nombre:</strong> {formData.nombre} <strong>Apellido: </strong> {formData.apellido} <strong>Total </strong>{data.precioTotal}</p>
                    
                
                }

                  
            </div>
        </section>
    )

}

export default Publicar;