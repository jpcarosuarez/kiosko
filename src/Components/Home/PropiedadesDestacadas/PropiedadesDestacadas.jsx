import {useState, useEffect} from 'react';
import ItemListContainer from '../../Global/ItemListContainer/ItemListContainer';
import './PropiedadesDestacadas.css';
import {products} from '../../../products';



const PropiedadesDestacadas = () => {

    const [items, setItems] = useState([]);
  
    const getProducts = new Promise((resolve, reject) => {
        const outstandingProducts = products.filter(item => item.outstanding);
        resolve(outstandingProducts);
    })

    const getPropiedadesFromDB = async () => {
        try {
            const result = await getProducts;
            setItems(result);

        } catch(error) {
            alert('No se pueden mostrar los inmuebles en este momento')
        }
    }

    useEffect(() => {
        getPropiedadesFromDB();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <section className="propiedadesDestacadas">
            <div className="container">
                {
                    items.length ? 
                    <>
                        <h2>Arriendos en Bogotá</h2>

                        <ul>
                            {
                                items.map((item, index) => (
                                    <li key={index}>
                                        <ItemListContainer
                                            id={item.id}
                                            img={item.img}
                                            titulo={item.title}
                                            ubicacion={item.ubicacion}
                                            habitaciones={item.habitaciones}
                                            baños={item.baños}
                                            mts={item.mts}
                                            categoria={item.category}
                                            precio={item.price} 
                                        />
                                    </li>
                                ))
                            }
                        </ul>

                    </> :
                    <p className="cargando">Cargando Propiedades...</p>

                }
                

            </div>
        </section>
    )
}
 
export default PropiedadesDestacadas;
