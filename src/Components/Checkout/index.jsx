import {useState, useContext, useEffect} from 'react';
import {Store} from '../../store';
import './checkout.css';
import {getFirestore} from '../../db';
import firebase from 'firebase/app';
import Imagen from '../Global/Imagen/imagen';

const Checkout = () => {

    const db = getFirestore();
    const [data, setData] = useContext(Store);
    const [venta, completoVenta] = useState(false);
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        cedula: '',
        email: '',
        tel: '',
    })
    const [prods, setProds] = useState([]);

    useEffect(() => {
        if(data.items.length) {
            const productos = JSON.stringify(data.items);
         
            localStorage.setItem('productos', productos);

        }
        if(localStorage.getItem('productos')) {
            setProds(JSON.parse(localStorage.getItem('productos')));

        } else {
            setProds(data.items);
        }


    }, [data.items])

    const[idCompra, setIdCompra] = useState('');

    const handleChangeInput = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    
    const compra = {
        user: formData,
        items: data.items,
        totalPrice: data.precioTotal,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
    }
    
    const handleSubmitForm = (e) => {
        e.preventDefault();
        db.collection('ordenes').add(compra)
        .then(({id}) =>{
            completoVenta(true);
            setIdCompra(id);
        })
        .catch(e => console.log(e))
    }
    
    return (
        <section className="checkout">
            <div className="container">
                <h1>Confirmacion de Reserva</h1>

                {
                    data.items.map(item =>(
                        <li>

                            <Imagen src={item.img} alt={item.titulo}/>
                            <div>
                                <h2>{item.titulo} </h2>

                                <p>Cantidad: {item.quantity} Noches</p>
                                <p>Precio por noche: <strong>${item.precio}</strong></p>
                                <p>Comision por plataforma: <strong>${(item.precio*item.quantity * 3) / 100 }  </strong> </p>
                                <p>Precio total: <strong>${((item.precio * item.quantity)+((item.precio*item.quantity * 3 ) / 100 ))}</strong></p>
                            
                            
                            </div>
                        
                        </li>

                    ))

                }
                {
                    !venta ?
                    <form onSubmit={handleSubmitForm}>
                        <div>
                            <p>Nombre</p>
                            <input type="text" value={formData.nombre} onChange={handleChangeInput} name="nombre" placeholder="Nombre" />

                        </div>
                        <div>
                            <p>Apellido</p>
                            <input type="text" value={formData.apellido} onChange={handleChangeInput} name="apellido" placeholder="Apellido" />

                        </div>

                        <div>
                            <p>Tipo de identificación </p>
                            <select value={formData.tipoIdentificacion}>
                                <option selected value="cc">C.C</option>
                                <option value="ce">C.E</option>
                                <option value="pasaporte">Pasaporte</option>
                                <option value="nit">Nit</option>                   
                            </select>

                            <input type="text" value={formData.cedula} onChange={handleChangeInput} name="numIdentificacion" placeholder="Número" />

                        </div>

                        <div>
                            <p>Fecha de nacimiento</p>
                            <input type="date" value={formData.fechaNacimiento} onChange={handleChangeInput} name="fechaNacimiento" placeholder="Fecha de Nacimiento" />
                        </div>
                            
                        <div>
                            <p>Correo</p>
                            <input type="email" value={formData.email} onChange={handleChangeInput} name="email" placeholder="E-mail" />

                        </div>
                        <div>
                            <p>Teléfono</p>
                            <input type="tel" value={formData.tel} onChange={handleChangeInput} name="tel" placeholder="Teléfono" />                    

                        </div>
                                                                                   
                        <button>Reservar</button>
                    </form> :
                    <p>La reserva se realizó correctamente, tu numero de seguimiento es: {idCompra} </p>
                }

            </div>
        </section>
    )
}

export default Checkout;