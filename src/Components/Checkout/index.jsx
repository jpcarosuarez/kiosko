import {useState, useContext, useEffect} from 'react';
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

                            <img src={item.img} alt={item.titulo}/>
                            <div>
                                <h2>{item.item.titulo} </h2>

                                <p>Cantidad: {item.cantidad} Noches</p>
                                <p>Precio por noche: <strong>${item.item.precio}</strong></p>
                                <p>Comision por plataforma: <strong>${(item.item.precio * 3) / 100 }  </strong> </p>
                                <p>Precio total: <strong>${((item.item.precio * item.cantidad)+((item.item.precio * 3 ) / 100 ))}</strong></p>
                            </div>
                        
                        </li>

                    ))

                }
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