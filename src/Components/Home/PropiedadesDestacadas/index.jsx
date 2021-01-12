import {useState, useEffect} from 'react';
import ProductCard from 'latienda/src/Components/Global/ProductCard/ProductCard';
import './PropiedadesDestacadas.css';
import {products} from '../../../products';


const PropiedadesDestacadas = () => {
    const [items, setItems] = useState([]);

    const getProducts = new Promise((resolve, reject) => {
        const outstandingProducts = products.filter(item => item.outstanding);
        resolve(outstandingProducts);
    })

    const getProductsFromDB = async () => {
        try {
            const result = await getProducts;
            setItems(result);

        } catch(error) {
            alert('No se pueden mostrar los inmuebles en este momento')
        }
    }

    useEffect(() => {
        getProductsFromDB();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


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
                                        <ProductCard
                                            id={item.id}
                                            img={item.img}
                                            title={item.title}
                                            ubicacion={item.ubicacion}
                                            habitaciones={item.habitaciones}
                                            baños={item.baños}
                                            mts={item.mts}
                                            category={item.category}
                                            price={item.price} 
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
