import {useState, useContext} from 'react';
import {Store} from '../../store';
import './checkout.css';
import {getFirestore} from '../../db';
import firebase from 'firebase/app';


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
                <h2>Datos de Reserva</h2>
                {
                    !venta ?
                    <form onSubmit={handleSubmitForm}>
                        <input type="text" value={formData.nombre} onChange={handleChangeInput} name="nombre" placeholder="Nombre" />
                        <input type="text" value={formData.apellido} onChange={handleChangeInput} name="apellido" placeholder="Apellido" />
                        <input type="text" value={formData.cedula} onChange={handleChangeInput} name="cedula" placeholder="Cedula" />
                        <input type="email" value={formData.email} onChange={handleChangeInput} name="email" placeholder="E-mail" />
                        <input type="tel" value={formData.tel} onChange={handleChangeInput} name="tel" placeholder="Teléfono" />                    
                        <button>Reservar</button>
                    </form> :
                    <p>La reserva se realizó correctamente, tu numero de seguimiento es: {idCompra} </p>
                }
                  
            </div>
        </section>
    )
}

export default Checkout;