import {useState, useEffect, memo} from 'react';
import ProductCard from './../../Global/ProductCard/ProductCard';
import './PropiedadesDestacadas.css';
import {getFirestore} from '../../../db';


const PropiedadesDestacadas = () => {
    const [items, setItems] = useState([]);
    const db = getFirestore();


    // const getProducts = new Promise((resolve, reject) => {
    //     const outstandingProducts = products.filter(item => item.outstanding);
    //     resolve(outstandingProducts);
    // })

    const getProductsFromDB = () => {
        db.collection('inmuebles').where("outstanding", "==", true).get()
        .then(docs => {
            let arr = [];
            docs.forEach(doc => {
                arr.push({id: doc.id, data: doc.data()})
            })

            setItems(arr);
        })
        .catch(e => console.log(e));

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
                        <h1>Arrienda Seguro y Simple</h1>

                        <ul>
                            {
                                items.map((item) => (
                                    <li key={item.id}>
                                        <ProductCard
                                            id={item.id}
                                            img={item.data.img}
                                            titulo={item.data.title}
                                            ubicacion={item.data.ubicacion}
                                            habitaciones={item.data.habitaciones}
                                            baños={item.data.baños}
                                            area={item.data.area}
                                            categoria={item.data.categoria}
                                            precio={item.data.precio} 
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
 
export default memo(PropiedadesDestacadas);
